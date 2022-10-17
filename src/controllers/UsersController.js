const UserCreateService = require("../services/UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");

class UsersController {
  async create(request, response) {
    const userRepository = new UserRepositoryInMemory();
    const userCreateService = new UserCreateService(userRepository);
    const { name, email, password } = request.body;

    const user = await userCreateService.execute({ name, email, password });

    return response.status(201).json(user)

  }

  async show(request, response) {

  }
}

module.exports = UsersController;