import products from '../models/products'
import Product from '../models/products'
// const products = [
//     {id:1,name:"Product 1"},
//     {id:2,name:"Product 2"}
// ]
// const products = [
//     {id:1,name:"Product 1"},
//     {id:2,name:"Product 2"}
// ]

export const listProduct = async (request,response)=>{
    try{
        const product = await Product.find().exec()
        response.json(product)
        // response.json(products)
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
}
export const listProductDetail = (request,response)=>{
    const product = products.find(item => item.id === +request.params.id)
    response.json(product)
}
export const createProduct = async (request,response)=>{
    try{
        const product = await Product((request.body)).save()
        response.json(product)
        // response.json(products)
    }catch(error){
        response.status(400).json({message:"Khong the tao moi"})
    }
    // products.push(request.body)
    // response.json(products)
}
export const deleteProduct = async (request,response)=>{
    try{
        const product = await products.findOneAndDelete({_id:request.params.id}).exec()
    response.json(product);
    }catch(error){
        response.status(400).json({message:"ko xóa duoc"})
}
    
}
export const updateProduct = async (request,response)=>{
    try {
        const product = await products.findOneAndUpdate({_id:request.params.id}, request.body)
    } catch (error) {
        response.status(400).json({message:"ko sửa được"})
    }
}