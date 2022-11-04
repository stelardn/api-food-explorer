const UserCreateService = require('../services/UserCreateService');
const UserRepository = require('../repositories/UserRepository');
const AppError = require('../utils/AppError');

const userRepository = new UserRepository();
const userCreateService = new UserCreateService(userRepository);
class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const user = await userCreateService.execute({ name, email, password });

        return response.status(201).json(user);

    }

    async show(request, response) {
        const user_id = request.user.id;

        const user = await userRepository.findById(user_id);

        if (!user) {
            throw new AppError('Usuário não encontrado.');
        }

        return response.json({ user });
    }
}

module.exports = UsersController;