const express=require('express')
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express()
const port=3000

let customers=[
    {
    "c_name":"Bob",
    "c_id":"123",
    "c_ph":"6876868686",
    "c_loc":"abc",
    "c_addr":"def",

},

{
    "c_name":"khan",
    "c_id":"456",
    "c_ph":"6876868686",
    "c_loc":"abc",
    "c_addr":"def",

},

{
    "c_name":"sam",
    "c_id":"789",
    "c_ph":"6876868686",
    "c_loc":"abc",
    "c_addr":"def",

}
];

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/customer',(req,res)=>{
    res.json(customers);
});
app.post('/customer',(req,res)=>{
    const customer=req.body;
    console.log(customer);
    customers.push(customer);
    res.send('customer is added to the database');
});


app.get('/customer/:c_id',(req,res)=>{
    const c_id=req.params.c_id;

    for(let customer of customers){
        if (customer.c_id===c_id){
            res.json(customer);
            return ;
        }
    }
    res.status(404).send('customer not found');
});

app.put('/customer/:c_id',(req,res)=>{
    const c_id=req.params.c_id;
    const newCustomer=req.body;

    for(let i=0;i<customers.length;i++){
        let customer=customers[i]
        if(customer.c_id===c_id){
            customers[i]=newCustomer;
        }
    }
    res.send('customer is edited');
});

app.delete('/customer/:c_id',(req,res)=>{
    const c_id=req.params.c_id;
    customers=customers.filter(i=>{
        if(i.c_id!==c_id){
            return true;
        }
        return false;
    });
    res.send('customer is deleted');
});
  


app.listen(port,()=>
console.log(`Hello world listening on port ${port}!`)
)
