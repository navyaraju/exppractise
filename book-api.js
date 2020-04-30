const express=require('express')
const bodyParser=require ('body-parser');
const cors=require('cors');
const app=express()
const port=3000
let books=[{
    "isbn":"266562321566",
    "title":"eloquent js,second edition",
    "author":"marjin haverbeke",
    "publish_date":"2014-06-23",
    "publisher":"no starch press",
    "numOfPages":435,
},
{
    "isbn":"7558995321566",
    "title":"eloquent js,second edition",
    "author":"marjin haverbeke",
    "publish_date":"2016-09-15",
    "publisher":"no starch press",
    "numOfPages":545,
},
{
    "isbn":"388388352321566",
    "title":"eloquent js,second edition",
    "author":"marjin haverbeke",
    "publish_date":"2013-07-29",
    "publisher":"no starch press",
    "numOfPages":275,


}];
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/book',(req,res)=>{
    res.json(books);
});
app.get('/book/:isbn',(req,res)=>{
    const book=req.body;
    console.log(book);
    books.push(book);
    res.send('book is added to the database');
});
app.get('/book/:isbn',(req,res)=>{
    const isbn=req.params.isbn;
    for(let book of books){
        if(book.isbn===isbn){
            res.json(book);
            return;
        }
    }

 
    res.status(404).send('book not found');
});
 app.listen(port,()=>
 console.log(`hello world listeningon port ${port}!`
 ));
