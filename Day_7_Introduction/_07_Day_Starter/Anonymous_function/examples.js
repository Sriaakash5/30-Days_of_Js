// In this Anonymous function we don't have to name it. After Function keyword usally a function name is written

var message=function()
{
    console.log('Hi, Iam Anonymous');
}
message();

var greet=()=>
{
    console.log('Good morning, have a nice day');
}
greet();
// No name at all
( ()=>
{
    console.log('gg');
})
();


