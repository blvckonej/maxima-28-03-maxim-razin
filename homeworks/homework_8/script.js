'use strict';

const fibonacci = function makeFibonacciFunction(n) {
    if (n <= 1) {
        return n;
    } else {
        return makeFibonacciFunction(n - 1) + makeFibonacciFunction(n - 2);
    }
}
