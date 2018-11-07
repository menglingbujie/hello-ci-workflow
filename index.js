const express = require("express");
const app = express();

app.get("/",function(req,res,next){
  res.send("Hello world!");
})

const server = app.listen(3000,function(){
  const address = server.address();
  const host=address.address;
  const port=address.port;

  console.log("Example app listening at https://%s:%s",host,port);
})