const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', function(req, res)
{
    res.render("index");
});

app.post('/submit', function(req, res)
{
    const formData = req.body;
    res.render('template1', {firstname: formData.firstname,lastname: formData.lastname ,
        contact: formData.contact, email: formData.email, linkedin: formData.linkedin,
    summary: formData.summary, degree: formData.degree, university: formData.university, gpa: formData.gpa,
    role: formData.role, company: formData.company, duration: formData.duration, work: formData.work,course: formData.course,
    institute: formData.institute, skill: formData.skill
    });
});


app.get('/temp', function(req, res)
{
    res.render("templates");
});

app.get('/form', function(req, res)
{
    res.render("form1");
});



app.listen(3000)