const { log } = require("console");
const fs = require ("fs");
const filename = "./demo.json";

// fs.readFile(filename, "utf-8", (err, data) => {
//     if (err) {
//         console.error("error reading the file ", err.message);
//         return ;
//     }
//     try {
//         const jsondata= JSON.parse(data);
//         console.log("File reading Successful");
//         console.log(jsondata);
//     } catch(parseError){
//         console.error(parseError.message);
//     }
// });

// write data into json
fs.writeFile("sample.json",JSON.stringify("hello this is sohail"),(err)=>{
        if (err) {
            console.error(err);
            return
        }
        console.log("data updated ");
    });

fs.appendFile("sample.json",JSON.stringify("hello this is sohail"),(err)=>{
        if (err) {
            console.error(err);
            return
        }
        console.log("data updated ");
    });    