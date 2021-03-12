const productsCtrl = {};


const Product = require('../models/product');

productsCtrl.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

productsCtrl.createProducts = async (req, res) => {
    const { Name, Price, Code, Description, Category } = req.body;
    const newProduct = new Product({
        Name: Name,
        Price: Price,
        Code: Code,
        Description: Description,
        Category: Category
    });
    await newProduct.save();
    res.json({ message: 'product saved' })
}

productsCtrl.getProduct = async (req, res) => {
    const product = await Note.findById(req.params.id)
    res.json(product)
}
productsCtrl.updateProducts = async (req, res) => {
    const { title, content, author } = req.body;
    await Product.findOneAndUpdate({ _id: req.params.id }, {
        Name: Name,
        Price: Price,
        Code: Code,
        Description: Description,
        Category: Category
    })
    res.send({ message: "product uploaded" })
}
productsCtrl.deleteProducts = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.send({ message: "product deleted" })
}

module.exports = productsCtrl;