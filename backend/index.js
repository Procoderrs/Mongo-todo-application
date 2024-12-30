const express=require('express');
const mongoose =require('mongoose');
const cors=require ('cors');
const dotenv=require('dotenv').config();
const taskRoutes=require('./routes/tasks')

const app=express()


//middleware
app.use(cors())
app.use(express.json())
app.use('/tasks',taskRoutes)
const TodoItemRoutes=require('./routes/tasks')

mongoose.connect('mongodb+srv://zeenatzeni0112:todoapplication@cluster0.pfbtr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
  
})
.then(()=>console.log('connected to mongo db'))
.catch(err=>console.log('could not connect to mongo db',err)
)

const PORT=5000;
app.listen(PORT,()=>{
  console.log(`server is running on http://localhost:${PORT}`);
})




//






