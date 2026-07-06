const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });


const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

const Student = mongoose.model("Student", studentSchema);

const createStudent = async (name, age, course) => {
    const student = new Student({
        name: name,
        age: age,
        course: course
    });
    const result = await student.save();
    console.log("Inserted Document:");
    console.log(result);
};

const getStudents = async () => {
    const students = await Student.find();

    console.log("All Students:");
    console.log(students);
};

const updateStudent = async () => {
    const result = await Student.updateOne( { name: "Harmeet" }, { age: 35 });
    console.log("Updated Document:");
    console.log(result);
};

const deleteStudent = async () => {
    const result = await Student.deleteOne({
        name: "Harmeet"
    });

    console.log("Deleted Document:");
    console.log(result);
};

createStudent("Harmeet", 29, "mern" )
updateStudent({name: "Harmeet"}, {name: "Sasuke"})
