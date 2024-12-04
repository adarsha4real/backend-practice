const express = require('express');
const app = express();
const usermodel= require('./models/user');
const dbConnection =require('./config/db');
app.use(express.json())
app.use(express.urlencoded({extended:true   }))
app.use(express.static("public"))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render("index")

}
)
app.post('/getdata',(req,res)=>{
    console.log(req.body);
    res.send('data receivedd')

    
})
app.listen(3000)
