import express from "express"
import { deleteProduct, getProduct, getProductDetail, postProduct, putProduct } from "../controllers/product";
const router = express.Router();



router.get('/products', getProduct);
router.get('/products/:id', getProductDetail);
// thêm
router.post('/products', postProduct);
// xoa 
router.delete('/products/:id', deleteProduct);
// sửa
router.put('/products/:id', putProduct);


export default router;