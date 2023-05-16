import express from "express";
import morgan from "morgan";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

// import { gatherFormData } from "./public/main";

const app = express();
const PORT = 3001;

app.use(express.static("public"));
app.use(express.json());


// get recipes
app.get("/api/recipes", async (req, res) => {
  // how do we want to respond to this request?
  // use getRecipes helper function to read all recipes 
  // send recipes back as json to client

  const payload = await getRecipes();

  console.log('This is the data being sent back to the client', payload)

  const body = { success: true, payload: payload }
  
  res.json(body);
})


// get recipes by ID
app.get("/api/recipes/:id", async (req, res) => {
  const recipeId = req.params.id
  const payload = await getRecipeByID(recipeId);
  const success = payload !== undefined

  if (success) {
    const body = { success: success, payload: payload }
    return res.json(body)
  }
  res.status(404).json({
    sucess: false,
    payload: null,
  })
})


// creating a Recipe
app.post("/api/recipes", async (req, res) => {
  const recipeWithoutId = req.body
  // use createRecipe function
  const payload = await createRecipe(recipeWithoutId)

  const body = { success: true, payload: payload }
  res.json(body)
})


// update recipe by ID
app.patch("/api/recipes/:id", async (req, res) => {

  const recipeId = req.params.id 
  const updates = req.body
  const payload = await updateRecipeByID(recipeId, updates)

  const body = { success: true, payload: payload }


  res.json(body)
})


// delete recipe by ID
app.delete("/api/recipes/:id", async (req, res) => {
  const deletedRecipe = await deleteRecipeByID(req.id)
  res.send({ success: true, payload: deletedRecipe })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
