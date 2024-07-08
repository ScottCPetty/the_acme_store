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
app.use(express.json());

api.get("/api/users", async (req, res, next) => {
  try {
    res.send(await fetchUsers());
  } catch (error) {
    next(error);
  }
});
api.get("/api/products", async (req, res, next) => {
  try {
    res.send(await fetchProducts());
  } catch (error) {
    next(error);
  }
});
api.get("/api/users/:id/favorites", async (req, res, next) => {
  try {
    res.send(await fetchFavorites(req.params.id));
  } catch (error) {
    next(error);
  }
});
api.post("/api/users/:id/favorites", async (req, res, next) => {});
api.delete("/api/users/:userId/favorites/:id", async (req, res, next) => {});

const init = async () => {
  await client.connect();
  console.log("connected to database");
  await createTables();
  console.log("created tables");
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`listening on port ${port}`));
};
init();
