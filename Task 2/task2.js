function fibonacciSeries(limit) {
    let fibSeries = [0, 1]; // Initialize the series with the first two Fibonacci numbers

    // Generate the Fibonacci sequence
    while (true) {
        let nextFib = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
        if (nextFib > limit) {
            break; // Exit the loop if the next Fibonacci number exceeds the limit
        }
        fibSeries.push(nextFib); // Add the next Fibonacci number to the series
    }

    // Print the Fibonacci series
    console.log(fibSeries.join(", "));
}

// Get user input
const userInput = prompt("Enter the limit for the Fibonacci series:");
const limit = parseInt(userInput, 10);

if (!isNaN(limit)) {
    fibonacciSeries(limit);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
