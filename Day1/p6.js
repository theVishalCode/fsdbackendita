const fs=require('fs');
const data ="I am updated data"
const append=()=>{
    const data = "This is an append line.\n";
    fs.appendFile('data.txt',data,(err)=>{
        if(err) throw err;
        consloe.log("Data appended");
    });
};
append();