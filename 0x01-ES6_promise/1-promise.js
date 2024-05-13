// Prototype function to return a Promise
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // If success is true, resolve the promise with status 200 and body 'Success'
      resolve({ status: 200, body: 'Success' });
    } else {
      // If success is false, reject the promise with an error message
      reject(new Error('The fake API is not working currently'));
    }
  });
}
