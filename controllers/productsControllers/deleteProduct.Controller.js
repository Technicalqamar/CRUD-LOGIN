
import { Product } from "../../models/productModel/product.model.js";
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
      

        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ status: "Error", message: "Product not found" });
        }
        res.status(200).json({ status: "Success", message: "Product deleted successfully", product: product });
    }catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });    
    }}

    
