function Hello()
{
    console.log("Hello");
}
Hello();

//functon without parameter and return 

function addtwonum()
{
    let a=10;let b=20;
    let sum=a+b;
    console.log(sum);
}
addtwonum();
function square()
{
    let a=2,b=2;
    let sq=a*b;
    console.log(sq);
}
square();

//function returning value

function fullname()
{
    let firstname='sri',secondname='aakash',space=' ';
    let full=firstname+space+secondname;
    return full;

}
console.log(fullname());

function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}

console.log(addTwoNumbers())
//function with 2 or more parameters

function fullName(FirstName,SecondName)
{
    return `${FirstName} ${SecondName}`;
}
console.log(fullName('Sri','Aakash'))

//with many parameters 
function mul(arr)
{
    let mul=1;
    for(let i=0;i<arr.length;i++)
    {
        mul=mul*arr[i];
    }
    return mul;
}
const num=[1,2,3,4,5];
console.log(mul(num));
//with unlimited number of parameters

const sumallarrno=(...args)=>{
    let sum =0;
    for( const element of args)
    {
        sum+=element;
    }
    return sum;
}
console.log(sumallarrno(1,2,3));
console.log(sumallarrno(29,89,3213));