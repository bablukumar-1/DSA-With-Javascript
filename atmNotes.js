// identify ATM Notes
/*
let amount = 5006;

if (amount >= 500) {
  console.log(
    `there are 500 notes   in amount of ${amount} are = ${Math.floor(
      amount / 500
    )}`
  );
  amount = amount % 500;
}

if (amount >= 200) {
  console.log(`there are 200 notes in amount of ${amount} are =
${Math.floor(amount / 200)}`);
  amount = amount % 200;
}

if (amount >= 100) {
  console.log(`there are 100 notes in amount of ${amount} are =
${Math.floor(amount / 100)}`);
  amount = amount % 100;
}

if (amount >= 50) {
  console.log(`there are 50 notes in 
amount of ${amount} are =
${Math.floor(amount / 50)}`);
  amount = amount % 50;
}

if (amount >= 20) {
  console.log(`there are 20 notes in 
amount of ${amount} are =
${Math.floor(amount / 20)}`);
  amount = amount % 20;
}

if (amount >= 10) {
  console.log(`there are 10 notes in 
amount of ${amount} are =
${Math.floor(amount / 10)}`);
  amount = amount % 10;
}

if (amount >= 5) {
  console.log(`there are 5 notes in 
amount of ${amount} are =
${Math.floor(amount / 5)}`);
  amount = amount % 5;
}

if (amount >= 2) {
  console.log(`there are 2 notes in 
amount of ${amount} are =
${Math.floor(amount / 2)}`);
  amount = amount % 2;
}


if (amount >= 1) {
  console.log(`there are 1 notes in 
amount of are =
${amount }`);
}

*/

/** Sum of natural number */
/*
let num = 20;
if(isNaN(num)){
    console.log("Invalid number, it is not a number");
    
}else{
    if(num>0){
       let sum =0;
       for (let i=1; i<=num; i++){
        sum = sum+i;
       }
       console.log("Sum of natural number :", sum);
       
    }else{
        console.log('this is negative number');
        
    }
}
    */

/** Factorial Number */

/*
let num = 10;

if (num === null) {
  console.log("not required null value");
} else {
  let number = Number(num);

  if (isNaN(number)) {
    console.log("Not a number");
  } else {
    if (number > 0) {
      let fact = 1;
      for (let i = 1; i <= number; i++) {
        fact = fact * i;
      }
      console.log("factorial value :", fact);
    } else {
      console.log("positive value is required");
    }
  }
}

*/

/** check factor number */

/*
let num =45;
if (num === null) {
  console.log("null is not required");
} else {
  let number = Number(num);
  if (isNaN(number)) {
    console.log("String is not required");
  } else {
    if (number > 0) {
      let divisor = [];
      for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
          //   console.log(i);
          divisor.push(i);
        }
      }
      divisor.push(number);
      console.log(" that are divisor of any number ", divisor);
    } else {
      console.log("Nigative number is not required ");
    }
  }
}

*/

/** find prime number */

// first ways
/*
let num = 2;
if (num === null) {
  console.log("null is not required");
} else {
  let number = Number(num);
  if (isNaN(number)) {
    console.log("String is not required");
  } else {
    if (number > 0) {
      let primeNumber = "prime";
      for (let i = 2; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            primeNumber="not prime";
            break;
        }
      }
     console.log(`this number ${number} is  : ${primeNumber}`);
     
     
    } else {
      console.log("Nigative number is not required ");
    }
  }
}
*/

// second ways
/*
let num = 70;
if (num === null) {
  console.log("null is not required");
} else {
  let number = Number(num);
  if (isNaN(number)) {
    console.log("String is not required");
  } else {
    if (number > 0) {
      console.log(isPrime(number));
      
    } else {
      console.log("Nigative number is not required ");
    }
  }
}

function isPrime (num){
    if(num<=1) return false;
    if(num==2) return true;
    if(num%2 ==0) return false;
    for(let i=3; i<Math.floor(Math.sqrt(num)); i++){
        if(n%i == 0) return false
    }
    return true
}
    */

/** Sum of digit using while loop */

// let num =19923;
// let strNum = num.toString()
// let i=0;
// sum =0;
// while (strNum.length> i) {
//   sum = sum + Number(strNum[i]);
//   i++;
// }

// for(let i=0; i<strNum.length; i++){
// sum =sum+Number(strNum[i])
// }
// console.log("sum", sum);

/** third approach */

// let num = 19923;
// let sum =0;
// while(num >0){
// let remainVal = num%10
// sum = sum+remainVal
// num=Math.floor(num/10)
// }
// console.log("sum:", sum);

/** reverse number */
/*
let num = 19923;
let reverse = 0
while(num>0){
    let rev = num%10;
    reverse=reverse*10+rev
    num = Math.floor(num/10)
}
console.log("this is my reverse number", reverse);
*/

/** Strong Number */

// 145 = 1!+4!+5!=1+24+120=145

/*
let n = 145;
let copyN = n
let strong = 0;
while (n > 0) {
  let val = n % 10;
  let fact = 1;
  for (let i = 1; i <=val; i++) {
    fact = fact * i;
  }
  strong=strong+fact
  n = Math.floor(n / 10);
}
if(strong === copyN){
    console.log("This is strong number", strong);
}else{
    console.log("This is not strong number");
    
}

*/