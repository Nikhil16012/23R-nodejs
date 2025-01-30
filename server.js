var http=require("http");
var server= http.createServer((req,res)=>{
    res.end("Nikhil")
});
var port=2000;
server.listen(port,()=>{
    console.log("server is running"+ "http://localhost:"+port);
})