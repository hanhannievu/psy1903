let experiment = 'Stroop';

let welcomeMessage = `
Welcome to our ` + experiment + ` experiment. 
Please read the instructions carefully.
`;

//console.log(welcomeMessage);
//console.log(typeof experiment); //string
//console.log(experiment.charAt(0)); //S

let trialCountMax = 20;
//console.log(typeof trialCountMax); //number
//console.log(trialCountMax.charAt(0)); //

// TODO: Randomize colors
let colors = ['red', 'green', 'blue'];

alert('Welcome to the ' + experiment + ' experiment!');

// trialCountMax = 40;

//At the halfway point we will display a pause screen
let halfWayCount = trialCountMax / 2;

//console.log(halfWayCount); // Expected 20

let correct = true;
console.log(typeof correct); //boolean

console.log(10 <= 15); //true

console.log(5 == 5 && 10 > 1); //true
console.log('red' == 'blue' || 1 < 10); //true
console.log(20 > 15 < 15); //false --> but it's actually true because 20 > 15 = true = 1
console.log(12 % 2 == 0); //true
console.log('red' != 'green' || 'orange' == 'purple'); //true
console.log((10 >= 10) && (false == false) && (20 !== 19)); //true
console.log(true && true || false); //true