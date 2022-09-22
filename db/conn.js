const {MongoClient} = require('mongodb')

const url = "mongodb://127.0.0.1:27017/Cadastro-Loja"

const client = new MongoClient(url)


async function run(){
    try{
        await client.connect()
        console.log('Conectando ao MongoDB')
    }catch(err){
        console.log(err)
    }
}

run()

module.exports = client