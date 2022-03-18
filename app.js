// b1: include thư viện http
import express from "express";
import { checkAuth } from "./middlewares/checkAuth";
import Home from "./routes/home";
import Products from "./routes/products";
import mongoose from "mongoose";
const app = express();
mongoose.connect('mongodb://localhost:27017/nodejs');

app.use(Home);
app.use("/api",checkAuth,Products);


// const homeRoute = require('./routes/home');
// app.use(homeRoute);

// const products = require('./routes/product');
// app.use(products);

app.listen(8000, () => {
    console.log("server is running")
})
