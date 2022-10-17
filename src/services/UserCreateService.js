const { hash } = require("bcrypt");

const AppError = require("../utils/AppError");

class UserCreateService {
  // constructor(userRepository) {
  //   this.userRepository = userRepository;
  // }

  async execute({ name, email, password }) {
    const hashedPassword = await hash(password, 8);

    if (!name) {
      throw new AppError("Informe o nome.");
    }

    return { name, email, password: hashedPassword }
  }


}

module.exports = UserCreateService;