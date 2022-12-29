const AppError = require('../utils/AppError');

const OrderItemsRepository = require('../repositories/OrderItemsRepository');
const orderItemsRepository = new OrderItemsRepository();

const OrderRepository = require('../repositories/OrderRepository');
const orderRepository = new OrderRepository();

const OrderIndexService = require('../services/Orders/OrderIndexService');
const orderIndexService = new OrderIndexService(orderRepository, orderItemsRepository);

const UserRepository = require('../repositories/UserRepository');
const userRepository = new UserRepository();

const UserCreateService = require('../services/UserCreateService');
const userCreateService = new UserCreateService(userRepository);
class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const user = await userCreateService.execute({ name, email, password });

        return response.status(201).json(user);

    }

    async show(request, response) {
        const user_id = request.user.id;

        let user = await userRepository.findById(user_id);

        if (!user) {
            throw new AppError('Usuário não encontrado.', 204);
        }

        const userOrders = await orderIndexService.getUserOrders(user_id);

        user = {
            ...user,
            orders: [...userOrders]
        };

        return response.json({ user });
    }
}

module.exports = UsersController;