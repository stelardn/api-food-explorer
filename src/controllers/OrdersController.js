const OrderRepository = require('../repositories/OrderRepository');
const orderRepository = new OrderRepository();

const OrderItemsRepository = require('../repositories/OrderItemsRepository');
const orderItemsRepository = new OrderItemsRepository();

const OrderCreateService = require('../services/Orders/OrderCreateService');
const orderCreateService = new OrderCreateService(orderRepository);

const OrderUpdateService = require('../services/Orders/OrderUpdateService');
const orderUpdateService = new OrderUpdateService(orderRepository, orderItemsRepository);

const OrderIndexService = require('../services/Orders/OrderIndexService');
const orderIndexService = new OrderIndexService(orderRepository, orderItemsRepository);

const OrderShowService = require('../services/Orders/OrderShowService');
const orderShowService = new OrderShowService(orderRepository, orderItemsRepository);

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

    async index(request, response) {
        const user_id = request.query; // auth

        const allOrders = await orderIndexService.getAll();

        return response.json(allOrders);
    }

    async show(request, response) {
        const user_id = request.query; // auth

        const { id } = request.params;

        const order = await orderShowService.getOrder(id);

        return response.json(order);
    }

    async updateStatus(request, response) {
        const { id } = request.params;

        const { status } = request.body;

        const statusUpdated = await orderUpdateService.updateStatus({ id, status });

        return response.json(statusUpdated);

    }
}

module.exports = OrdersController;