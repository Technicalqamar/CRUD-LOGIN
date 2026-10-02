
import express from "express"

import { getAllProducts } from "../../controllers/productsControllers/getAllProduct.Controller.js"
import { createProduct } from "../../controllers/productsControllers/createProduct.controller.js"
import { updateProduct } from "../../controllers/productsControllers/updateProduct.Controller.js"
import { deleteProduct } from "../../controllers/productsControllers/deleteProduct.Controller.js"
const router = express.Router()


router.get("/getAllProducts", getAllProducts)
router.post("/createProduct", createProduct)
router.put("/updateProduct/:id", updateProduct)
router.delete("/deleteProduct/:id", deleteProduct)

export default router;