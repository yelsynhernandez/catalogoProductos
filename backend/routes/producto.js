const express = require('express')
const producto = require('../controllers/producto')
const router = express.Router()

router.get('/:id',producto.obtenerProducto)
router.get('/', producto.obtenerProductos)
router.post('/',producto.crearProducto)
router.put('/:id', producto.actualizarProducto)
router.delete('/:id', producto.eliminarProducto)

module.exports = router