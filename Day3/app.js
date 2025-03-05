const express=require('express');
const app=express();
app.use(express.json());
const users=[
    // {id:1,name:'John',age:25},
    // {id:2,name:'Jane',age:30},
    // {id:3,name:'Tom',age:28},
];
app.get('/api',(req,res)=>{
    res.json(users);
})
app.post('/users',(req,res)=>{
    const data=req.body;
    const nexid=users.length>0?[users.length-1].id+1:1;
    data.id=nexid;
    users.push(data);
    res.json({message:'data received',data:data});
});

app.get('/users',(req,res)=>{
    res.send('Welcome to backend server');
})
app.listen(9000,()=>{
    console.log('Server running on port 9000')
});