
/**
 *  Este código carregas as variáveis de ambiente do arquivo '.env' com 'dotenv.config()';
 *  Habilita o CORS com 'app.use(cors())
 *  Configura o parser de JSON para requisições com 'app.use(express.json())
 *  Conecta ao Banco de Dados MongoDB com 'mongoose.connect()'
 *  Define a porta do Servidor com 'const port = process.env.port || 3000'
 *  Inicia o Servidor com 'app.listen()'
 */



const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')


dotenv.config() //Carrega as variáveis de ambiente do arquivo .env

const app = express()

//HabIlitando o CORS para permitir requisições de origens diferentes
app.use(cors())

//Configurando o parser de JSON para requisições
app.use(express.json())

//Conect ao Banco de Dados MogoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log('Conectado ao Banco de Dados')})
.catch((err)=>{console.error(`Erro ao conectar ao Banco de Dados: ${err}`)})

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/activities', activityRoutes)

//Definindo a porta do Servidor
const port =process.env.PORT || 3000

//Inicia o Servidor
app.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`)
})