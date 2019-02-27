const express = require('express')
const app = express()
const bcrypt = require('bcrypt');
const _ = require('underscore')
const Usuario = require('../models/usuario')

const { verificaToken, verificaAdmin_Role } = require('../middlewares/autenticacion')
app.get('/usuario', verificaToken, function (req, res) {
    let desde = req.query.desde || 0
    desde = Number(desde)

    let limit = req.query.limit || 5
    limit = Number(limit)

    Usuario.find({
        estado: true
    }
    //, 'nombre email' los que quieres que se manden y ignore lo de mas el id siempre se manda no es necesario escribir
    )
        // .limit(limit)
        // .skip(desde)
        .exec((err, usuarios) => {

        if(err){
            return res.status(400).json({
                ok: false,
                err,
            })
        }

        Usuario.count({estado: true}, (err, conteo) => {

            res.json({
                ok: true,
                usuarios,
                cuantos: conteo ,
            })

        })

    })


    //res.json('get Usuarios')

})
  app.post('/usuario', [verificaToken, verificaAdmin_Role] ,function (req, res) {
      let body = req.body

      let usuario = new Usuario({
          nombre: body.nombre,
          email: body.email,
          password: bcrypt.hashSync(body.password, 10),
          role: body.role
      })

      usuario.save( (err, usuarioDB) => {

        if(err){
            return res.status(400).json({
                ok: false,
                mensaje: 'No se pudo guardar el usuario',
                err,
            })
        }

        //usuarioDB.password = null

        res.json({
            ok: true,
            usuario: usuarioDB
        })

      })

    //   if(body.nombre === undefined){
    //       res.status(400).json({
    //           ok: false,
    //           mensaje: 'El nombre es necesario'
    //       });
    //   }else{
    //       res.json({
    //           persona: body
    //       })
    //   }
  })
  app.put('/usuario/:id', [verificaToken, verificaAdmin_Role] ,function (req, res) {
      let id = req.params.id
      let body = _.pick(req.body, ['nombre','email','img','role'])

    //   delete body.password
    //   delete body.google
    //   delete body.estado

      Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {

        if(err){
            return res.status(400).json({
                ok: false,
                mensaje: 'Este Id no Existe',
                err,
            })
        }

        res.json({
          ok: true,
          usuario: usuarioDB
        })

      })
      
    //   res.json({
    //       id
    //   })

  })

  app.delete('/usuario/:id', [verificaToken, verificaAdmin_Role] ,function (req, res) {
    let id = req.params.id

    //Borrar ficicamente 
        // Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {


        //     if(err){
        //         return res.status(400).json({
        //             ok: false,
        //             err,
        //         })
        //     }

        //     if(usuarioBorrado === null){
        //         return res.status(400).json({
        //             ok: false,
        //             mensaje: 'El usuario no pudo borrarse',
        //         })
        //     }

        //     res.json({
        //         ok: true,
        //         usuario: usuarioBorrado
        //     })

        // })
        let cambiaEstado = {
            estado: false
        }

        Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, usuarioDB) => {

            if(err){
                return res.status(400).json({
                    ok: false,
                    mensaje: 'El usuario no pudo borrarse',
                    err,
                })
            }
    
            res.json({
              ok: true,
              usuario: usuarioDB
            })
    
        })
    
    //res.json('delete Usuario')
  })
  
  module.exports = app