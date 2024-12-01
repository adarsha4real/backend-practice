const http = require('http')
const server = http.createServer((req,res)=>{
    console.log('req.url')
    res.end('hello,server created')
})
server.listen(3000)