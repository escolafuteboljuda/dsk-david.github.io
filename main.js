const express = require('express')

const app = express()
const server = require('http').createServer(app)
const port = '3000'



app.get("/", function(req,res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get('/contacto' , (req,res) => {
   res.sendFile(__dirname + '/html/contacto.html')
})
app.get('/projetos', (req,res) => {
    res.sendFile(__dirname + '/html/projetos.html')
})
app.get('/socias', (req,res) => {
    res.sendFile(__dirname + '/html/socias.html')
})

server.listen(port, function(){
    console.log('server rodando na porta '+port)
})