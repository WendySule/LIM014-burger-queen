import React, { Component } from 'react';
import { createUser } from '../collections/firestore-controller';

class WaiterContainer extends Component {

  desayuno = (src, name, price, info) => {
  createUser(src, name, price, info)
  .then(() => {console.log('se creó colección indiviual')})
  }
  state = {
    loading : true,
    product : null,
    cart : [],
  }
    async componentDidMount() {
    const url = 'https://burger-queen-45750-default-rtdb.firebaseio.com/productos.json'
    const response = await fetch(url)
    const data = await response.json()
    const arrayBreakfast = Object.values(data.desayuno);
    const arrayMenu = Object.values(data.menu);
    //console.log(data)
    const newArray = arrayBreakfast.concat(arrayMenu);
    //console.log(newArray)
    this.setState({product : newArray, loading: false})

  };
  
  render () {
     return (
      <div>
          <section className="waiter-container">
              <article>
                  <ul className="select-menu">
                      <li><img src="https://image.flaticon.com/icons/png/512/1037/1037762.png" alt="icon-select-menu"/>menú</li>
                      <li><img src="https://image.flaticon.com/icons/png/512/887/887359.png" alt="icon-select-breakfast"/>desayuno</li>
                  </ul>
                  <div className="gallery">
                  {this.state.loading || !this.state.product ?(
                       <div>loading...</div>
                       ) : (
                       <div className="gallery-container">
                         {this.state.product.map((e) => (
                           <div key={e.nombre}>
                             <img src={e.img} alt={e.nombre} onClick={() => this.desayuno(e.img,e.nombre,e.precio,e.categoría)}/>
                             <p>$ {e.precio}</p>
                             <p>{e.nombre}</p>
                           </div>
                         ))}
                      </div>
                      )}
                  </div>
              </article>
              <article className="select-breakfast">
                <ul>
                  <li style={{display:'none'}}><img src="https://image.flaticon.com/icons/png/512/43/43869.png" alt="more-icon"/>
                    Datos del Pedido
                  </li>
                  <input type='string' placeholder='waiter name'/>
                  <input type='string' placeholder='client name'/>
                  <input type='string' placeholder='n° table'/>
                  <li><img src="https://image.flaticon.com/icons/png/512/43/43869.png" alt="more-icon"/>
                    Productos del Cliente
                  </li>
                </ul>
                <div className="gallery">
                  {this.state.loading || !this.state.product ?(
                       <div>loading...</div>
                       ) : (
                       <div className="gallery-container">
                         {this.state.product.map((e) => (
                           <div key={e.nombre}>
                             <img src={e.img} alt={e.nombre} onClick={() => this.desayuno(e.img,e.nombre,e.precio,e.categoría)}/>
                             <p>$ {e.precio}</p>
                             <p>{e.nombre}</p>
                           </div>
                         ))}
                      </div>
                      )}
                  </div>


              </article>
          </section>
      </div>
    );
  }
}
export default WaiterContainer;
