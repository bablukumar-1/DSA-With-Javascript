/***************** Count or collect bijli bill based on unit******************** */

/**
 * if your bijli bill is less than 100 unit , if will be charge 0 rups
 * if bill unit is grather than 100 to 200 so can you charge per  3rs per unit
 * 
 * if bill unit is  between 200 to 300 unit so can you charge take  4rs per unit
 * if bill unit is  between 300 t0 400 
unit so can you charge take  6rs per 
unit
 * if bill unit is  grather than 400
unit so can you charge take  13rs per 
unit
 
 */

/** Algorithms 
 * if unit bill = 1100 unit if according to instruction


 
 */
let unit = 500;
let amount = 0;

if (unit > 400) {
  amount += (unit - 400) * 13;
  unit = 400;
}
if (unit > 300 && unit <=400) {
  amount += (unit - 300) * 6;
  unit = 300;
}
if (unit > 200 && unit <=300) {
  amount += (unit - 200) * 4;
  unit = 200;
}
if (unit > 100 && unit <=200) {
  amount += (unit - 100) * 3;
  unit = 100;
}
console.log("total bijli amount :", amount);
