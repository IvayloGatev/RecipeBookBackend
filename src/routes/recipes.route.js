import express from "express";
import controller from  "../controllers/recipes.controller.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.get("/", controller.getRecipeList);

router.get("/:id", controller.getRecipeById);

router.post("/", upload.single('image'), controller.addRecipe);

router.put("/:id", controller.updateRecipe);

router.delete("/:id", controller.deleteRecipe);

export default router;
