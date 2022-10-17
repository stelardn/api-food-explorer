const { hash } = require("bcrypt");

const AppError = require("../utils/AppError");

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {

    if (!name) {
      throw new AppError("Inform a valid name.");
    }

    if (!email) {
      throw new AppError("Inform a valid email. ");
    }

    const userUsingThisEmail = await this.userRepository.findByEmail(email);

    if (userUsingThisEmail) {
      throw new AppError("There is already an account registered with this email.");
    }

    if (!password) {
      throw new AppError("Inform a valid password.");
    }

    const hashedPassword = await hash(password, 8);

    const userInfo = { name, email, password: hashedPassword }

    const user = await this.userRepository.create(userInfo);

    return user;
  }


}

module.exports = UserCreateService;