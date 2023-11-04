var  arr = ["Product A - 1000 - Category 1 - In Stock",
    "Product B - 20000 - Category 2 - In Stock",
    "Product C - 15000 - Category 1 - Out of Stock",
    "Product D - 250- Category 2 - In Stock",]

    function result(i){
        console.log(arr[i]);
    }

    result(2);

    let s1 = "Product E - 550- Category 1 - In Stock";
    arr.push(s1);
    console.log(s1);

    arr.splice(2, 1);
    console.log(arr);

    let s2 = arr.slice();
    console.log(s2);

    const prices=[100,200,300,400]
const newprices=[]

//multiply each element by 80
for(let i of prices){
    
    //newprices.push(i)

}
console.log(newprices);
console.log(prices);
//map method 
const newmap= prices.map(function(x){
    return x*2
})
const square=prices.map(function(x){
    return x*x})
console.log(newmap);
const square2=prices.map((x)=>x*x)

let temp = [24,34,55];
let temp1 = temp.map(x => (x * 9/5) + 32);
console.log(temp1); 