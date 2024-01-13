const express = require("express");
let app = express();

students=[
    {
    name: "Sohail",
    age: 23,
    feedback: "can do better"
    }, 
{
    name: "Jane",
    age: 26,
    feedback: "good"
    },
{
    name: "Zayn",
    age: 30,
    feedback: "better"
},
{
    name: "Ivan",
    age: 25,
    feedback: "Best"
}]


// Get All Student Data 
app.get("/getAllStudentData", function (req, res) {
  res.send(students);
});

// get data by student name
app.get("/StudentData/:name", (req, res) => {
    StudentName = req.params.name;
    SearchName = {};
    for(i = 0; i < Students.length; i++) {
        if(students[i].name == StudentName) {
            SearchName = Students[i];
            break;
        }
    }
    if(SearchName) {
        res.send(SearchName);
    }
    else {
        res.send("Student name not found")
    }
})

// post request 

// Post API to add student data
app.post('/addStudent', (req,res) => {
    const data = req.body;
    console.log('user data', data)
    res.send("Post req received")
})

// The port that I am listing to is from 3000
app.listen(3000);
