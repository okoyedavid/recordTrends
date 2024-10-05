import { createRequire } from "module";
const require = createRequire(import.meta.url);
const jsonServer = require("json-server");
const db = require("../data/db.json"); // Adjust this path as needed

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default (req, res) => {
  server(req, res);
};
