for (i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else {
        console.log(i)
}
}


for (i = 1; i < 101; i++) {
    if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
        console.log("FizzBuzz")
    } else if (Number.isInteger(i / 3)) {
        console.log("Buzz")
    } else if (Number.isInteger(i / 5)) {
        console.log("Fizz")
    } else {
        console.log(i)
}
}