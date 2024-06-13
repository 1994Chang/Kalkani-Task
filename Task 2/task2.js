function fibonacciSeries(limit) {
    let fibSeries = [0, 1]; 

    while (true) {
        let nextFib = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
        if (nextFib > limit) {
            break; 
        }
        fibSeries.push(nextFib); 
    }

    console.log(fibSeries.join(", "));
}

const userInput = prompt("Enter the limit for the Fibonacci series:");
const limit = parseInt(userInput, 10);

if (!isNaN(limit)) {
    fibonacciSeries(limit);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
