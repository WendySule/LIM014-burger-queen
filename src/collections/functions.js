import { createProduct } from './firestore-controller'

export const desayuno = ( src, name, price, info, id) => {
    const img = src
    const nameId = name
    const priceId = price
    const infoId = info 
    const ProductId = id 
    const descriptionId = 'desayuno' 
    createProduct(img, nameId, priceId, infoId, ProductId, descriptionId)
}
export const menu = ( src, name, price, info, id) => {
    const img = src
    const nameId = name
    const priceId = price
    const infoId = info 
    const ProductId = id 
    const descriptionId = 'menu' 
    createProduct(img, nameId, priceId, infoId, ProductId, descriptionId)
}
// desayuno("https://images.unsplash.com/photo-1588012841523-08163e2b0c26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
// "Café americano",
// '5',
// 'bebida',
// '001'
// )