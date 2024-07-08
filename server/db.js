const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/the_acme_store"
);
const uuid = require("uuid");
const bcrypt = require("bcrypt");
