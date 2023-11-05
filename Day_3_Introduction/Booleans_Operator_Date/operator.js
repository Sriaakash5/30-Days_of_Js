let firstName='John';//Assignment operator
let LastName='Michael';

//Arithmetic operator

let num1=10,num2=20;
let sum=num1+num2,diff=num1-num2,Mul=num1*num2,Div=num1/num2,Modulas=num1%num2,pow=num1**num2;
console.log(sum+" " + diff+" "+Mul+" "+Div+" "+Modulas+" "+pow);

//Comparison Operator

console.log(3>2);
console.log(3<2);
console.log(3=='3');//compare only value
console.log(3==='3');//compare value and data type
console.log(1==true);
console.log(1===true);//Not exactly the same
console.log(NaN==NaN);
console.log(undefined==NaN);
console.log('mango'.length  <  'orangefaf'.length);

//logical operator


//ampersand operator 
let check = 5>4 && 10>8  ;  // true &true=true
 check =5>4 && 10>19  ; // true & false= false
 check=5>10 && 10>19 ; // false & false=false
 
 //OR

 let check2= 5>4 || 10>8; // true || true =true
 check2=5>4 || 10>19; // true || false=true
 check2=5>20 || 10>19; //false||false=false 


 //Negation 
 check2=!(5>4);//false


 //Increment

 //postInc
 let count=0;
 console.log(++count);
 console.log(count);
 //Preinc

 console.log(count++);
 console.log(count);

 //Decrement 
 //postdec

 console.log(--count);
 console.log(count);
 //predec

 console.log(count--);
 console.log(count);


 //ternary operator
 let israining=true;

 israining 
 ? console.log('It is raining ') : console.log('It is not raining'); 
    
