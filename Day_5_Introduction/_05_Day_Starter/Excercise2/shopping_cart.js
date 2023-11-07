const shopping_cart=['Milk','Cofee','Tea','Honey'];
shopping_cart.unshift('Meat');
console.log(shopping_cart);
shopping_cart.push('Sugar');
console.log(shopping_cart);
shopping_cart[3]='Green Tea';
console.log(shopping_cart);

let front_end=['HTML','CSS','JS','REDUX'];
let Back_end=['NODE','EXPRESS','MONGODB'];
let fullstack=front_end.concat(Back_end);
console.log(fullstack);