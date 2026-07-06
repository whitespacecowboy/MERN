const mongoose = require("mongoose");
const fs = require("fs");

mongoose.connect("mongodb://127.0.0.1:27017/studentDB2")
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log(err);
    });

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

const Student = mongoose.model("Student", studentSchema);
const createStudents = async () => {
    try {
        const students = JSON.parse(
            fs.readFileSync("data.json", "utf-8")
        );
        const result = await Student.insertMany(students);
        console.log("Documents Inserted Successfully");
        console.log(result);

    } catch (err) {
        console.log(err);
    }

};

const getStudents = async () => {

    const students = await Student.find( {
        name: /Neha/
    });

    console.log("All Students:");
    console.log(students);
};


// createStudents();
getStudents();