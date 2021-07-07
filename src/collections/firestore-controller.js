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
const newDate = () => {
  const date = []
  const getHours = new Date().getHours()
  const getMinutes = new Date().getMinutes()
  const getSeconds = new Date().getSeconds()
    date.push(getHours, getMinutes, getSeconds)
  return (date)
}
const createOrder = (wName, cName, nTable, order, totalOrder, newDate) => {
  const addOrderCollection = db.collection('order').add({
      waiterName: wName,
      clientName: cName,
      numberTable: nTable,
      products: order,
      totaPriceOrder: totalOrder,
      status: "pending",
      timeOrder: new Date().toLocaleString('GMT-0500'),
      timeHourStart: newDate,
  })
  return addOrderCollection;
}
const editStatus = (id, newDate) => db.collection('order').doc(id).update({
  status: 'completed',
  timeEnd: newDate,
})

const statusReady = (id) => db.collection('order').doc(id).update({
  status: 'finished',
})

export {
  createProduct, state, createOrder, editStatus, newDate, statusReady
}
