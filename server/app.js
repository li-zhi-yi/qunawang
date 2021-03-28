const express=require('express');
const body_parser=require('body-parser');
const path=require("path")
const cors=require('cors');//跨域
const app=express();
const ejs=require('ejs')

app.use(cors())

//配置body_parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));

//配置html拓展名
app.engine('.html',ejs.__express);
ejs.delimiter = '$';

//静态化目录
app.use('/',express.static(path.join(process.cwd(),'../dist')))
//引入路由
const index=require('./router/index.js')

//安装路由
app.use('/api',index) 


app.get('/',(req,res)=>{
    res.render('index.html')
})

app.listen(3001,()=>{
    console.log('3001')
})


/*
  proxyTable: {
      '/api':{
        //目标服务器
        target:'http://localhost:8080',
        // api替换path 
        pathRewrite:{
          '^/api':'/static/mock'
        }
      }
    },


*/