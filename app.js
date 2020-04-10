require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const router = require('./routers')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)
io.on('connection', function(socket){
  socket.broadcast.emit('woyy') 
    console.log('a user connected >>>>>>>>>');
    io.emit('connect', 'connected')
    socket.on('add', () => {
      console.log('testing')
      io.emit('addServer', 'nice')
    })
    socket.on('fetchClient', () => {
        io.emit('fetch')
    })

    socket.on('disconnect', () => {
      console.log('user disconnected')
  })
});
app.use(errorHandler)


http.listen(PORT, () => console.log('I love U ', PORT))