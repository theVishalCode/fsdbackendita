const http = require('http');
let user=[];
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    if(req.url==='/setdata' && req.method==='POST')
    {
        let body="";
        req.on('data',chunk=>{
            body+=chunk;
        });
        req.on('end',()=>{
            const user=JSON.parse(body);
            users.push(user);
            console.log(JSON.stringify(user));
            res.end("Data Recieved");
        });
    }
    else if(req.url==="/getdata" && req.method==='GET')
    {
        res.end(JSON.stringify(users));
    }
    else{
        res.end('Not Found');
    }
});
server.listen(9000,()=>{
    console.log("Server is running on port 9000");
});