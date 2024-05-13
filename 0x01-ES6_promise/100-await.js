// Import necessary functions from utils.js
import { uploadPhoto, createUser } from './utils';

// Async function to upload photo and create user
export default async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser functions
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    // Return an object with the photo and user responses
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    // If any function fails, return an empty object
    return {
      photo: null,
      user: null
    };
  }
}
