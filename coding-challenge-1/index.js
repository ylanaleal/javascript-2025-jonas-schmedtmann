// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

const markWeight = 78;
const markHeight = 169;

const johnWeight = 92;
const johnHeight = 195;

let markBmi = Math.floor(markWeight / (markHeight / 100) ** 2);
let johnBmi = Math.floor(johnWeight / (johnHeight / 100) ** 2);

console.log(markBmi);
console.log(johnBmi);

let markHigherBM = markBmi > johnBmi;

console.log(markHigherBM);
