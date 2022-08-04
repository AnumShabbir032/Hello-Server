console.log("Bello Server");

import express from "express";

import cors from 'cors'

const app = express()

app.use(cors());

app.get('/home', (req, res) => {
  res.send('Welcome home!')
})

app.get('/profile', (req, res) => {
  res.send('This is profile!')
})

app.get('/weather', (req, res) => {
  res.send({
    weather: 'sunny',
    temperature: '20',
    city: 'London'
  })
})

const port = process.env.PORT || port;

app.listen(port, () => {
  console.log(`Bello Server  listening on port ${port}`)
})




