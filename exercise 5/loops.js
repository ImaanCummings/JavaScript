const numbers = [1, 2, 3, 4, 5]
for (let i = 1; i < 6; i++) {
    console.log(i)
}

let count = 5

while (count >= 1) {
    console.log(count)
    count--
}

for (const number of numbers) {
    if (number % 2 == 0) {
        console.log(number)
    }
}

function sum (numbersArray) {
    let total = 0

    for (let number of numbersArray) {
        total += number
    }

    return total
}

console.log(sum(numbers))