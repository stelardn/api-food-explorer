const knex = require("../database/knex");

class UserRepository {

  async create({ name, email, password }) {
    // const user = {
    //   id: Math.floor(Math.random() * 1000) + 1,
    //   name,
    //   email,
    //   password
    // };
    // this.users = [...this.users, user];

    const user = await knex("users").insert({ name, email, password });

    return user;
  }

  async findByEmail(email) {
    // const user = this.users.find(user => user.email === email);

    const user = await knex("users").where({ email }).first();

    return user;
  }

  async findById(id) {
    // const user = this.users.find(user => user.id === Number(id));
    const user = await knex("users").where({ id }).first();

    return user;
  }
}

module.exports = UserRepository;