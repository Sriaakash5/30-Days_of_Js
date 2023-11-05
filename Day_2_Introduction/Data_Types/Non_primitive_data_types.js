let numarr1=[1,2,3,4];
console.log(numarr1);
numarr1[2]=46;//mutables
console.log(numarr1);



//non_primitive data types are not compared by values but by references 

let nums=[12,13,14,134];
let num2=nums;
console.log(num2==nums);//true compared by reference 
let num1=[12,13,14,134];
console.log(num1==nums);//False non_primitive data types are not compared by values but by references 