const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send("Go!!!!")
})


app.listen(9000,() => {
    console.log('server is working')
})