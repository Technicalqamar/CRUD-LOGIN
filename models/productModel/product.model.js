import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true}
}, { timestamps: true });


export const Product = mongoose.model("Product", productSchema);