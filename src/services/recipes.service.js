import Joi from "joi";

const recipes = [
  {
    id: 0,
    name: "Classic Lasagna",
    country: "Italy",
    ingredients:
      "3/4 lb. lasagna noodles \n1 tsp. extra-virgin olive oil, plus more for drizzling \n2 lb. ground beef \n4 cloves garlic, minced \n2 tsp. dried oregano \nKosher salt \nFreshly ground black pepper \n2 (32-0z.) jars marinara \n16 oz. whole milk ricotta \n1/2 c. freshly grated Parmesan, divided \n1/4 c. chopped parsley, plus more for garnish \n1 large egg \n2 lb. sliced mozzarella",
    instructions:
      "Preheat oven to 375º. In a large pot of salted boiling water, cook pasta according to package directions until al dente, less 2 minutes. Drain and drizzle a bit of olive oil to prevent noodles from sticking together. Meanwhile, in a large pot over medium-high heat, heat oil. Cook ground beef until no longer pink, breaking up with a wooden spoon. Remove from heat and drain fat. Return beef to skillet and add garlic and oregano and cook, stirring, for 1 minute. Season with salt and pepper, then add marinara and stir until warmed through.  Combine ricotta, 1/4 cup Parmesan, parsley, and egg in a large mixing bowl and season with salt and pepper. Set aside. In a large casserole dish, evenly spread a quarter of the meat sauce across the bottom of the dish, then top with a single layer of lasagna noodles, a layer of ricotta mixture, a single layer of mozzarella, and a layer of meat sauce. Repeat layers, topping the last layer of noodles with meat sauce, Parmesan, and mozzarella. Cover with foil and bake for 15 minutes, then increase temperature to 400º and bake uncovered for 18 to 20 minutes. Garnish with parsley before serving.",
  },
  {
    id: 1,
    name: "Weisswurst sausage",
    country: "Germany",
    ingredients:
      "1 tablespoon lard or vegetable oil \n1/2 cup minced white onion \n3 pounds white meat, pork, veal, turkey, rabbit, chicken \n1 pound bacon ends or fatty pork shoulder \n20 grams salt, about 2 tablespoons plus a teaspoon \n1 tablespoon minced parsley \n1/2 teaspoon dry mustard powder \n1/2 teaspoon powdered ginger \n1/2 teaspoon white pepper \n1/2 teaspoon mace \n1/2 teaspoon ground cardamom \nGrated zest of a lemon \n1 teaspoon C-Bond carrot fiber (optional) \n1 cup ice water \nHog casings",
    instructions:
      "Heat the lard in a small pan and cook the onions until soft. Do not brown them. Let them cool to room temperature, or refrigerate them. This can be done up to a day in advance. Soak about 10 feet of hog casings in warm water. When you are ready to grind, mix the meats, salt, parsley, spices and lemon zest. Grind through a coarse or medium die. Put the mixture in the freezer while you clean up, or, if the meat is still below 40°F, grind again through a fine die, at least 4.5 mm and ideally 3 mm. This time, definitely put the meat in the freezer while you clean up. Once the meat is at about 34°F, put it in a large bowl with the water and C-Bind, if you are using it. Mix this with your clean hands for about 90 seconds, or until the mixture binds together as a cohesive mass that you can pick up in one glob. Your hands should hurt from the cold. Put a length of casing on your sausage stuffer and fill it with the weisswurst. Crank out one large length of sausage, leaving about 3 to 5 inches of \"tail,\" unfilled casing, on either end. You don't want to fill the casings overly tight just yet. Repeat this process until you have all the sausage in casings. Get a large pot of water hot, about 160°F. To form links, pinch off a link of about 6 inches long at one end of the length. Spin it away from you to set the link. Now move down the length and pinch off another link, but this time spin it towards you. Keep doing this, spinning in alternate directions, until you get to the end of the length. Doing this helps prevents the links from coming apart. Tie off the ends. Now, to tighten them, get a clean needle or sausage pricker. Gently compress the meat in each length, spinning it a little more in the direction you first spun. You will see air pockets. Prick the casing to remove them, again gently compressing the links to fill the casing. Do this for every link. Carefully lower the weisswurst into the hot water. They will want to unspin a bit so watch for that. Poach them gently for 20 minutes or so. While they are cooking, fill a large basin with ice water. Dunk the links in this ice water after they've cooked. Leave them there for 10 minutes. Pat them dry and you are ready to go. They will keep for about 5 days in the fridge, and can be frozen",
  },
  {
    id: 2,
    name:"Paella Valenciana",
    country: "Spain",
    ingredients: "500g Rabbit \n500g Chicken \n60 cl Extra virgin olive oil \n1 ripe tomato \n200g of green beans \n200g g of garrofón (lima bean) \n500g Bomba rice (or any other short-grain rice if you can’t get it) \n1.5 liters chicken or vegetable stock \nSprig of fresh rosemary \nSaffron from La Mancha (if you don’t have any don’t worry, you can use a Paella Seasoning like this one ) \nSalt \n10 pre-boiled snails (optional)",
    instructions: "1. Heat up the paella, add the oil and when it gets quite warm, add the meat (chicken and rabbit, cut into small pieces).\n" +
    "2. Sauté it over low heat until the meat is sealed and golden.\n" +
    "3. The next step is to add the tomatoes (peeled and ground) and vegetables (lima and green beans), maintaining the same heat.\n" +
    "4. Once everything is well fried, add the stock, a sprig of rosemary and heat everything up.\n" +
    "5. Just when it begins to boil, add the rice, the snails, salt and saffron and remove the rosemary. At this moment the fire needs to be at its maximum.\n" +
    "6. When the rice is cooking for about 10 minutes, decrease the heat gradually for at least another ten minutes.\n" +
    "7. Once the paella is done and all the liquid has evaporated, let it stand for a couple of minutes to let it form the socarrat or socarradet (light crust of rice on the bottom of the pan) and then it’s ready."

  },
  {
    id: 3,
    name:"Bulgarian Moussaka",
    country: "Bulgaria",
    ingredients: "2 lb (~1 kg) potatoes, cut in small cubes\n" +
    "1 lb (1/2 kg) ground meat\n" +
    "1 onion, chopped\n" +
    "2 cups milk\n" +
    "4 eggs\n" +
    "1/2 cup oil\n" +
    "2 tablespoons paprika\n" +
    "1 tablespoon salt\n" +
    "1 teaspoon crushed black pepper",
    instructions: "Start with cooking the onion in a pan with 1/4 oil until golden brown. Then add the ground meat, the pepper, the paprika, and half the salt. Fry until meat gets brown and then remove the pan from the heat.\n" +
    "\nMix well with the potatoes and the other 1/2 tablespoon of salt. Add the mixture in a casserole pan with the rest of the oil. Bake in oven for about 40 minutes on 425 F (~220 C). \n" +
    "\n" +
    "In the meantime mix the milk and the eggs separately and pour on top  of the meal for the last 10  minutes in the oven untill it turns brownish."
  },
  {
    id: 4,
    name:"Kamavaht",
    country: "Estonia",
    ingredients: "100 g plain, unflavoured yoghurt\n" +
    "80 g kama flour\n" +
    "100 ml 35% cream\n" +
    "200 g vanilla curd\n" +
    "100 ml orange juice (juice of approximately 1,5 oranges)\n" +
    "70 g honey\n" +
    "\n" +
    "Jelly\n" +
    "600 ml water\n" +
    "400 g fresh or frozen cranberries\n" +
    "90 g sugar\n" +
    "15 gelatine sheets\n" +
    "Freeze-dried berries (can be replaced with fresh or frozen berries)",
    instructions: "1. Roast the kama flour in a pan for a couple of minutes until it becomes a little darker.\n" +
    "2. Wash and dry the oranges. Zest the orange peels without reaching the white parts. Cut the orange in half and press out the juice. Use a sieve to separate the seeds and pulp.\n" +
    "3. Put the roasted kama flour, zest and juice of the orange and yoghurt in a bowl. Leave in the refrigerator to set overnight.\n" +
    "4. On the following day, add curd and honey. Mix evenly.\n" +
    "5. Soak the gelatine sheets in cold water.\n" +
    "6. Pour some water and the cranberries into a saucepan. Bring to boil and simmer for a couple of minutes. Press the berries and the juice through a sieve twice. Pour the juice in a saucepan, add sugar and stir until the sugar has melted.\n" +
    "7. Warm up about 100 ml of cranberry juice. Add gelatine sheets to the juice and mix until the sheets have melted. Pour the gelatine liquid into the warm cranberry juice, mix and pour into serving bowls. Put the bowls in the fridge and leave for about 6 hours to set.\n" +
    "8. Place in the refrigerator to set for about 6 hours.\n" +
    "9. Whip the cream just before serving and gradually add it to the kama foam, mixing very gently.\n" +
    "10. To serve: use a pastry bag to add kama foam onto the jelly. Sprinkle some freeze-dried, crushed berries on top."
  }
];

async function getRecipeList() {
  const objects = []
  for(const recipe of recipes){
    objects.push({
      id: recipe.id,
      name: recipe.name
    })
  }
  return objects;
}

async function getRecipeById(id) {
  const recipe = recipes.find((r) => r.id == id);
  if (!recipe) throwError(`Element with id ${id} couldn't be found.`, 404);
  return recipe;
}

async function addRecipe(recipe) {
  const result = validateRecipe(recipe);
  if (result.error)
    throwError("Couldn't create a new recipe. Invalid data provided.", 400);

  const newRecipe = {
    id: recipes.length,
    name: recipe.name,
    country: recipe.country,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
  };
  recipes.push(newRecipe);
  return newRecipe;
}

async function updateRecipe(id, recipe) {
  const updatedRecipe = recipes.find((r) => r.id == id);
  if (!updatedRecipe)
    throwError(`Element with id ${id} scouldn't be found.`, 404);

  updatedRecipe.name = recipe.name || updatedRecipe.name;
  updatedRecipe.country = recipe.country || updatedRecipe.country;
  updatedRecipe.ingredients = recipe.ingredients || updatedRecipe.ingredients;
  updatedRecipe.instructions =
    recipe.instructions || updatedRecipe.instructions;
  const result = validateRecipe(updatedRecipe);
  if (result.error)
    throwError("Couldn't update recipe. Invalid data provided.", 400);

  return updatedRecipe;
}

async function deleteRecipe(id) {
  const recipe = await getRecipeById(id);
  const index = recipes.indexOf(recipe);
  recipes.splice(index, 1);
  return recipe;
}

function throwError(message, status) {
  const error = new Error(message);
  error.status = status;
  throw error;
}

function validateRecipe(recipe) {
  const schema = Joi.object().keys({
    id: Joi.number().greater(-1).optional(),
    name: Joi.string().required(),
    country: Joi.string().required(),
    ingredients: Joi.string().required(),
    instructions: Joi.string().required(),
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
