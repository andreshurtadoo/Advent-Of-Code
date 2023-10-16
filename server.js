const express = require('express')
const app = express()

const PORT = 8080

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>')
})

app.listen(PORT, () => {
    console.log(
        'Listening on 127.0.0.1:8080'
    )
})