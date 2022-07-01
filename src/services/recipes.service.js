import databaseConfig from "../configs/database.config.js";
import pg from "pg";
import Joi from "joi";

const { Client } = pg;

async function getRecipeList(query) {
  const client = createClient();
  await client.connect();
  let queryString = "Select id, name from recipes";
  if (Object.entries(query).length > 0) {
    queryString += " where";
    if (query.name) queryString += ` name ilike '${query.name}%'`;
    else if (query.country) queryString += ` country = '${query.country}'`;
  }
  const result = await client.query(queryString);
  await client.end();
  return result.rows;
}

async function getRecipeById(id) {
  const client = createClient();
  await client.connect();
  const result = await client.query(`Select * from recipes where id = ${id}`);
  if (result.rowCount == 0)
    throwError(`Element with id ${id} couldn't be found.`, 404);
  return result.rows;
}

async function addRecipe(recipe, image) {
  const validate = validateRecipe(recipe);
  if (validate.error)
    throwError("Couldn't create a new recipe. Invalid data provided.", 400);
  const client = createClient();
  await client.connect();
  const result =
    await client.query(`Insert into recipes (name, country, ingredients, instructions, creator_id) 
  values ('${recipe.name}', '${recipe.country}', '${recipe.ingredients}', '${recipe.instructions}', '${recipe.creatorId}') returning id`);
  return result.rows[0];
}

async function updateRecipe(id, recipe) {
  //   const updatedRecipe = recipes.find((r) => r.id == id);
  //   if (!updatedRecipe)
  //     throwError(`Element with id ${id} scouldn't be found.`, 404);
  //   updatedRecipe.name = recipe.name || updatedRecipe.name;
  //   updatedRecipe.country = recipe.country || updatedRecipe.country;
  //   updatedRecipe.ingredients = recipe.ingredients || updatedRecipe.ingredients;
  //   updatedRecipe.instructions =
  //     recipe.instructions || updatedRecipe.instructions;
  //   const result = validateRecipe(updatedRecipe);
  //   if (result.error)
  //     throwError("Couldn't update recipe. Invalid data provided.", 400);
  //   return updatedRecipe;
}

async function deleteRecipe(id) {
  //   const recipe = await getRecipeById(id);
  //   const index = recipes.indexOf(recipe);
  //   recipes.splice(index, 1);
  //   return recipe;
}

function createClient() {
  const client = new Client({
    host: databaseConfig.host,
    database: databaseConfig.database,
    port: databaseConfig.port,
    user: databaseConfig.user,
    password: databaseConfig.password,
    ssl: databaseConfig.ssl,
  });
  return client;
}

function throwError(message, status) {
  const error = new Error(message);
  error.status = status | 500;
  throw error;
}

function validateRecipe(recipe) {
  const schema = Joi.object().keys({
    id: Joi.number().greater(-1).optional(),
    name: Joi.string().required(),
    country: Joi.string().required(),
    ingredients: Joi.string().required(),
    instructions: Joi.string().required(),
    creatorId: Joi.string().required(),
    image: Joi.binary().optional(),
  });

  return schema.validate(recipe);
}

const service = {
  getRecipeList,
  getRecipeById,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
export default service;
