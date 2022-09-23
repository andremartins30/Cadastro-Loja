const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')


router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)
router.get('/report', ProductController.reportProduct)
router.get('/:id', ProductController.getProduct)
router.get('/', ProductController.showProduct)


module.exports = router

