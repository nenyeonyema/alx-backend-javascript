// Import necessary functions
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Function to handle profile signup
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call signUpUser and uploadPhoto functions
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Wait for all promises to settle
  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => {
      // Map results to an array with status and value/error
      return results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }));
    });
}
