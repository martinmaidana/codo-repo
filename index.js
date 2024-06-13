const express = require('express')

const app = express()
app.use(express.static("public"));

const productosRouter = require("./routes/productos.router");
app.use("/productos",productosRouter);
app.get("/", (req,res)=>{
   res.send("<h1>Hola expresso!!!</h1>") 
})

app.get('/nosotros', (req,res)=>{
    res.sendFile(__dirname + "/private/nosotros.html");
})
const PORT = 3000

app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`))