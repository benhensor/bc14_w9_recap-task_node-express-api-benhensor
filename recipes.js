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
export async function getRecipeByID(id) {}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
