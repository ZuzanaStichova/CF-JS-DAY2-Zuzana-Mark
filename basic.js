//Exercise 1
// var temperature = Math.floor((Math.random()*31) -5);
// console.log(temperature);

// if (temperature < 10) {
//     console.log("The weather is cold")
// } else {
//     console.log("The weather is moderate")
// }

//Exercis 2
var numbers = [1, 7, -3, 9, 2, 0, 100, 50];
var test_one = Math.max(...numbers)
var test_two = Math.max.apply(Math, numbers);

console.log(numbers)
console.log(test_one)
console.log(test_two)

temp = numbers[0];
for (i=1; i<numbers.length;i++) {
    if (numbers[i]>temp) {
        temp = numbers[i]
    }
}
console.log(temp)

//Exercise 3
var temperature = Math.floor((Math.random()*31) -5);
console.log(temperature);

var img = document.createElement("img");
img.src = "pic_1.jpg";
var src = document.getElementById("image"); 



if (temperature < 0) {
    document.write(temperature + " is too cold.") 
    src.appendChild(img)
} else if (temperature < 20) {
        document.write(temperature + " is fine")
    } else {
        document.write(temperature + " is too high")
    }

