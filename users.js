import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

const filename = "users.json";


// GET USERS

// read and data from the json file 
// parse data into a variable
// return success = true and the variable

export async function getUsers() {
  try {
  // READ/PARSE
  const users =  JSON.parse(await fs.readFile(filename, "utf-8"))
  return { success: true, payload: users }
  } 
  catch (error) {
  console.error(error)
  throw error
  }
  
}


// GET USER BY ID

export async function getUserByID(id) {
  // READ/PARSE
  const users =  JSON.parse(await fs.readFile(filename, "utf-8"))
  // find user
  const userIndex = users.findIndex((user) => user.id === id)
  // if user not found, throw error
  if (userIndex === -1) {
    throw new Error(`User with ID: ${id} not found`)
  }
  const user = users[userIndex];
  return user
}


// CREATE USER 

export async function createUser(newUser) {
  try {
    // READ/PARSE
    const users =  JSON.parse(await fs.readFile(filename, "utf-8"))
    // destructure input to improve readability
    const { first_name, last_name, email, catchphrase } = newUser
    // generate id and combine with incoming data
    const user = {
      id: uuidv4(),
      first_name,
      last_name,
      email,
      catchphrase
    }
    // add created user to parsed array
    users.push(user)
    // write to the json file
    await fs.writeFile(filename, JSON.stringify(users), "utf-8")
    return user;
  } 
  catch (error) {
  console.error(error)
  throw error
  }
}


// UPDATE USER BY ID 

export async function updateUserByID(id, updatedUser) {
 
}


// DELETE USER 

export async function deleteUserByID(id) {
 
}