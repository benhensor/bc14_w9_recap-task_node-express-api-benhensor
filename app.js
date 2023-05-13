import express from 'express';
import { getUsers } from "./users.js";

const app = express();
app.use(express.json());

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await getUsers()
    res.json({ success: true, payload: users })
  } catch (error) {
    res.status(500).json({ success: false, payload: error.message })
  } 
})

// Get user by ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await getUserByID(req.params.id)
    res.json({ success: true, payload: user })
  } catch (error) {
    res.status(404).json({ success: false, payload: error.message })
  }
})

// Create new user: 
app.post("/api/users", async (req, res) => {
  try {
    const user = await createUser(req.body)
    res.json({ success: true, payload: user })
  } catch (error) {
    res.status(500).json({ success: false, payload: error.message })
  }
});


// Update user by ID
app.patch("/api/users/:id", async (req, res) => {
  try {
    const user = await updateUserByID(req.params.id, req.body)
    res.json({ success: true, payload: user })
  } catch (error) {
    res.status(500).json({ success: false, payload: error.message })
  }  
});


// Delete user
app.delete("/api/users/:id", (req, res) => {

});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`))
