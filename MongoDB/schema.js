// Student Schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    enrolledSubjects: [{ type: mongoose.Schema.Types.ObjectId }]
});

const Student = mongoose.model('Student', studentSchema);

// Subject Schema
const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

const Subject = mongoose.model('Subject', subjectSchema);

// Grade Schema
const gradeSchema = new mongoose.Schema({
    grade: { type: String, required: true, unique: true } // A+, A, B+, B, etc.
});

const Grade = mongoose.model('Grade', gradeSchema);

// Progress Report Schema
const progressReportSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId },
    subjects: [{
        subject: { type: mongoose.Schema.Types.ObjectId },
        grade: { type: mongoose.Schema.Types.ObjectId }
    }]
});