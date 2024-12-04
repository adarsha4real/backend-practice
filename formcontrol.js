const express = require('express');

const app = express();

const usermodel= require('./models/user');

const dbConnection =require('./config/db');

app.use(express.json())
app.use(express.urlencoded({extended:true   }))

app.use(express.static("public"))

app.set('view engine','ejs')

app.get('/register',(req,res)=>{
    res.render("register")
})

app.post('/register',async(req,res)=>{
    console.log(req.body)

    const{username,email,pswd}=req.body

    const newuser=await usermodel.create({
        username:username,
        email:email,
        password:pswd
    })
    
    res.send(newuser)
})
app.get('/',(req,res)=>{
    res.render("index")

}
)
app.get('/get-data',(req,res)=>{
    usermodel.find({username:"hello"})
    .then((user)=>{
        res.send(user)
    })
})

// findone only returns one data.

// app.get('/get-data',(req,res)=>{
//     usermodel.findOne({username:"hello"})
//     .then((user)=>{
//         res.send(user)
//     })
// })

app.get('/update-data',async(req,res)=>{
    await usermodel.findOneAndUpdate({
        username:"adarsha"
    },{
        email:"replacedemail.com"
    })
    res.send('user-updated')
})

app.get('/delete-data',async(req,res)=>{
    await usermodel.findOneAndDelete({
       username:"hello" 
    })
    res.send("user-deleted")
})
app.post('/getdata',(req,res)=>{
    console.log(req.body);
    res.send('data receivedd')

    
})
app.listen(3000)
