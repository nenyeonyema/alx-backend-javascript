// Function prototype to handle response from API
export default function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      // When the Promise resolves, return an object with status 200 and body 'success'
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      // When the Promise rejects, return an empty Error object
      console.error('Error:', error.message);
      return new Error();
    });
}
