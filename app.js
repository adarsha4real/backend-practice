const http = require('http')
const server = http.createServer((req,res)=>{
    
    res.end('hello,server created')
})
server.listen(3000)