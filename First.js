//variables//


FullName="fathima shafrin";
console.log(FullName);

//let,const//
let age;
age=26;
console.log(age);

const PI=3.14;
console.log(PI);
 

//data types

// const student={
//     fullName:"fathima shafrin",
//     age:25,
//     isPass:true,

// };

// console.log(student.isPass);

// student["age"]=student["age"]+1;
// console.log(student.age);



const product ={
    productName:"pen",
    rating: 5,
    price:270,
    isDeal:true,
};
console.log(product.rating);



const profile ={
    userName:"fathima shafrin",
    isFollow:false,
    followers:123,
    following:123,

};
console.log(typeof profile["isFollow"]);



//Loops in js
//for loop

//for(let i =1;i<=5;i++){
  //  console.log("i =",i);
//}

// let sum = 0;
// let a =7;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log("sum =",sum);

//while loop

let i=1;
while(i<=5){
    console.log("i =",i);
    i++;
}
//do while loop
let num = 1;
do{
    console.log(num);
    num++;
}while(num<=5);

//for of loop
let str="FathimaShafrin";
let size =0;
for(let i of str){
    console.log("i =",i);
    size++;
}
console.log("size is =",size);
//for in loop
let student= {
    name: "Fathima",
    age:25,
    cgpa:7.5,
    isPass: true
};
for(let key in student){
    console.log("key",key,"value =",student[key]);
}

//practice qstn print 0 to 100 even numbers
for(let i=0;i<=100;i++){
 if(i%2 === 0){
    console.log(i);
 }
 
}

//

