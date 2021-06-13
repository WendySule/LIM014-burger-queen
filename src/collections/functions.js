import { createUser } from './firestore-controller'

export const desayuno = (src, name, price, info) => {
    createUser(src, name, price, info)
    .then(() => {console.log('funciona')})
}
