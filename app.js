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
app.get("/api/recipes", async function (req, res) {
  console.log(req.query, "this is the query")
  const recipeArray = await getRecipes(req.query)
  console.log(recipeArray)
  return res.json({ success: true, payload: recipeArray });
})

// get recipes by ID
app.get("/api/recipes/:id", async (req, res) => {
  const chosenRecipe = await getRecipeByID(req.body[0].id)
  res.send({ success: true, payload: chosenRecipe });
})


// creating a Recipe
app.post("/api/recipes", async (req, res) => {
  console.log("recipe posted")
  const createdRecipe = await createRecipe(req.body)
  res.send({success: true, payload: createdRecipe})
})


// update recipe by ID
app.patch("/api/recipes/:id", async (req, res) => {
  const updateRecipe = await updateRecipeByID(req.id, req.body)
  res.send({ success: true, payload: updateRecipe })
})

// delete recipe by ID
app.delete("/api/recipes/:id", async (req, res) => {
  const deletedRecipe = await deleteRecipeByID(req.id)
  res.send({ success: true, payload: deletedRecipe })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
