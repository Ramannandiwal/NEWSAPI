const express= require("express")
const app =express();
const Port = 3010;
app.use(express.static("./public"))
app.get("/",(req,res)=>{
 res.send('/Projects/public/index.html')
})
app.listen(Port,()=>{
   console.log(`server is lisetein on ${Port}`)
})
