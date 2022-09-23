const { getProducts } = require('../model/Product')
const Product = require('../model/Product')

module.exports = class ProductController {
    static async showProduct(req, res) {

        const products = await Product.getProducts()

        res.render('products/all', {products})
    }

    static createProduct(req, res) {
        res.render('products/create')
    }

    static async reportProduct(req, res) {

        const products = await Product.getProducts()

        res.render('products/report', {products})
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


    static async getProduct(req, res) {

        const id = req.params.id

        const product = await Product.getProductById(id)

        res.render('products/product', { product })
    }
}                               