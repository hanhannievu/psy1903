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