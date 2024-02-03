const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const mongoURL =
"mongodb+srv://harshityadav:JxsV3y4V7mWl8g1I@cluster0.s9trpdc.mongodb.net/Sohail_studentDB";

mongoose.connect(mongoURL).then(()=>{
    console.log("connected to Database")
}).catch(()=>{
    console.log("connection to DB failed")
})

app.get("/", (req, res) => {
  res.send("server is working");
});

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String,
    grades:[],
    subects:[],
})

const Student = mongoose.model('Student',studentSchema);

const subjectSchema = new mongoose.Schema({
    name:String
})

const Subject = mongoose.model('Subject',subjectSchema);


app.post("/register",async(req,res)=>{
    const {name,email,phone,password}= req.body;
    const alreadyRegistered = await Student.findOne({email:email});
    if(alreadyRegistered){
        res.send("This user is already Registered")
    }
    const newStudent = new Student({ name, email, phone, password });
    newStudent.save();
    if(newStudent){
        res.send({"Student Added Successfully":newStudent})
    }
    else{
        res.send("error occuured")
    }
});

app.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.send("Please Enter Email and Password");
    }
    const foundStudent = await Student.findOne({email:email});
    if(foundStudent){
        if(foundStudent.password == password){
            res.send({"Login Success : ": `${foundStudent.name},${foundStudent.email},${foundStudent.phone}`})
        }
        else
        res.send("Wrong Password entered, Please try again")
    }
    else{
        res.send("Unregistered Email");
    }
});

app.post("/subject",async(req,res) => {
    const name = req.body.name;
    const foundSubject = await Subject.findOne({name:name});
    if(foundSubject){
        res.send("Subject Already Exist")
    } 

    const newSubject = newSubject({name});
    newSubject.save()

    if(newSubject){
        res.send("New Subject Added")
    }
});

