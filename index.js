import express from "express";
import mongoose from "mongoose";
import { create,fetch,update,deletePerson } from "./router.js";
const app = express();
const URL = 'mongodb://localhost:27017/demo'
const test = [
    {
        name :'karthi'
    }
]
mongoose.connect(URL,()=> console.log('DB connected'))
// app.get('/',(req,res)=> res.send('frontend'))
// app.get('/:name',(req,res)=> {
// const get = test.filter((e)=>e.name === req.params.name)
// res.send(get)
// })
app.use(express.json());
app.use('/person',create)
app.use('/fetch',fetch)
app.use('/update',update)
app.use('/delete',deletePerson)
app.listen(2000,()=> console.log('app running'))

