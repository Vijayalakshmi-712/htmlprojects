function fibonacci(n) {
    let fibSeries = [0, 1];
    while (fibSeries.length < n) {
      fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);
    }
    return fibSeries;
  }
  
  console.log(fibonacci(10));