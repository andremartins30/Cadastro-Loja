const mongoose = require('mongoose')


async function main() {
    await mongoose.connect('mongodb+srv://andremartins30:Kabana12@cluster0.7qd9cly.mongodb.net/?retryWrites=true&w=majority')
    console.log('Conectou ao MongoDB com o Mongoose!')

}

main().catch((err) => console.log(err))

module.exports = mongoose
