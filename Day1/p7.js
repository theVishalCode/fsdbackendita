const fs=require('fs');
    fs.unlink("data.txt",(err)=>{
        if(err){
            console.log("Error deleting file: ${err}");
            return;
        }
        console.log("File deleted successfully");
});