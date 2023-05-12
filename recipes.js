import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const filename = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
  const recipesJSON = await fs.readFile(filename)
  const recipes = JSON.parse(recipesJSON);
  return recipes;
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {
  const recipesJSON = await fs.readFile(filename);
  const recipes = JSON.parse(recipesJSON);

  let recipeIndex = null;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      recipeIndex = i;
      break;
    }
  }

  if (recipeIndex !== null) {
    const selectedRecipe = recipes[recipeIndex]
    //await fs.writeFile(filename, JSON.stringify(recipes));
    console.log("Recipe found")
    return selectedRecipe;
  }
  console.log("Recipe not found")
  return null;
}


// CREATE A RECIPE
export async function createRecipe(newRecipe) {
  const recipesJSON = await fs.readFile(filename);
  const recipes = JSON.parse(recipesJSON);

  const addedRecipe = {
    id: uuidv4(),
    newRecipe,

}
recipes.push(addedRecipe);
await fs.writeFile(filename, JSON.stringify(recipes));

return addedRecipe;

};

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {
  const recipesJSON = await fs.readFile(filename);
  const recipes = JSON.parse(recipesJSON);

  let recipe = null;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      recipe = recipes[i];
      recipes[i].updatedRecipe = updatedRecipe;
      break;
    }
  }

  await fs.writeFile(filename, JSON.stringify(recipes));

  return recipe;
}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {

  const recipesJSON = await fs.readFile(filename);
  const recipes = JSON.parse(recipesJSON);

  let recipeIndex = null;

  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id === id) {
      recipeIndex = i;
      break;
    }
  }

  if (recipeIndex !== null) {
    const deletedRecipe = recipes.splice(recipeIndex, 1);
    await fs.writeFile(filename, JSON.stringify(recipes));
    console.log("Recipe deleted")
    return deletedRecipe[0];
  }
  console.log("recipe not found")
  return null;

}
