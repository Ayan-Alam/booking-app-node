const path = require('path');
const User = require('../models/form-data')
exports.getIndex = (req,res,next) =>{
    res.sendFile(path.join(__dirname,'..','public',"views",'index.html'));
}

exports.addUser = (req,res,next) => {
    const name = req.body.name;
    const email = req.body.email;
    const Phoneno = req.body.Phoneno;
    console.log(email); 
}

exports.getjs = (req,res,next) =>{
    res.sendFile(path.join(__dirname,'..','public',"js",'main.js'))
}
