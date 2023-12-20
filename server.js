require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRouter')
const noteRouter= require('./routes/noteRouter')

const app = express()
app.use(express.json())
app.use(cors())


//Routes
app.use('/users',userRouter)
app.use('/api/notes',noteRouter)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("server is running on port",PORT)
})

//connect to MongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
}).then(() => {
  console.log('MongoDB Connected');
}).catch((error) => {
  console.error(`Error connecting to MongoDB: ${error.message}`);
  process.exit(1); // Exit with failure
 })