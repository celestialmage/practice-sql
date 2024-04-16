const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "bubble.db.elephantsql.com",
      user: "mrgmrjnz",
      password: "6VE4_H6lM2KtDDTvbXs6PtKkdCe3KXmq",
      database: "mrgmrjnz",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
