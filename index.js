const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://ikmxxxx:ZBmwFFfWA0S11v4y@practice.dwdhg.mongodb.net/?retryWrites=true&w=majority&appName=practice", {
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 아니 이게 왜 날라가'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))