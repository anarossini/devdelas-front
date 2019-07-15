const { connect } = require('./Repository')
const usuariasModel = require('./UsuariasSchema')

connect()

const getAll = () => {
  return usuariasModel.find((error, usuarias) => {
    return usuarias
  })
}