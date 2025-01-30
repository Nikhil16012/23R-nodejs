 var fs=require("fs")
var ss1={a:"nikhil",age:22}
var a=['index122.js',"index23r.js","index24r.js"]
for(i=0;i<a.length;i++){
    fs.writeFile(`${a[i]}`,(err)=>{   
    if(err){
        console.log(err);
    }
    else{
        console.log("file has been created")
    }
    })
    }
for(i=0;i<a.length;i++){
fs.unlink(`${a[i]}`,(err)=>{   
if(err){
    console.log(err);
}
else{
    console.log("file has been deleted")
}
})
}
