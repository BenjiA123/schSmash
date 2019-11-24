const express = require('express');
const bodyParser = require('body-parser')
const Post = require('./models/post')
const mongoose = require("mongoose")

const app = express();
// password Vm0qUTbkHM8I8xXn
mongoose.connect("mongodb+srv://AkandeBenjamin:Vm0qUTbkHM8I8xXn@cluster0-mpud7.mongodb.net/bellsSmash?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to database ")
    })
    .catch(() => {
        console.log("Connection failed")
    })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
// app.use((req,res,next)=>{
//     console.log("First Middleware")
//     next();  // Without this next the code will go into an infinate loop the next function stops the loop

//     //You have to call next if you are not sending a response
// })

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");

    res.setHeader("Access-Control-Allow-Nethods", "GET ,POST , PATCH , DELETE , OPTIONS");
    next();
})


app.post('/api/posts', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save();
    res.status(201).json({
        message: 'Posts Added successfully'
    })

})
app.get('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: 'ef75tyhsleit357',
            title: 'First Server siide code',
            content: 'My first server-side content'
        },
        {
            id: 'srogw3h9ot8ygh9e',
            title: 'Second Server siide code',
            content: 'My Second server-side content'
        },
        {
            id: 'ouve8tq39t3894',
            title: 'Third Server siide code',
            content: 'My Third server-side content'
        }
    ]
    res.status(200).json({
        message: "The message was sent successfully",
        posts: posts
    })
})


module.exports = app;