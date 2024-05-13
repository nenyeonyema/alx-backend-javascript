// Function to guard a math function execution
export default function guardrail(mathFunction) {
  // Initialize an array to store values and error messages
  const queue = [];

  try {
    // Execute the math function and append its return value to the queue
    queue.push(mathFunction());
  } catch (error) {
    // If an error occurs, append the error message to the queue
    queue.push(error.message);
  } finally {
    // Append the message "Guardrail was processed" to the queue
    queue.push('Guardrail was processed');
  }

  // Return the queue array
  return queue;
}
