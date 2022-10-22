const OrderRepository = require('../repositories/OrderRepository');
const orderRepository = new OrderRepository();

const OrderCreateService = require('../services/Orders/OrderCreateService');
const orderCreateService = new OrderCreateService(orderRepository);
class OrdersController {
    async create(request, response) {
        const {user_id} = request.query;

        const order = await orderCreateService.execute({user_id});

        return response.json(order);
    }
}

module.exports = OrdersController;