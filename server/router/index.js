const express=require('express');
const router=new express.Router() 
const fs=require('fs');

// let filename='./mock/home.json';
let filename1='./mock/city.json';
let filename2='./mock/index.json';

//home
router.get('/data',(req,res)=>{
    fs.readFile(filename2,{encoding:'utf-8'},(err,data)=>{
    if(err){
    return  res.send({
            err,
            data:"读取失败"
        })
    }
     res.send(data)
})
})

//city
router.get('/city',(req,res)=>{
    console.log(222)
    fs.readFile(filename1,{encoding:'utf-8'},(err,data)=>{
    if(err){
    return    res.send({
            err,
            data:"读取失败"
        })
    }
     res.send(data)
})
})

module.exports=router;


