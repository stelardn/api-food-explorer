// const { request } = require("express");

const UserCreateService = require("../services/UserCreateService");

class UsersController {
  async create(request, response) {
    const userCreateService = new UserCreateService();
    const { name, email, password } = request.body;

    const user = await userCreateService.execute({ name, email, password });

    return response.status(201).json({ user })

  }
}

module.exports = UsersController;