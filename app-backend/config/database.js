const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado ao Banco de Dados')
    }catch(error){
        console.error(`Erro ao conectar ao Banco de Dados ${error}`)
        process.exit(1)
    }

}
module.exports = connectDB