import service from "../services/recipes.service.js";
import { Buffer } from "buffer";

async function getRecipeList(req, res, next) {
  try {
    authenticate(req);
    const result = await service.getRecipeList(req.query);
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  } catch (e) {
    next(e);
  }
}

async function getRecipeById(req, res, next) {
  try {
    const user = authenticate(req);
    const result = await service.getRecipeById(req.params.id, user);
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  } catch (e) {
    next(e);
  }
}

async function addRecipe(req, res, next) {
  try {
    const user = authenticate(req);
    const result = await service.addRecipe(req.body, req.file, user);
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  } catch (e) {
    next(e);
  }
}

async function updateRecipe(req, res, next) {
  try {
    const user = authenticate(req);
    const result = await service.updateRecipe(
      req.params.id,
      req.body,
      req.file,
      user
    );
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  } catch (e) {
    next(e);
  }
}

async function deleteRecipe(req, res, next) {
  try {
    const user = authenticate(req);
    const result = await service.deleteRecipe(req.params.id, user);
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  } catch (e) {
    next(e);
  }
}

function authenticate(req) {
  if (
    !req.headers.authorization ||
    req.headers.authorization.indexOf("Basic ") === -1
  ) {
    service.throwError("You are unauthorized.", 401);
  }

  const base64Credentials = req.headers.authorization.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username] = credentials.split(":");
  return username;
}

const controller = {
  getRecipeList,
  getRecipeById,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
export default controller;
