//your JS code here. If required.
// Helper function to return a promise with delay
function delayedPromise(value, delay, operationText = "Result") {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.getElementById("output").textContent = `${operationText}: ${value}`;
      resolve(value);
    }, delay);
  });
}

// Event listener on button
document.getElementById("btn").addEventListener("click", () => {
  const inputValue = parseFloat(document.getElementById("ip").value);

  if (isNaN(inputValue)) {
    document.getElementById("output").textContent = "Please enter a valid number";
    return;
  }

  // Start promise chain
  delayedPromise(inputValue, 2000) // Initial delay + show original number
    .then((num) => delayedPromise(num * 2, 1000)) // Multiply by 2
    .then((num) => delayedPromise(num - 3, 1000)) // Subtract 3
    .then((num) => delayedPromise(num / 2, 1000)) // Divide by 2
    .then((num) => delayedPromise(num + 10, 1000, "Final Result")); // Add 10
});
