const mongoose = require('mongoose')

const MONGO_URI = 'mongodb+srv://andremartins30:Kabana12@cluster0.7qd9cly.mongodb.net/?retryWrites=true&w=majority'

async function main() {
    await mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
}

main().then(db => console.log('Mongoose conectado...')).catch((err => console.log(err)))

module.exports = mongoose
