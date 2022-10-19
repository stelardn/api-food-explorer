const { hash } = require("bcrypt");

const AppError = require("../utils/AppError");

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {

    if (!name) {
      throw new AppError("Informe um nome válido.");
    }

    if (!email) {
      throw new AppError("Informe um email válido.");
    }

    const userUsingThisEmail = await this.userRepository.findByEmail(email);

    if (userUsingThisEmail) {
      throw new AppError("Já existe uma conta registrada com esse email");
    }

    if (!password) {
      throw new AppError("Informe uma senha válida.");
    }

    const hashedPassword = await hash(password, 8);

    const userInfo = { name, email, password: hashedPassword }

    const user = await this.userRepository.create(userInfo);

    return user;
  }


}

module.exports = UserCreateService;