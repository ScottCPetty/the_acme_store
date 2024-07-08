const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/the_acme_store"
);
const uuid = require("uuid");
const bcrypt = require("bcrypt");

const createTables = async () => {};
const createProduct = async () => {};
const createUser = async () => {};
const fetchUsers = async () => {};
const fetchProducts = async () => {};
const createFavorite = async () => {};
const fetchFavorites = async () => {};
const destroyFavorites = async () => {};

module.exports = {
  client,
  createTables,
  createProduct,
  createUser,
  fetchUsers,
  fetchProducts,
  createFavorite,
  fetchFavorites,
  destroyFavorites,
};
