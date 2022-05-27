'use strict';

const input1 = document.getElementById('value1');
const input2 = document.getElementById('value2');
const signInput = document.getElementById('signs');
const button = document.querySelector('button');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;
    const signs = signInput.value;

    if (signs === '+') {
        const result1 = Number(value1) + Number(value2);
        result.textContent = result1;
    } else if (signs !== '/' && signs !== '*' && signs !== '-' && signs !== '+') {
        alert("Введите знак");
    } else if (value1 === '') {
        alert("Введите первое число");
    } else if (value2 === '') {
        alert("Введите второе число");
    } else if (signs === '-') {
        const result1 = Number(value1) - Number(value2);
        result.textContent = result1;
    } else if (signs === '*') {
        const result1 = Number(value1) * Number(value2);
        result.textContent = result1;
    } else if (signs === '/') {
        const result1 = Number(value1) / Number(value2);
        result.textContent = result1;
    }
})