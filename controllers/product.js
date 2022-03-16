const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" }
]

export const getProduct = (request, response) => {
    response.json(products)
};
export const getProductDetail = (request, response) => {
    const product = products.find(item => item.id === +request.params.id)
    response.json(product)
};
// thêm
export const postProduct = (request, response) => {
    products.push(request.body)
    response.json(products)
};
// xóa
export const deleteProduct = (request, response) => {
    const product = products.find(item => item.id != +request.params.id)
    response.json(product)
};
//sửa
export const putProduct = (request, response) => {
    const product = products.map(item => item.id === +request.params.id ? request.body : item)
    response.json(product)
};