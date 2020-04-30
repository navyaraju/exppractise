const express=require('express')
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express()
const port=3000

let students=[
    {
    "s_id":"123",
    "s_name":"Navya",
    "s_grade":"A",
    "s_course":"javascript",
    "s_addr":"chennai",
    "s_ph":"6876868686",

},

{
    "s_id":"456",
    "s_name":"Raju",
    "s_grade":"B",
    "s_course":"java",
    "s_addr":"bangalore",
    "s_ph":"96858686",

},

{
    "s_id":"789",
    "s_name":"Navs",
    "s_grade":"C",
    "s_course":"C++",
    "s_addr":"tirupati",
    "s_ph":"85421686",

},
];

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/student',(req,res)=>{
    res.json(students);
});
app.post('/student',(req,res)=>{
    const student=req.body;
    console.log(student);
    students.push(student);
    res.send('student is added to the database');
});


app.get('/student/:s_id',(req,res)=>{
    const s_id=req.params.s_id;

    for(let student of students){
        if (student.s_id===s_id){
            res.json(student);
            return ;
        }
    }
    res.status(404).send('student not found');
});

app.put('/student/:s_id',(req,res)=>{
    const s_id=req.params.s_id;
    const newStudent=req.body;

    for(let i=0;i<students.length;i++){
        let student=students[i]
        if(student.s_id===s_id){
            students[i]=newStudent;
        }
    }
    res.send('student is edited');
});

app.delete('/student/:s_id',(req,res)=>{
    const s_id=req.params.s_id;
    students=students.filter(i=>{
        if(i.s_id!==s_id){
            return true;
        }
        return false;
    });
    res.send('student is deleted');
});
  


app.listen(port,()=>
console.log(`Hello world listening on port ${port}!`)
)
