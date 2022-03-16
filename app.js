// b1: include thư viện http
import express from "express";
import { checkAuth } from "./middlewares/checkAuth";
import Home from "./routes/home";
import Products from "./routes/products";

const app = express();

app.use(Home);
app.use("/api",checkAuth,Products);


// const homeRoute = require('./routes/home');
// app.use(homeRoute);

// const products = require('./routes/product');
// app.use(products);

app.listen(8000, () => {
    console.log("server is running")
})
