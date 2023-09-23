  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
// initial value 0 - implicit
// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => {
//   console.log(
//     "Accumulator:", acc,
//     "Current Value", curr,
//     "Total:", acc + curr
//     // Accumulator: 0 Current Value 1 Total: 1
// // Accumulator: 1 Current Value 2 Total: 3
// // Accumulator: 3 Current Value 3 Total: 6
// // Accumulator: 6 Current Value 4 Total: 10
//   );
//   return acc + curr;
// });

// console.log(sum) // 10

// initial value 10
// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => {
//   console.log(
//     "Accumulator:", acc,
//     "Current Value", curr,
//     "Total:", acc + curr
//     // Accumulator: 10 Current Value 0 Total: 10
//     // Accumulator: 10 Current Value 1 Total: 11
//     // Accumulator: 11 Current Value 2 Total: 13
//     // Accumulator: 13 Current Value 3 Total: 16
//     // Accumulator: 16 Current Value 4 Total: 20
//   );
//   return acc + curr;
// }, 10);

// console.log(sum) // 20

// One-liner
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum)

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExp = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExp) // 16

// Grouping by a property, and totaling it too
let expByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(expByProfession) // { Developer: 12, Designer: 4 }