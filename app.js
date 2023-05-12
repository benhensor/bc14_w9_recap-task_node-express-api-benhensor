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
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());



// get recipes
app.get("/api/recipes", async function (req, res) {
  console.log(req.query, "this is the query")
  return res.json(await getRecipes());
})

// get recipes by ID
app.get("/api/recipes:id", async (req, res) => {
  res.send(await getRecipeByID("4c848d48-b81e-4d6f-b45d-7b3090f4f8ef"))
})

// input for recipe test
// const testRecipe = [
//   {
//     title: "Crunchy Frog",
//     ingredients: ["Frog", "Crunch", "Pieces of Envy"],
//     instructions: "Add together and have fun etc",
//     image: "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg"
//   }
// ]

// let newRecipe = gatherFormData()

// creating a Recipe
app.post("/api/recipes", async (req, res) => {
  console.log("recipe posted")
  const createdRecipe = await createRecipe(req.body)
  res.send({success: true, payload: createdRecipe})
})

const testUpdateRecipe = [
  {
    title: "Soggy Frog",
    ingredients: ["Frog", "Sog", "Flashes of Excellence"],
    instructions: "`Mix` together and have fun etc",
    image: "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg"
  }
]

// update recipe by ID
app.patch("/api/recipes/:id", async (req, res) => {
  res.send(await updateRecipeByID(id, testUpdateRecipe))
})

// delete recipe by ID
app.delete("/api/recipes/:id", async (req, res) => {
  res.send(await deleteRecipeByID(id))
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
