import express from "express";
import controller from  "../controllers/recipes.controller.js";
import multer from "multer";

const router = express.Router();
const upload = multer();

/**
 * @swagger
 * /api/recipes:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.get("/", controller.getRecipeList);

router.get("/:id", controller.getRecipeById);

router.post("/", upload.single('image'), controller.addRecipe);

router.post("/:id", upload.single('image'), controller.updateRecipe);

router.delete("/:id", controller.deleteRecipe);

export default router;
