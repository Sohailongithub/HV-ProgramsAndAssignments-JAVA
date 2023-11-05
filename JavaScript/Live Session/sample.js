// let button = document.querySelector('button')
// let parentDiv =document.querySelector('div')
// let body =document.querySelector('body')
// // function changeColor(){
// //     button.style.color="red"
// // }

// // // button.addEventListener('click',changeColor)
// // button.addEventListener('click',()=>{
// //     // button.style.color="red"
// //     console.log("button being clicked");

// // })
// // parentDiv.addEventListener('click',()=>{
// //   console.log("div being clicked");
// // })

// // body.addEventListener('click',()=>{
// //     console.log("body being clicked");
// // })

// // we are selecting all li :

// const ul =document.querySelector(".lists");

// ul.addEventListener('click',(event)=>{
//   console.log(event.target.tagName);
//   if(event.target.tagName=="LI"){
//     // event.target.style.color="red"
//     // event.target.classList.add("changecolor")
//   }
// })
// let obj={}
// const input =document.querySelector("input");
// input.addEventListener('change',(event)=>{
//     console.log(event.target.name,event.target.value)
//     obj[event.target.name]=event.target.value
//     // if(event.target.name=="username"){
        
//     // }
//     // if(event.target.name=="email"){
//     //     obj[event.target.name]=event.target.value

//     // }
// })
// let email =document.querySelector("#email")
// email.addEventListener('change',(event)=>{
//     console.log(event.target.name,event.target.value)
//     obj[event.target.name]=event.target.value
//     // if(event.target.name=="username"){
        
//     // }
//     // if(event.target.name=="email"){
//     //     obj[event.target.name]=event.target.value

//     // }
// })
// // console.log(obj,"our obj");

const loginbtn =document.querySelector("#login");
const Modal =document.querySelector(".modal");
const closebtn =document.querySelector('#close');
loginbtn.addEventListener('click',()=>{
  Modal.style.display="flex"
})

closebtn.addEventListener('click',()=>{
    Modal.style.display="none"
})