const AppError = require('../utils/AppError');

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
        const user_id = request.user.id;

        const order = await orderCreateService.execute({ user_id });

        return response.json(order);
    }

    async update(request, response) {
        const { id } = request.params; // order id

        const { meal_id, quantity } = request.body;

        const orderUpdated = await orderUpdateService.execute({ id, meal_id, quantity });

        return response.json(`Carrinho atualizado! Total atual: R$${orderUpdated.price}.`);
    }

    async index(request, response) {
        const user_id = request.user.id;

        const { user } = request.query;

        const allOrders = await orderIndexService.getAll();

        if (allOrders) {
            let ordersResponse;

            if (user) {
                if (Number(user) === user_id) {
                    ordersResponse = allOrders.filter(order => order.user_id === user_id);
                } else {
                    throw new AppError('Usuário não autorizado a acessar esse recurso.', 403);
                }

            } else {
                ordersResponse = allOrders.filter(order => order.user_id === user_id || order.status !== 1);
            }

            return response.json(ordersResponse);
        }

        return response.status(204).json({});

    }

    async show(request, response) {
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