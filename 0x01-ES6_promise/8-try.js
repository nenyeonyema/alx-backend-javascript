// Function to divide two numbers
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is zero
  if (denominator === 0) {
    // Throw an error if denominator is zero
    throw new Error('cannot divide by 0');
  }

  // Return the result of the division
  return numerator / denominator;
}
