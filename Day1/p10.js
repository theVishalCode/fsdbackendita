const fs=require('fs');
fs.mkdir("mdir",(err)=>{
    if(err){
        console.log("Error Deleiting directory:",err);
    }else{
        console.log("Director deleted successfully");
    }
})