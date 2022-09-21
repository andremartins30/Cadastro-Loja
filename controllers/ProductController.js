const Product = require('../model/Product')

module.exports = class ProductController {
    static showProduct(req, res) {
        res.render('products/all')
    }

    static createProduct(req, res) {
        res.render('products/create')
    }

    static createProductPost(req, res) {

        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        const image = req.body.image

        const product = new Product(name, price, description, image)

        product.save()
            console.log(product)

        res.redirect('/')
    }
}                               