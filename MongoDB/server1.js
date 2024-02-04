const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connection to database
const mongoURL = "mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/sohail_DB"

mongoose.connect(mongoURL).then(()=>{
    console.log("connected to Database")
}).catch(()=>{
    console.log("connection to DB failed")
})

app.get("/", (req, res) => {
  res.send("server is working");
});


// Student Schema 
const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String,
    enrolledSubjects: [{ type: mongoose.Schema.Types.ObjectId }]
})


const Student = mongoose.model('Student',studentSchema);

// Subject Schema 
const subjectSchema = new mongoose.Schema({
    name:String
})

const Subject = mongoose.model('Subject',subjectSchema);

// Grade Schema
const gradeSchema = new mongoose.Schema({
    name:String
})

const Grade = mongoose.model('Grade',gradeSchema);

// Progress report schema 
const progressReportSchema = new mongoose.Schema({
    student: {type: mongoose.Schema.Types.ObjectId},
    subjects: [{
        subject: {type: mongoose.Schema.Types.ObjectId},
        grade: {type: mongoose.Schema.Types.ObjectId}
    }]  
});

const ProgressReport = mongoose.model('Progress Report', progressReportSchema);

// Registering Student API 
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

// Login API 
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

// Adding Subject API
app.post("/subject",async(req,res) => {
    const name = req.body.name;
    const foundSubject = await Subject.findOne({name:name});
    if(foundSubject){
        res.send("Subject Already Exist")
    } 

    const newSubject = new Subject({name});
    newSubject.save()

    if(newSubject){
        res.send("New Subject Added")
    }
});

// Getting Subject by ID API
app.get("/subject/:Id",async(req,res) => {
    const Id = req.params.Id
    const foundSubjectId = await Subject.findById(Id);
    if(foundSubjectId){
        res.send("Id send", foundSubjectId);
    } else {
        res.send("Invaild Subject ID");
    }

})

// Adding Grade API
app.post("/grade",async(req,res) => {
    const name = req.body.name;
    const foundGrade = await Grade.findOne({name:name});
    if(foundGrade){
        res.send("Grade Already exist")
    }

    const newGrade = new Grade({name});
    newGrade.save()

    if(newGrade){
        res.send("New Grade Added")
    }
});


// Get Grade by ID 
app.get("/grade/:Id",async(req,res) => {
    const Id = req.params.Id;
    const foundGradeById = await Grade.findById(Id);
    if(foundGradeById){
        console.log(foundGradeById);
        res.send("Id send");

    }else{
        res.send("Invaild grade Id");
    }

})

// Progress Report by Student's Subject and Grade API 
app.post("/progressReport", async(req,res) => {
    
})


// My server is listening to port 3000
app.listen(3000, () => {
  console.log("server started at 3000");
});

