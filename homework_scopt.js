// console.log("Episode 1");
// // Episode 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// the scenario is set to be a constant, even though it is an OBJECT
// the output will be "the murderer is Miss Scarlet"

console.log("");
//Episode 2
// console.log("Episode 2");

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';  // Here we try to change the murderer to Mrs Peacock but it has been declared a constant
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();  
// const verdict = declareMurderer();
// console.log(verdict);

// and error will occur beacause in changeMurderer we are trying to reassign a const - murderer


console.log("");
//Episode 3
// console.log("Episode 2");
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// firstly outputs the murderer is Mrs. Peacock
// then outputs the murderer is Professor Plus


// //Episode 4


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// outputs "the suspects are Miss Scarlet, Professor Plum, Coloonel Mustard"
// then "Suspect three is Mrs. Peacock"

// // //Episode 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);


// Works, outputs "the weapons is the Revolver"

// //Episode 6


// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//         murderer = 'Mrs. White';
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// outputs The murderer is Colonel Mustard, got this wrong at first, but because it is declared at the top,
// it is visible everywhere underneath, so it can be changed within the function
// outputs Mrs White


// //Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//         let murderer = 'Colonel Mustard';

//         const unexpectedOutcome = function() {
//         murderer = 'Miss Scarlet';
//         }

//         unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Outputs Mr Green, because the LET muderer = 'Colonel Mustard' makes that version of murderer be only visible there, so 
// even it getting changed to Miss Scarlet doesn't matter outside


// //Episode 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function(room) {
//         if (scenario.room === room) {
//             scenario.murderer = 'Colonel Mustard';
//         }

//         const unexpectedOutcome = function(murderer) {
//             if (scenario.murderer === murderer) {
//                 scenario.weapon = 'Candle Stick';
//             }
//         }

//         unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// Outputs "candle stick"

// //Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// outputs 'The murderer is Professor Plum'