'use strict';

// Code here.
// Location testing.
let redLine = [
  'South Station', 'Park Street', 'Kendall', 'Central',
  'Harvard', 'Porter', 'Davis', 'Alewife'];

let greenLine = ['Government Center', 'Park Street', 'Boylston',
   'Arlington', 'Copley', 'Hynes', 'Kenmore'];

let orangeLine = ['North Station', 'Haymarket', 'Park Street', 'State',
   'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'];
// Variable testing
let startLine = ''
let startStation = ''
let endLine = ''
let endStation = ''

// Tested code for transfer check
//let startLine = 'red';
//let endLine = 'green';
let transfer = '';

const changeLines = function(startLine, endLine) {
if (startLine === endLine) {
transfer = false;
console.log(transfer);
} else {
transfer = true;
console.log(transfer);
}
};
//console.log(transfer);
return changeLines('green', 'green');

// Test code for station counting
let redLine = [
  'South Station', 'Park Street', 'Kendall', 'Central',
  'Harvard', 'Porter', 'Davis', 'Alewife'];
let startStation = '';
let endStation = '';
let currentStation = 0;
const stationMatch = function(startStation, endStation) {
  let matchResult = (startStation||endStation) === redLine;
};
stationMatch('','');

for (let i = 0; i < 2;) {
  if (matchResult === true) {
    i++;

  }
  let look = (number < 1);
  let getOff = (number < 2);
  let currentStation = 0;
  let checkSation = ((startStation||endStation) === redLine);
  if (look ===  true) {
if (checkSation === true) {
number++;
console.log(number);
} else {
currentStation++;
console.log("Current station is..." + currentStation);
}
  }
//  count = count + 1;
}
console.log('You got it in ' + count + ' tries!');

// const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

// };

// module.exports = {
//   stopsBetweenStations,
//   stretch: false,
// };
