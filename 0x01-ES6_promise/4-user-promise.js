// Prototype function to sign up a user
export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    // Resolve the promise with an object containing firstName and lastName
    resolve({ firstName, lastName });
  });
}
