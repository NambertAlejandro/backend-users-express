import { Timestamp } from 'bson'
import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("conectou")
})
.catch(()=>{
    console.log("Não rodou")
})

const usuarioSchema = new mongoose.Schema(
    {
        nome : { type : String, required: true},
        age : { type: Number, required: true, unique: true},
        email: {type: String, required: true}

    }, {timestamps: true}
)

const Usuario = mongoose.model('Usuarios', usuarioSchema  )


app.get('/users', async (req, reply) => {

    const usuariosDoBanco = await Usuario.find()
    reply.json(usuariosDoBanco)

})

app.post('/users', async (req, reply)  => {

    const usuarioCriado  = await Usuario.create(req.body)

    reply.json(usuarioCriado)


})
app.put('/users', (req, reply) => {
    console.log(req)
    reply.json(req.body) 

    // reply.json(req.body) 

})








app.listen(3000, () => {
    console.log("servidor rodando")
})