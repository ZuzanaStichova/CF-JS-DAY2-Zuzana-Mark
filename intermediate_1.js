//Exercise 1

//Using 2-dimensional arrays
var students_array = [['Martin', 76],['Thomas',85],['Klaus',65],['Maria',93],['David',81]]

total = 0
for (i=0; i<students_array.length;i++) {
    total += students_array[i][1];
}
avg_points = total/students_array.length

//Using a dictionary
var students = {
    'Martin' : 76,
    'Thomas' : 85,
    'Klaus' : 65,
    'Maria' : 93,
    'David' : 81
}

var name = prompt("Enter name")

if (students[name]<60) {
    console.log(name + " got an F")
} else if (students[name]<70) {
    console.log(name +" got a D")
} else if (students[name]<80) {
    console.log(name + " got a C")
} else if (students[name]<90) {
    console.log(name +" got a B")
} else if (students[name]<100) {
    console.log(name +" got an A")
} else {
    console.log("invalid")
}

//Here are all grades:
total = 0
for (let k in students) {
    total += students[k]
    console.log(k + " has "+ students[k] + " points")
}
avg_points = total/students_array.length


if (avg_points<60) {
    console.log("The average is an F")
} else if (avg_points<70) {
    console.log("The average is a D")
} else if (avg_points<80) {
    console.log("The average is a C")
} else if (avg_points<90) {
    console.log("The average is a B")
} else if (avg_points<100) {
    console.log("The average is a A")
} else {
    console.log("invalid")
}
