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
app.get("api/recipes", async function (req, res) {
  console.log(req.query, "this is the query")
  return res.json(await getRecipes())
})

// app.get("/api/quotes", async function(req, res) {
//   console.log(req.query, 'this is the query');
//   if (req.query.type === "random") {
//     console.log('random')
//     return res.send(await getRandomQuote());
//   }
//   res.send(await getQuotes());
// })

// // get recipes by ID
// app.get("/api/recipes:id", (req, res) => {
//   res.send("{ success: Boolean, payload: recipe }")
// })

// // creating a Recipe
app.post("/api/recipes", (req, res) => {
  res.send("{ success: Boolean, payload: recipe }")
})

// // update recipe by ID
// app.patch("/api/recipes/:id", (req, res) => {
//   res.send("{ success: Boolean, payload: recipe }")
// })

// // delete recipe by ID
// app.delete("/api/recipes/:id", (req, res) => {
//   res.send("{ success: Boolean, payload: recipe }")
// })

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
