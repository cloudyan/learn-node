import express from 'express'
// const express = require('express')

const app = express()

app.on('hello-alert', () => {
  console.warn('Warning!')
})

app.get('/', (req, res) => {
  res.app.emit('hello-alert')
  res.send('hello world')
})

app.listen(3000)
