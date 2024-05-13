// Function to upload a photo
export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Reject the promise with an Error containing the fileName
    reject(new Error(`${fileName} cannot be processed`));
  });
}
