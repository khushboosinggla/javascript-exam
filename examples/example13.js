function addNumber(a , b){
    return Number(a) + Number(b); // use camelcase for function names industry standard 
}      
let a = 10;
let b = 20;
addNumber(a, b); // only called not printed      if we pass only one parameter or nothing it will return NaN
console.log(addNumber(a)); // NaN  not a number sum of 10 + undefined = NaN
console.log(addNumber());  // NaN
console.log(a + " " + b); // 10 20
