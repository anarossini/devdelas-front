const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const servidor = express()
const usuariasController = require('./js/UsuariasController')
const PORT = process.env.PORT || 3000
const jwt = require('jsonwebtoken')
const logger = (request, response, next) => {
  console.log(`${new Date().toISOString()} Request type: ${request.method} to ${request.originalUrl}`)

  response.on('finish', () => {
    console.log(`${response.statusCode} ${response.statusMessage};`)
  })

  next()
}

servidor.use(cors())
servidor.use(bodyParser.json())
servidor.use(logger)


//Cadastrar uma usuária

servidor.post('/usuarias', (request, response) => {
  UsuariasController.add(request.body)
    .then(usuaria=> {
      const _id = usuaria._id
      response.send(_id)
    })
    .catch(error => {
      if(error.name === "ValidationError"){
        response.sendStatus(400)
      } else {
        console.log(error)
        response.sendStatus(500)
      }
    })
})

//Adicionar um Tipo a Usuaria (Professora ou Aluna)

servidor.post('/usuarias/adicionar-tipo/:usuarioId', (request, response) => {
  const usuariaId = request.params.usuariaId
  UsuariasController.addTipo(usuariaId, request.body)
  
    .then(tipo => {
      
      response.send(tipo)
      
    })
    .catch(error => {
      if(error.name === "ValidationError"){
        response.sendStatus(400)
      } else {
        console.log(error)
        response.sendStatus(500)
      }
    })
  })

servidor.get('/usuarias/:usuariaId/tipo', async (request, response) => {
  const usuariaId = request.params.usuariaId
  usuariasController.getTipo(usuariaId)
    .then(tipo => response.send(tipo))
})
  


  servidor.listen(PORT)
    
  console.log(`Servidor rodando na porta ${PORT}`)
  
  




