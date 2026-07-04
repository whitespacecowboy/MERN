const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('data_received1', (data) => {
    console.log("Data received: ", data)
})

emitter.on('data_received2', (data) => {
    console.log("Data received: ", data)
})

emitter.emit('data_received1', {
    'id': 1,
    message: "Hello from EDA!"
})

emitter.emit('data_received2', {
    'id': 2,
    message: "Hello from DEA!"
})