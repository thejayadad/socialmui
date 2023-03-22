
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const authRouter = require("./routes/auth.js")
const postRouter = require("./routes/post.js")
const userRouter = require("./routes/user.js")
const commentRouter = require('./routes/comment')
    const uploadRouter = require('./controllers/uploadController')



const port = process.env.PORT || 5000;


require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected");
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)
app.use('/upload', uploadRouter)



app.listen(5000, () => {
    console.log("App Listening")
})
