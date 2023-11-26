//Step 1: Ajax object 
//Step 2: opening the url
//Step 3: Send 
//step 4:

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://reqres.in/api/users?page=2");
// xhr.send();
// xhr.onload = function () {
//         result = JSON.parse(xhr.responseText);
//         console.log(result);
//       };

// const obj = {
//      name: "Mark",
//     job: "Devops"
// }      

// const xhr = new XMLHttpRequest();
// xhr.open('POST', '"https://reqres.in/api/users');
// xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8')
// xhr.send(JSON.stringify({ name:"Batman", job:"devops"}))
// xhr.onload = function () {
//     result = JSON.parse(xhr.responseText);
//     console.log(result);
// }


// console.log("start");

function parent(a,b,callback) {
    setTimeout(() => {
        callback(a,b)
    },0)
    
}

parent(2,3,child)
function child (a,b){
    let c = a+b 
    return c
    console.log('value of child function', c)
}
