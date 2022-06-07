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
    } else if (signs === '-') {
        const result1 = Number(value1) - Number(value2);
        result.textContent = result1;
    } else if (signs === '*') {
        const result1 = Number(value1) * Number(value2);
        result.textContent = result1;
    } else if (signs === '/') {
        const result1 = Number(value1) / Number(value2);
        result.textContent = result1;
    } else if (signs !== '/' || signs !== '*' || signs !== '-' || signs !== '+') {
        result.textContent = 'Программа не поддерживает такую операцию'
    } if (value1 === '') {
        result.textContent = 'Введите первое число'
    } if (value2 === '') {
        result.textContent = 'Введите второе число'
    } if (signs === '') {
        result.textContent = 'Не введен знак'
    } else if(signs === '/' && value2 === '0' || value2 === '-0') {
        result.textContent = 'Нельзя делить на ноль, чувачок'        
    }
})