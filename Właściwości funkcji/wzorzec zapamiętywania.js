var longRunningFunction = function (a, b, c) {
    longRunningFunction.cache = longRunningFunction.cache || {};

    const cacheKey = JSON.stringify(arguments);

    if (!longRunningFunction.cache[cacheKey]) {
        sleep(5000);
        longRunningFunction.cache[cacheKey] = a * b * c;
    }
    return longRunningFunction.cache[cacheKey];
}

function sleep(timeInMs) {
    const d1 = new Date();
    let d2 = new Date();
    while (d2.valueOf() < d1.valueOf() + timeInMs) {
        d2 = new Date();
    }
}

console.log(longRunningFunction(1, 2, 3)); // czekamy 5 sekund
console.log(longRunningFunction(1, 2, 3)); // wynik do razu
console.log(longRunningFunction(10, 20, 3)); // czekamy 5 sekund
console.log(longRunningFunction(3, 2, 3)); // czekamy 5 sekund
console.log(longRunningFunction(30, 11, 3)); // czekamy 5 sekund
console.log(longRunningFunction(3, 2, 3)); // wynik od razu
console.log(longRunningFunction(3, 2, 3)); // wynik od razu