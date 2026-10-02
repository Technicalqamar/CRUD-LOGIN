
import { Product } from "../../models/productModel/product.model.js";
export const createProduct = async (req, res) => {
    try {
        const { title, name, price, category } = req.body;
      

        const product = await Product.create({
            title,
            name,
            price,
            category
        });
        res.status(201).json({ status: "Success", message: "Product created successfully", product: product });
    }catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    
    }}

