/*let marks=prompt("Enter the marks");
switch(true){
    case marks=>80 && marks<=100:
        console.log('A');
        break;
    case marks>=70 && marks<=79:
        console.log('B');
        break;
    case marks>=60 && marks<=69:
        console.log('C');
        break;
    case marks >=50 && marks<=59:
        console.log('D');
        break;
    case marks>=40 && marks<=49:
        console.log('F');
        break;
     default:
        console.log('Was not a num');             

}

*/
//  Season

let season='september';
if(season=='september'||season=='october'||season=='november')
    console.log('Autumn');
else if(season=='March'||season=='April'||season=='May')
    console.log('Spring');
else
    console.log('Summer');


//getday
let current_day=new Date();
let t=current_day.getDay();
let weekend=(t==6 || t==0);
if(weekend==true)
    console.log('Weekend');
else
    console.log('Not weekend');    