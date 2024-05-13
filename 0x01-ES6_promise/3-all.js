// 3-all.js

// Import necessary functions from utils.js
import { uploadPhoto, createUser } from "./utils";

// Prototype function to handle profile signup
export default function handleProfileSignup() {
  // Use Promise.all() to collectively resolve all promises
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      // Log firstName and lastName from resolved values
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch((error) => {
      // Log error message if any promise rejects
      console.error('Signup system offline');
    });
}
