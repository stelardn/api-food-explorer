const UserCreateService = require("../services/UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");

const userRepository = new UserRepositoryInMemory();
const userCreateService = new UserCreateService(userRepository);
class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const user = await userCreateService.execute({ name, email, password });

    return response.status(201).json(user)

  }

  async show(request, response) {
    const { id } = request.query;

    const user = await userRepository.findById(id);

    return response.json({ user });
  }
}

module.exports = UsersController;