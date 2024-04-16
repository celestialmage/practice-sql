require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL, // Use the DATABASE_URL directly
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
