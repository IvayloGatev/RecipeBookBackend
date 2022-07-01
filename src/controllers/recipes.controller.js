import service from "../services/recipes.service.js";

async function getRecipeList(req, res, next) {
  try {
    const result = await service.getRecipeList(req.query);
    res.send(result);
  } catch (e) {
    next(e);
  }
}

async function getRecipeById(req, res, next) {
  try {
    const result = await service.getRecipeById(req.params.id);
    res.send(result);
  } catch (e) {
    next(e);
  }
}

async function addRecipe(req, res, next) {
  try {
    const result = await service.addRecipe(req.body, req.file);
    res.send(result);
  } catch (e) {
    next(e);
  }
}

async function updateRecipe(req, res, next) {
  try {
    const result = await service.updateRecipe(req.params.id, req.body);
    res.send(result);
  } catch (e) {
    next(e);
  }
}

async function deleteRecipe(req, res, next) {
  try {
    const result = await service.deleteRecipe(req.params.id);
    res.send(result);
  } catch (e) {
    next(e);
  }
}

const controller = {
  getRecipeList,
  getRecipeById,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
export default controller;
