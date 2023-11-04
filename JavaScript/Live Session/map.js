// const sampleArr = [1, 2, 3, 4, 5];
// console.log("start")
// //map, filter and reduce

// //map()=> returns an array which is same size as that of original array;
// //original array is not affected.

// // let mappedArray=sampleArr.map((currentValue,index,originalarray)=>{
// //     // console.log("current value:",currentValue,index,originalarray)
// //     if(currentValue%2==0){

// //         return currentValue;
// //     }
// // })

// // console.log("mappedArray:",mappedArray);

// //filter()

// // setTimeout(()=>{
// //     let filteredArr =sampleArr.filter((currentValue,index,originalArray)=>{
// //         //conditional statement;
// //         console.log("inside filter callback")
// //         if(currentValue%2==0){
// //             return currentValue;
// //         }

// //     })
// //     console.log("filteredArr :",filteredArr)
// // },1000)

// // console.log("originalArray:",sampleArr);
// // console.log("filteredArray:",filteredArr);

// // why filter is not working same as that of Callback (setTimeput).

// // console.log("end")


// // //reduce();
// // const reducevalue= sampleArr.reduce((accumulator,number)=>{
// //   //summation of all the array element values
// //   const sum =accumulator+number;
// //   return sum;
// // },0)

// // console.log(reducevalue,"reducedValue");

// // Js objects:

// let obj = {
//     name: "Snehal",
//     dob: "24-01-2021",
//     age: 23
// }

// //object dot notation
// // obj.age=23;
// // obj.name="Earth"
// // "my name is"
// // obj["my name is"]="Snehal"


// // console.log(obj["dob"])

// // // inbuilt  function:keys(),values() and entries();
// // const allkeys =Object.keys(obj);
// // console.log(allkeys);
// // // ["","",""]
// // //dynamic access to values of objects;
// // const allValues=allkeys.map((currentKey)=>{
// //   console.log(obj[currentKey])
// //   return obj[currentKey]
// // })

// // console.log("allvalues of Obj :",allValues);

// // const alldirectvalues =Object.values(obj);
// // console.log("obj values",alldirectvalues)

// const objValues = Object.entries(obj);
// // console.log("all object entries:", objValues);

// // objValues =[[],[],[]];
// const returnobj = objValues.map(([key, value], index) => {
//     // console.log("key:",key ,"value:",value ,index);
//     const keyValuepair = {
//         [key]: value
//     }
//     return keyValuepair
// })

// // destructing :Es6 version (ecmascript v6)
// //map,filter and reduce : ES6
// //arrow function:es6
// //let and const :es6

// // const arr =[1,2,3]
// // const [arr1,arr2,arr3]=[1,2,3]
// console.log(returnobj)

///////////////////////////////////////////////Index.JS/////////////////////////

// var a =undefined; //global scope;

// Js engine  : Global object : will consist some of the by default methods of javascript.
//browser : global object : window object


// console.log(a)
// var a= 12;
// console.log(a)
//memory allocation phase : (hoisting) and excution phase
//HOisting : moving all the variable and function to the top of their global scope.

// var has a functional scope;

// Let : ES6 variant of Javascript
// console.log(a)

// // Temporal dead zone :TDZ 
// let a =10;
// console.log(a)
// let has block scope ;

//var : allows us to redeclar and reintialize;
//let : it does not allow redeclaration and allows reintialization;
// var a =10

// {
//     let b =20
//     console.log("value of let:",b);
//     var a =12;
// }
// console.log("value of var a :",a)
// // console.log("value of let a :",b)
// var a =20;
// console.log("value of var",a);
// let a =20;
// console.log("value of let",a);
// a =30;
// console.log("value ",a);


//const does not allow to redeclare and also reintialize.
// const a =10;

// a =12;
// console.log(a)

// const a =[1,2,3,4,5]
// console.log(a)



// functions
// functions in js , they are termed as first class citizens or first-class objects.

//in js functions can be stored in variable ,or they can be passed to another
// function as a argument ,or they can be returned from a function.

// Named function
function fun(){
    //logic
}
fun();

//Anonymous function;
//functional expression;
let a=function(){
//logic space
}
a();

//Arrow function :ES6 variant of Javascript
//functional expression;
let b =(a,b)=>{
//logic space
}
b(1,2);

// IIFE :immediately innvoked functional expression
(
    (a,b)=>{
        //logic
        //API 
    }
)(1,2)