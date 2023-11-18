// getElementbyId :element directly.
// getElementbyClassName
// const getdivs =document.getElementsByClassName('sample');
// console.log(getdivs);  htmlCollections []

//getElementsbyTagName;
// const getdivs =document.getElementsByTagName('div');
// console.log(getdivs);  HTMLCollections []


//querySelectors and querSelectorALL.

// let divwithId =document.querySelector('#sample');
// console.log(divwithId)
// let divwithClass =document.querySelector('.sample');
// console.log(divwithClass);

// let Alldivs =document.querySelectorAll('div');
// console.log(Alldivs);  NodeLists[]

// differnce btw NodeLists and HTMLCollections ? ********

// Events : onclick, onChange, onLoad, scroll, keypress, submit ;

//addEventListener('eventtype',function)

// Click event
let mydiv = document.querySelector(".sample");
let innerDivValue = 0;
mydiv.addEventListener('click', function () {
    // alert("your div has been clicked")
    // mydiv.style.color="red"
    mydiv.style.height = "200px"
    mydiv.style.width = "200px"
    // on click sample1 text should be replaced with herovired
    //    mydiv.innerText ="Herovired"
    mydiv.innerHTML = `<div style='background-color: red;height: 50px;width: 50px;'>
  ${innerDivValue}
  </div>
  
  
  <button id="btn">Increment</button>
  `
  const btn =document.getElementById('btn');
  console.log(btn);
  btn.addEventListener('click',function(){
    alert("btn is clicked")
    //update the counter logic
  })

}) 
// btn should be outside of whole blue box ;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

let boxShadow = document.querySelector('.boxShadow');
boxShadow.addEventListener('boxShadow', function(){
    boxShadow.style.background= 'red';

})
