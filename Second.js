

//operators
//Arithmatic operater

let a = 5;
let b = 7;
console.log("a + b = ",a + b);

console.log("a - b =",a - b);
console.log("a * b =",a * b);
console.log("a = ", a ," & b =", b); 
console.log("a / b =",a / b);
console.log("a % b =",a % b);
console.log("a ** b =",a ** b);

//Unary Operater
let k=4;
let c = 6;
k++;
c--;
console.log("k =",k , "c =", c);


//Assignment Operaters

let x=5;
let y=7;

x += 5;
console.log("x =",x);


y -= 6;
console.log("Y =" , y);

x *= 3;
console.log("X =", x);

 y /= 2;
 console.log("y =",y);

 x %= 9;
 console.log("x =",x);
 
 y **= 4;
 console.log("y =",y);


 //comparison operaters


//  let  f = 5;
//  let  g = 5;

//  console.log(" f == g",f == g);
//  console.log("f != g ", f != g);

 let d = 5;
 let m = "5";
  
 console.log("d === m", d === m);
 console.log("d !== m",d !==m);


//  console.log("f > g =",f > g);
//  console.log("f < g =",f < g);

//  console.log("f >= g =",f >= g);
//  console.log("f <= g =",f <= g);

 //logical operaters

let r = 8;
let e = 4;
 
let cond1 = r > e; // true
let cond2 = r === e;//false

console.log("cond1 && cons2 =" ,cond1 && cond2);

console.log("cond1 || cons2 =" ,cond1 || cond2);

console.log("!(r < e) =" ,!(r < e));


//Conditional Statements

//if statement

// let age = 25;
// if(age>18){
//     console.log("you can vote");
// }

let mode = "dark";
let color;

if(mode === "dark"){
    color= "black";
}

if(mode==="light"){
    color = "white";
}
console.log(color)

//if-else statement

let age = 15;
if(age > 18){
    console.log("you can vote");
}else{
    console.log("Not vote")
}



let num = 9;
if(num % 2===0){
    console.log("even");
}else{
        console.log("odd");
}


//else-if statement

let rating = 1;
if(rating<=2){
    console.log("bad rating!");
}else if(rating >= 4){
    console.log("good rating!");
}else{
    console.log("average rating!");
}

//ternarry operater
let z = 25;
let result = z >= 18 ? "adult" : "not adult";//simpler,compact if else
console.log(result);

let number = prompt("enter a number");
if(number % 5 === 0){
    console.log(number,"multiple of 5");
}else{
    console.log(number,"not multiple of 5");
}

let score = 87;
let grade
if(score >= 90 && score <=100){
    grade = "A";
}else if(score >= 80 && score <= 89){
    grade = "B";
}else if (score >= 70 && score <= 79){
    grade = "C";

}else if(score >= 60 && score <= 69){
    grade = "D";
}else if (score >=50 && score <= 59){
    grade = "E";
}else if(score >= 0 && score <= 49){
   grade = "F"  ;
}
console.log("According to your score,your grade was",grade);

