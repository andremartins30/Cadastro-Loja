const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/', ProductController.showProduct)
router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)
router.get('/report', ProductController.reportProduct)

module.exports = router

