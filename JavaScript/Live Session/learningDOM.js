// selecting html elements;

//tagename

// const divtages=document.getElementsByTagName("div");//HTML collection []
// console.log(divtages);

// const divId =document.getElementById('intro');
// console.log(divId);

// const divClasses =document.getElementsByClassName('body');//HTML collection []
// console.log(divClasses);

const divClasses =document.querySelector('.body');

//QuerSelectorAll : Nodelist[]

//Scenario : DOM :collection html elements: HTML collection
//Scenario :DOm:Nodelist :querSelectorAll;

//innerHTML ,innerText and value;
// console.log(divClasses.innerHTML);
// console.log(divClasses.innerText);
// console.log(divClasses.value);

const inputTag =document.querySelector(".input");
// console.log(inputTag.value)
inputTag.value="Hero"


const introTag =document.querySelector('#intro');
introTag.style.color="red";
introTag.innerHTML="Hi batch 11"