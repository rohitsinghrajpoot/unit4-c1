const express= require("express")

const app= express()

app.get("/books" ,logger,(req,res)=>{
 return  res.send({rote:"/books"})
})

app.get("/libraries" ,logger,checkPermission("librarian"),(req,res)=>{
    return  res.send({rote:"/libraries",permission:req.role})
  })

  app.get("/authors" ,logger,checkPermission("author"),(req,res)=>{
    return  res.send({rote:"/authors",permission:req.role})
  })

  function checkPermission(role){
    return function logger(req,res,next){
        if(role="librarian"){
             permission:true
             return next()
        }else if(role="author"){
            permission:true
            return next()
        }else {
          return  res.send("not allowed")
        }
    } 
  }

  function logger(req,res,next){
   if(req.path=="/books") {
       req.role = "true"
   }else if(req.path="/libraries"){
       req.role="true"
   }else{
       req.role="true"
   }
   console.log("called")
   next()
  }
  

app.listen(5000,()=>{
    console.log("port is listening")
})