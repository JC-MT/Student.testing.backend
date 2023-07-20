const express = require('express')
const app = express()
const PORT = 3000;


app.get('/greet', (req, res) => {
    res.status(200).send('Hello!')
})

app.get('/multByThree/:num', (req, res) => {
    const { num } = req.params
    const result = Number(num) * 3
    res.status(200).send(`${num} x 3 = ${result}`)
})

app.listen(PORT, () => {
    console.log('Server is running on ' + PORT)
})