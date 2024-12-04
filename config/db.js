 const mongoose = require('mongoose')
 const connection= mongoose.connect('mongodb+srv://addy404notfound:88888888@cluster0.lkoya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('connected')
 })
 module.exports= connection