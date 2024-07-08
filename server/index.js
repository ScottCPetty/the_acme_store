const {
  client,
  createTables,
  createProduct,
  createUser,
  fetchUsers,
  fetchProducts,
  createFavorite,
  fetchFavorites,
  destroyFavorites,
} = require("./db.js");
const express = require("express");
const app = express();
app.use(express.JSON);

api.get("/api/users", async (req, res, next) => {});
api.get("/api/products", async (req, res, next) => {});
api.get("/api/users/:id/favorites", async (req, res, next) => {});
api.post("/api/users/:id/favorites", async (req, res, next) => {});
api.delete("/api/users/:userId/favorites/:id", async (req, res, next) => {});

const init = async () => {};
init();
