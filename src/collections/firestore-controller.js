import { db, auth } from './firebase-config'
// Crea propiedades de un usuario
const createUser = (src, name, price, info) => {
    const addUserCollection = db.collection('desayuno').add({
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
    createUser, state
}
