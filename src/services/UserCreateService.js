const { hash } = require("bcrypt");

class UserCreateService {
  // constructor(userRepository) {
  //   this.userRepository = userRepository;
  // }

  async execute({ name, email, password }) {
    const hashedPassword = await hash(password, 8);

    return { name, email, password: hashedPassword }
  }


}

module.exports = UserCreateService;