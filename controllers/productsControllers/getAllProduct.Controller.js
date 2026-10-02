
import { Product } from "../../models/productModel/product.model.js";
export const getAllProducts = async (req, res) => {
    try {

        const product = await Product.find();
        if (!product) {
            return res.status(404).json({ status: "Error", message: "Product not found" });
        }
        res.status(200).json({ status: "Success", message: "Product found successfully", product: product });
    }catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    
    }}

        