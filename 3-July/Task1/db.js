const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/MyDB')
    .then(() => console.log("connected to DB"))
    .catch((err) => console.error(err))

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
})

const Student = mongoose.model('MyTable', studentSchema)

async function createStudent(name, age, course) {
    const student = new Student({
        'name': name,
        'age': age,
        'course' : course
    });
    await student.save();
}

async function getStudents() {
    const result = await Student.find()
    for (i = 0; i < result.length; i++) {
        console.log("============================")
        console.log("Id: ", result[i]._id.toString())
        console.log("Name: ", result[i].name)
        console.log("Age: ", result[i].age)
        console.log("Course: ", result[i].course)
        console.log("============================")
    }
}

module.exports = {getStudents, createStudent}
