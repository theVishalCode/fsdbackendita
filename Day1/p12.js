
const fs=require('fs/promises');

const write=async()=>{
    const data="I am update data"
     fs.writeFile("./data.txt",data,(err)=>{
        if(err)
            console.log("Error writing data to file",err)
        else console.log("file updated successfully");
     });

};
write();