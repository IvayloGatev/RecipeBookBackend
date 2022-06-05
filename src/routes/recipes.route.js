import express from "express";
import controller from  "../controllers/recipes.controller.js";

const router = express.Router();

router.get("/", controller.getRecipeList);

router.get("/:id", controller.getRecipeById);

router.post("/", controller.addRecipe);

router.put("/:id", controller.updateRecipe);

router.delete("/:id", controller.deleteRecipe);

export default router;
