const path=require('path')
const express=require('express')
const app=express();
const dotenv=require('dotenv')
const cors=require('cors');
dotenv.config({path:path.join(__dirname,'config','config.env')})

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port ${process.env.PORT} `);
})