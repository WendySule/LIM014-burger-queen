import { db, auth } from './firebase-config'
// Crea propiedades de un usuario
const createProduct = (src, name, price, info, id, description) => {
    const addUserCollection = db.collection(description).doc(id).set({
        id: id,
        img: src,
        product: name,
        price: price,
        category: info,
    });
    return addUserCollection;
  };

const state = () => { auth.onAuthStateChanged((user) => {
    console.log(user)
  })
}

export {
  createProduct, state
}
