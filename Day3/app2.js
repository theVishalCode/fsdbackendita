const express=require('express');
const fs=require('fs/promise');
const app=express();
app.use(express.json());
let users=[
    // {id:1,name:'John',age:25},
    // {id:2,name:'Jane',age:30},
    // {id:3,name:'Tom',age:28},
];
const readdata=()=>{
    users=fs.readFile('./data.json','utf8')
}
const writedata=()=>{
    fs.writeFile('./data.json',JSON.stringify(users,null,2));
}
app.get('/api',(req,res)=>{
    readdata();
    res.json(users);
})
app.post('/users',(req,res)=>{
    const data=req.body;
    readdata();
    const nexid=users.length>0?[users.length-1].id+1:1;
    data.id=nexid;
    users.push(data);
    writedata();
    res.json({message:'data received',data:data});
});

app.get('/users',(req,res)=>{
    res.send('Welcome to backend server');
})
app.listen(9000,()=>{
    console.log('Server running on port 9000')
});