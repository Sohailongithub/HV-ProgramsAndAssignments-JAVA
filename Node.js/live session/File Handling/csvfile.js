// const fs = require ("fs");
// const csv = require ("csv-parser");
// const filename = "./sample.csv";
// const result =[];

// fs.createReadStream(filename)
// .pipe(csv())
// .on("data", (data)=>{
//     result.push(data); })

// .on("end", ()=>{
//     console.log(`\n${result.length} csv file processed`);
//     console.log(result); }) 

//  .on("error", (error) => {
//     console.error("Error reading the file ", error.message); })   

    // write data into csv
const fs = require ("fs");    
const csv = require ("fast-csv");
const filename = "./sample.csv";
const data = [{name: "walt", age: 50, salary: 999999, department: "founder"}, 
{name: "shawn", age: 25, salary: 1500, department: "manager"}, 
{name: "justin", age: 36, salary: 2000, department: "senior-engineer"},]


const ws = fs.createWriteStream(filename);
csv
.write(data, {headers: true})
.pipe(ws)

.on("end", ()=>{
    console.log(`\n${result.length} csv file processed`);
    console.log(result); }) 

 .on("error", (error) => {
    console.error("Error reading the file ", error.message); })   