
import { Product } from "../../models/productModel/product.model.js";
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, name, price, category } = req.body;
      

        const product = await Product.findByIdAndUpdate(id, {
            title,
            name,
            price,
            category
        }, { new: true });
        res.status(201).json({ status: "Success", message: "Product updated successfully", product: product });
    }catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    
    }}

