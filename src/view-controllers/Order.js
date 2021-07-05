// Suma de cantidades
const add= (cart, setCart, burger) => {
    const existProduct = cart.find((products) => products.id === burger.id);
    if (existProduct) {
      setCart(
        cart.map((products) =>
          products.id === burger.id ? { ...existProduct, quanty: existProduct.quanty + 1 } : products
        )
      )
    } else {
      setCart([...cart, { ...burger, quanty: 1 }])
    }
  } 

  const subtrat = (cart, setCart, burger) => {
    const existProduct = cart.find((products) => products.id === burger.id);
    if (existProduct.quanty === 1) {
      setCart(cart.filter((products) => products.id !== burger.id))
    } else {
      setCart(
        cart.map((products) =>
        products.id === burger.id ? { ...existProduct, quanty: existProduct.quanty - 1 } : products
        )
      )
    }
  }
  const totalAdd = (burger) => burger.price*burger.quanty  
  
  const delBurger = (id, cart, setCart) => {
    const burger = cart.filter((burger) => burger.id !== id)
    setCart([...burger])
}

const totalOrder = (cart) => {
    const totalPrice = cart.reduce((a, c) => a + c.quanty * c.price, 0)
    return totalPrice
}

export {
    add, subtrat, totalAdd, delBurger, totalOrder
  }