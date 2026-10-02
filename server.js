import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/productsRoutes/product.Route.js";
import authRoutes from "./routes/authRoutes/auth.Route.js";

dotenv.config();


const app = express();

const PORT = process.env.PORT || 3000;

connectDb();

app.use(express.json());



app.use("/api", productRoutes);
app.use("/api/auth", authRoutes);




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});