/*
Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

Arrow function uses arrow instead of the keyword function to declare a function.*/

const square=n =>
{
    return n*n;
}
console.log(square(2));


const changetouppercase=arr=>
{  
  let newArr=[];
  for(const ele of arr )
  {
    newArr.push(ele.toUpperCase());
  }
  return newArr;
}
const countries=['india','america','sweden'];
console.log(changetouppercase(countries));