const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose =  require('mongoose')
require('dotenv').config()
// bring routes from external js files
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const tagRoutes = require('./routes/tag')
//app
const app = express()

//db
mongoose
    .connect(process.env.DATABASE_LOCAL)
    .then(()=>{console.log("Db Connected")})

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
//cors
if(process.env.NODE_ENV === 'development'){
    app.use(cors({origin:`${process.env.CLIENT_URL}`}))
}
// routes middlewares
app.use('/api',blogRoutes);
app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);
app.use('/api',tagRoutes);
app.get('/api',(req,res)=>{
    res.json({time : Date().toString()});
})

//port 
const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})


