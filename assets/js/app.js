const numbers = [];
let num;
let maxValue = 10;

for (i = 0; i < 5; i += 1) {
    num = Number(prompt('Введіть число для заповнення масиву:', ''))
    numbers.push(num)
}

for (let s = 0; s < numbers.length; s += 1) {
    if (numbers[s] < maxValue) {
        numbers.splice(s)
    }

}
alert(`Числа білше за ${maxValue}: ${numbers}`)

