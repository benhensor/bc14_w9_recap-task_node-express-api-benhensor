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
  
}


// CREATE USER 

export async function createUser(newUser) {
 
}


// UPDATE USER BY ID 

export async function updateUserByID(id, updatedUser) {
 
}


// DELETE USER 

export async function deleteUserByID(id) {
 
}