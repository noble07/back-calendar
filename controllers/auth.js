const {response} = require('express') // Solo es para habilitar el IntelliSense

const crearUsuario = (req, res = response) => {

  const {name, email, password} = req.body

  res.status(201).json({
    ok: true,
    msg: 'Registro',
    name,
    email,
    password
  })
}

const loginUsuario = (req, res = response) => {

  const {email, password} = req.body

  res.status(201).json({
    ok: true,
    msg: 'Login',
    email,
    password
  })
}

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
}

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken
}