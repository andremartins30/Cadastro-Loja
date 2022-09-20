const Product = require('../model/Product')

module.exports = class ProductController {
    static mostrarProdutos(req, res) {
        res.render('products/all')
    }
}                               