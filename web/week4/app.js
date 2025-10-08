/*
let num1 = getRandomNumber(1, 10);
let num2 = getRandomNumber(0, 100);

console.log(num1);
console.log(num2);

displayRandomNumber();

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

function displayRandomNumber() {
    alert(getRandomNumber(1, 10));
}
*/

//Part 3.Loops & Arrays
/*
let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];

let namesThatStartWithA = [];

for (let name of names) {
    if (name.charAt(0) == 'A') {
        namesThatStartWithA.push(name);
    }
}

console.log(namesThatStartWithA);
*/

// Part 4. Numerical for loops
/*let results = [];

for (let i = 0; i < 3; i++) {
    let num1 = getRandomNumber(1, 10);
    let num2 = getRandomNumber(1, 10);
    let start = Date.now();
    let response = prompt(`What is ${num1} + ${num2}?`);
    let end = Date.now();
    let time = (end - start) / 1000; //Caculate response time in seconds
    if (response == num1 + num2) {
        feedback = 'correct';
    } else {
        feedback = 'incorrect';
    }

    results.push([feedback, time]);

    alert(`You answered ${response} (${feedback}) in ${time} seconds.`);

}

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

console.log(results);
*/

//Part 5. Objects

//Arrays: Store multiple elements, accessed via numerical indexes
/*let participantA = ['Alice', 21, true];

let participantB = {
    name: 'Alice',
    age: 21,
    consent: true
}

participantB.consent = false;
participantB.startTime = '2:00pm';
delete participantB.age;
console.log(participantB);

if (participantA[2]) {

}

if (participantB.consent) {

}
*/