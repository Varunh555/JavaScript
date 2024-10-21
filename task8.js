function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}


function displayFibonacciInReverse(n) {
    
    const fibonacciSeries = generateFibonacci(n);

    
    const reversedSeries = fibonacciSeries.reverse();

    
    console.log('Fibonacci series in reverse order:');
    console.log(reversedSeries.join(', '));
}


const numTerms = 10;


displayFibonacciInReverse(numTerms);
