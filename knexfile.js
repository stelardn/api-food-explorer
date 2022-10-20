const { resolve } = require("path");

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: resolve(__dirname, "src", "database", "database.db");
    },
    useNullAsDefault: true,
  }

};
