import express from "express";
import morgan from "morgan";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());



// get recipes
app.get("/api/recipes", (req, res) => {
  res.send("{ success: Boolean, payload: recipe array }")
})

// get recipes by ID
app.get("/api/recipes:id", (req, res) => {
  res.send("{ success: Boolean, payload: recipe }")
})

// creating a Recipe
app.post("/api/recipes", (req, res) => {
  res.send("{ success: Boolean, payload: recipe }")
})

// update recipe by ID
app.patch("/api/recipes/:id", (req, res) => {
  res.send("{ success: Boolean, payload: recipe }")
})

// delete recipe by ID
app.delete("/api/recipes/:id", (req, res) => {
  res.send("{ success: Boolean, payload: recipe }")
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
