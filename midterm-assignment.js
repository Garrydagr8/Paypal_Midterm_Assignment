var express = require('express')
var fs = require('fs')
var util = require('util')
var readFile = util.promisify(fs.readFile)
var bodyparser = require('body-parser')
var app = express()
app.use(bodyparser.urlencoded({
    extended: false
}))

app.set('view engine', 'pug');
app.set('views', './views');

//add promises to create user, and course array

var students = []
var courses = []
let promise1 = readFile('students.json', 'utf-8')
promise1
    .then((data) => {
        students = JSON.parse(data)
    })
    .then(() => {
        console.log(students)
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("STUDENTS ARRAY CREATED"));

let promise2 = readFile('courses.json', 'utf-8');
promise2
    .then((data) => {
        courses = JSON.parse(data);
    })
    .then(() => {
        console.log(courses)
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("COURSES ARRAY CREATED"))


//precode ends
//app get and post methods start

app.get('/home', function(req, res) {
    res.render('form1');
})
app.get('/add_courses1', function(req, res) {
    res.render('add_courses1', {
        course_data: courses,
        student_data: students,
        number: courses.length

    })
})




app.listen(8080);
// create course option remains
// add user (optional)