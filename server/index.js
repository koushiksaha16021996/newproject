const express=require('express');
const mongoose=require('mongoose');
const bodyperser=require('body-parser');
const nodemailer = require('nodemailer');
const cors=require("cors");
const dburl="mongodb+srv://admin:admin@cluster0.oavys.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


//create express app
const app=express();

//parse req of x-www-form-urlencoded
app.use(bodyperser.urlencoded({
    extended : true
}))

//content type
app.use(bodyperser.json())

//cross platform api working
app.use(cors());



//connect to the database
mongoose.connect(dburl , { useUnifiedTopology: true , useNewUrlParser: true }).then(()=>{
    console.log("connected")
}).catch((res)=>{
    console.log(res)
    process.exit()
});



//for mailer
/*
app.post('/api/mailto', (req, res) => {
    var smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secureConnection: false,
        port: 587,
        auth: {
            user: "indusnet.projectgroup1@gmail.com",
            pass: "projectgroup1"        // your actual password
        }
    });
    var mailOptions = {
        from: "",
        to: "indusnet.projectgroup1@gmail.com",
        bcc: "", // bcc is optional.
        subject: `Message from ${data.name}`,
        text: "This is the body part",
         html: `
        <h3>Doubts is </h3>

        <p> ${data.message} </p>`
    }
    //console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            //console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
})








*/

//for doubt section using nodemailer

app.get('/',()=> {
    resizeBy.send('welcome to my mail')
})

app.post('/mail', (req, res) =>{
    let smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        secure: false,
        port:25,
        auth:{
            user:'indusnet.projectgroup1@gmail.com',
            pass:'projectgroup1'
        },
         tls: {
        rejectUnauthorized: false
    }
    });

    let mailOption = {
       // form: data.email,
        to:'indusnet.projectgroup1@gmail.com',
        subject:`Message from Student`,
        html: `
        <h3>Doubts is </h3>
        <p> ${req.body.message} </p>`
    };

    smtpTransport.sendMail(mailOption, (error, response) => {
        if(error){
            res.send(error)
            console.log(error)
            }
            else{
        res.send('Success')
        console.log('Success')
            }
        })
    smtpTransport.close();
})


//for apply leave section using nodemailer

app.get('/',()=> {
    resizeBy.send('welcome to my mail')
})

app.post('/apply', (req, res) =>{
    let smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        secure: false,
        port:25,
        auth:{
            user:'indusnet.projectgroup1@gmail.com',
            pass:'projectgroup1'
        },
         tls: {
        rejectUnauthorized: false
    }
    });

    let mailOption = {
        form: req.body.email,
        to:'indusnet.projectgroup1@gmail.com',
        subject:req.body.subject,
        html: `
        <h4> ${req.body.email} </h4>
        <h3> ${req.body.name} </h3>
        <p> ${req.body.message} </p>`
    };

    smtpTransport.sendMail(mailOption, (error, response) => {
        if(error){
            res.send(error)
            console.log(error)
            }
            else{
        res.send('Success')
        console.log('Success')
            }
        })
    smtpTransport.close();
})



//define students model---------------------------------------------->
const StudentSchema= mongoose.Schema({
    "roll":"",
    "name": "",
    "email": "",
    "password":"",
    "ispresent":"",
    "attendanceTime":"",
    "feedbackFromStudents":[],
    "feedbackFromTeachers":[]
}, {
    timestamps:true
});
const Student= mongoose.model("Student",StudentSchema)


//define routes students-----------------------
//get all data from student table --------------------------------
app.get('/students',(req,res)=>{
    Student.find().then(students=>{
        res.send(students)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

//add data to student table-------------------------
app.post('/student',(req,res)=>{
    const student=new Student({
        roll: req.body.roll,
        name: req.body.name,
        email: req.body.email,
        password:req.body.password
    })
    student.save().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

//get the exact student data using _id---------------------------
app.get('/student/:id',(req,res)=>{
    Student.findById(req.params.id).then(students=>{
        res.send(students)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

//get the exact student data using any random key----------------------
app.get('/students/:email',(req,res)=>{
    Student.findOne({email: req.params.email}).then(students=>{
        res.send(students)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

//edit schema

app.put('/editstudents/:id',(req,res)=>{
    Student.findByIdAndUpdate(req.params.id, {
        "roll": req.body.roll,
        "name": req.body.name,
        "email": req.body.email,
        "password":req.body.password
    },{new : true}).then(students=>{
        res.send(students)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

//filter data-----------------------------
//app.get('/students/:feedback',(req,res)=>{
//    Student.find({feedback: req.params.feedback}).then(students=>{
//        res.send(students)
//    }).catch((err)=>{
//        res.send({
//            message: "some error happened"
//        })
//    })
//});

//ilter data with two keys-----------------------------
//app.get('/students/:feedback',(req,res)=>{
//    Student.find({feedback: req.params.feedback, name:"koushik saha"}).then(students=>{
//        res.send(students)
//    }).catch((err)=>{
//        res.send({
//            message: "some error happened"
//        })
//    })
//});

//delete from database--------------------
app.delete('/students/:id',(req,res)=>{
    Student.findByIdAndRemove(req.params.id).then(students=>{
        Student.find().then(students=>{
            res.send(students)
        }).catch((err)=>{
            res.send({
                message: "some error happened"
            })
        })
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

//update data from database-----------------
app.put('/students/:id',(req,res)=>{
    Student.findByIdAndUpdate(req.params.id, {
        "roll": req.body.roll,
        "name": req.body.name,
        "email": req.body.email,
        "ispresent": req.body.ispresent,
        "feedback": req.body.feedback
    },{new : true}).then(students=>{
        res.send(students)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});


//<-----------------------------------------------------------------for teachers-------------------------------------------------------->
//teacher model-------->
const TeacherSchema= mongoose.Schema({
    "name": "",
    "email": "",
    "password":"",
    "specialization":"",
    "writeTeachFeed":[]
}, {
    timestamps:true
});
const Teacher= mongoose.model("Teacher",TeacherSchema)

//teacher router
app.get('/teachers',(req,res)=>{
    Teacher.find().then(teachers=>{
        res.send(teachers)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});
app.post('/teacher',(req,res)=>{
    const teacher=new Teacher({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password,
        specialization: req.body.specialization

    })
    teacher.save().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});
app.get('/teachers/:email',(req,res)=>{
    Teacher.findOne({email: req.params.email}).then(teachers=>{
        res.send(teachers)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

app.post('/Teacher/:name',(req,res)=>{
    Teacher.findOneAndUpdate({writeTeachFeed:req.body.writeTeachFeed},{new : true}).then(teachers=>{
        req.send(teachers)

    },
    console.log(req.body.name),
   console.log(req.body.writeTeachFeed)
   //console.log('Success')
    ).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});




//for attendance


const AttendanceSchema= mongoose.Schema({
    "date":"",
    "students":[]
}, {
    timestamps:true
});
const Attendance= mongoose.model("Attendance",AttendanceSchema)

app.get('/attendances',(req,res)=>{
    Attendance.find().then(att=>{
        res.send(att)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

app.get('/attendance/:date',(req,res)=>{
    Attendance.findOne({date: req.params.date}).then(att=>{
        res.send(att)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});
app.post('/attendance',(req,res)=>{
    const atten=new Attendance({
        date: req.body.date,
        students:req.body.students
    })
    atten.save().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});



const PORT = process.env.PORT||4000;


//listen to req
app.listen(PORT,()=>{
    console.log(`app server listen the port ${PORT}`);
});