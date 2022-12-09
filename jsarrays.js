const cars = ["Saab", "Volvo", "BMW"];

console.log(cars[2]);
console.log(cars.length);

cars[1] = "Elife";
console.log(cars);

// Mutate array data
cars[cars.length] = "Mustang";
console.log(cars);

// Different data types
let john = ["John", "Smith", 1990, "teacher", false];
john.push("BLUE"); // adds a new element to an array
john.unshift("Mr.");
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

const fruits = ["Elife", "Chigozirim", "Chinedu"];
let type = typeof fruits;
console.log(type);

//Array Methods
const fruit = ["banana", "orange", "apple", "mango"];
fruit.toString();
console.log(fruit.toString());
console.log(fruit.join(" * "));
console.log(fruit.pop());
console.log(fruit.push("Bola"));
console.log(fruit.shift());
console.log(fruit.unshift("Agbado"));

const myGirls = ["Elife", "Chigozirim"];
const myBoys = ["Ndinechi", "Chinedu"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const arr4 = arr1.concat(arr2, arr3);
console.log(arr4);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return b - a;
});
console.log(
    points.sort(function (a, b) {
        return b - a;
    })
);
console.log(
    points.sort(function (a, b) {
        return a - b;
    })
);
console.log(
    points.sort(function () {
        return 0.5 - Math.random();
    })
);
