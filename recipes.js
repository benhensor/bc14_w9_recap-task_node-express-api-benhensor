import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";


const filename = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
  // read/parse json file
  const recipesJSON = await fs.readFile(filename, { encoding: 'utf-8'})
  const recipes = JSON.parse(recipesJSON)
  return recipes;
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {
  // read/parse json file
  const recipes = await getRecipes();

  for (let i = 0; i < recipes.length; i++) {
    const currentRecipe = recipes[i]
    if (currentRecipe.id === id) {
      return currentRecipe
    }
  }
  return console.log('undefined');
}



// CREATE A RECIPE
export async function createRecipe(newRecipe) {
  // read/parse existing recipes
  const recipes = await getRecipes();
  // create new recipe object with id
  // merging newRecipe with id 
  const created = {
    id: uuidv4(),
    ...newRecipe,
  }

  // add recipe to existing recipes 
  recipes.push(created)
  // save to disk
  const  json = JSON.stringify(recipes)

  await fs.writeFile(filename, json, { encoding: 'utf-8' })
};

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {
  // read/parse existing recipes
  const recipes = await getRecipes();

  const indexFound = recipes.findIndex(recipe => recipe.id === id)

  if (indexFound >= 0) {
    const preUpdate = recipes[indexFound]
    const updated = {
      ...preUpdate,
      ...updates,
      id: id,
    }
    recipes[indexFound] = updated;
    return recipes[indexFound]
  } 
}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {
  // read/parse existing recipes
  const recipes = await getRecipes();

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
