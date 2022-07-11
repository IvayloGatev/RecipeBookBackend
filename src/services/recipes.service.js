import databaseConfig from "../configs/database.config.js";
import pg from "pg";
import Joi from "joi";
import { Buffer } from "buffer";
const { Client } = pg;

async function getRecipeList(query) {
  const client = createClient();
  await client.connect();
  let queryString = "Select id, name, country from recipes";
  if (Object.entries(query).length > 0) {
    queryString += " where";
    if (query.name) queryString += ` name ilike '${query.name}%'`;
    if (query.name && query.country) queryString += " and ";
    if (query.country) queryString += ` country = '${query.country}'`;
  }
  const result = await client.query(queryString);
  await client.end();
  return result.rows;
}

async function getRecipeById(id, user) {
  const client = createClient();
  await client.connect();
  const result = await client.query(`Select * from recipes where id = ${id}`);
  if (result.rowCount == 0) throwError(`Recipe couldn't be found.`, 404);

  const recipe = result.rows[0];
  recipe["isCreator"] = recipe["creatorid"] == user ? true : false;
  delete recipe["creatorid"];
  if (recipe["image"]) {
    recipe["image"] = Buffer.from(recipe["image"], "base64").toString("binary");
  } else {
    delete recipe["image"];
  }
  return recipe;
}

async function addRecipe(recipe, image, user) {
  recipe["creatorId"] = user;
  const validate = validateRecipe(recipe);
  if (validate.error) throwError("Invalid data provided.", 400);

  const client = createClient();
  await client.connect();
  const result =
    await client.query(`Insert into recipes (name, country, ingredients, instructions, creatorId ${
      image ? ", image" : ""
    }) 
values ('${recipe.name}', '${recipe.country}', '${recipe.ingredients}', '${
      recipe.instructions
    }', '${recipe.creatorId}' 
${
  image ? ", bytea('" + image.buffer.toString("base64") + "')" : ""
}) returning id`);

  await client.end();
  return result.rows[0];
}

async function updateRecipe(id, recipe, image, user) {
  recipe["creatorId"] = user;
  const validate = validateRecipe(recipe);
  if (validate.error) throwError("Invalid data provided.", 400);

  const client = createClient();
  await client.connect();
  await checkPermission(client, id, user);
  const result = await client.query(
    `Update recipes set name = '${recipe.name}', country = '${
      recipe.country
    }', ingredients = '${recipe.ingredients}', instructions = '${
      recipe.instructions
    }', image = ${
      image ? "bytea('" + image.buffer.toString("base64") + "')" : "NULL"
    } where id = ${id} returning id`
  );

  await client.end();
  return result.rows[0];
}

async function deleteRecipe(id, user) {
  const client = createClient();
  await client.connect();
  await checkPermission(client, id, user)
  const result = await client.query(
    `delete from recipes where id = ${id} returning id`
  );

  await client.end();
  return result.rows[0];
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

async function checkPermission(client, id, user) {
  const result = await client.query(
    `Select creatorid from recipes where id = ${id}`
  );
  if (result.rowCount == 0) throwError(`Recipe couldn't be found.`, 404);
  else if(result.rows[0].creatorid !== user) throwError("You are not allowed to perform this operation.", 403);
}

function throwError(message, status) {
  const error = new Error(message);
  error.status = status || 500;
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
  throwError,
};
export default service;
