const {response} = require('express') // Solo es para habilitar el IntelliSense
const User = require('../models/User')

const crearUsuario = async(req, res = response) => {

  const {email, password} = req.body

  try {

    let user = await User.findOne({ email })

    if(user){
      return res.status(400).json({
        ok: false,
        msg: 'Un usuario existe con ese corre'
      })
    }

    user = new User(req.body)
  
    await user.save()
  
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador'
    })
  }

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