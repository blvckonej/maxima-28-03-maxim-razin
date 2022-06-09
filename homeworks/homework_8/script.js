'use strict';

function makeFibonacciFunction() {
    let fibPrev = 0;
    let fibCur = 1;
    let fibRes = 0;
    return function getNext() {
        [fibRes, fibPrev, fibCur] = [fibPrev, fibCur, fibPrev + fibCur];
        return fibRes;
    };
}

let helper = makeFibonacciFunction();

for (let i = 0; i < 10; i++) {
    console.log(helper());
}