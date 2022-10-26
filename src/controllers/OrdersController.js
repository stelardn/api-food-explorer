const OrderRepository = require('../repositories/OrderRepository');
const orderRepository = new OrderRepository();

const OrderItemsRepository = require('../repositories/OrderItemsRepository');
const orderItemsRepository = new OrderItemsRepository();

const OrderCreateService = require('../services/Orders/OrderCreateService');
const orderCreateService = new OrderCreateService(orderRepository);

const OrderUpdateService = require('../services/Orders/OrderUpdateService');
const orderUpdateService = new OrderUpdateService(orderRepository, orderItemsRepository);
class OrdersController {
    async create(request, response) {
        const { user_id } = request.query;

        const order = await orderCreateService.execute({ user_id });

        return response.json(order);
    }

    async update(request, response) {
        const { user_id } = request.query;

        const { id } = request.params; // order id

        const { meal_id, quantity } = request.body;

        const orderUpdated = await orderUpdateService.execute({ id, meal_id, quantity });

        return response.json(`Carrinho atualizado! Total atual: R$${orderUpdated.price}.`);
    }
}

module.exports = OrdersController;