// var http=require("http")
// var url=require("url")
// var server=http.createServer((req,res)=>{
 
// var parsedurl=url.parse(req.url,true);
// var data=JSON.stringify(parsedurl);
// // res.write(JSON.stringify(parsedurl));
// // res.end()
// if(parsedurl.pathname=="/name"){
//     res.write("hi i am chitti memory 1tb")
//     res.end()
// }
// else if(parsedurl.pathname='/10k'){
//     res.write("enter into 10k coders")
//     res.end()

// }
// else{
//     res.write("hi i am root")
//     res.end()
// }
// })
// var port=3000
// server.listen(port,()=>{
//     console.log("server is running");
// })
var http=require("http")
var url=require("url")
var server=http.createServer(async(req,res)=>{

    var data=await fetch ("https://dummyjson.com/products")
    let response= await data.json();
    var parsedurl= url.parse(req.url,true)
//    res.write(JSON.stringify(response));
//     res.end()
if(parsedurl.pathname=="/products"){
    res.write(JSON.stringify(response));
    res.end()
}else if(parsedurl.pathname.startsWith("/products/")){
var splitedval=parsedurl.pathname.split("/")
var routeval=splitedval[splitedval.length-1]
var returnedval=response.products.filter((val)=>{
    return val.id==routeval;
    })
res.write(JSON.stringify(returnedval))
res.end()
}
else{
    res.write("i am root")
    res.end()
}
})
server.listen(3000,()=>{
    console.log("server is running");
})