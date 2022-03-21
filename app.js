// b1: include thư viện http
import express from "express";
import { checkAuth } from "./middlewares/checkAuth";
import Home from "./routes/home";
import Products from "./routes/products";
import mongoose from "mongoose";
import categoryRoute from "./routes/category";
const app = express();
mongoose.connect('mongodb://localhost:27017/web16308');

app.use(express.json())
app.use(Home);
app.use("/api",checkAuth,Products);
app.use("/api",categoryRoute)


// const homeRoute = require('./routes/home');
// app.use(homeRoute);

// const products = require('./routes/product');
// app.use(products);

app.listen(8000, () => {
    console.log("server is running")
})
