import express from "express";

// utils
import response from "./utils/response";

const route = express.Router();

// routes

route.get("/", (req, res) =>
  response(res, [], "server is running", false, 200)
);

export default route;
