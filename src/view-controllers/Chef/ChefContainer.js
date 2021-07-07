import React, { useEffect, useState } from 'react'
import customerNotes from './imgChef/customerNotes.svg'
import readyOrder from './imgChef/readyOrder.svg'
// import play from './imgChef/play.svg'
// import stop from './imgChef/stop.svg'
// import restart from './imgChef/restart.svg'
import { db } from '../../collections/firebase-config'
import { editStatus, newDate } from '../../collections/firestore-controller'


function ChefContainer() {
  const [menu, setMenu] = useState([])
  const type = 'pending'

    useEffect(() => {
    var docRef = db.collection('order')
    docRef.orderBy('timeOrder', 'asc').onSnapshot((querySnapshot) => {
      const output = [];
      querySnapshot.forEach((doc) => {
        output.push({ id: doc.id, ...doc.data() });
      })
      setMenu(output.filter(e => e.status === type));
    })
    /*get().then((doc) => {
      const documents = []
      doc.forEach(e => {
        documents.push({ id: e.id, ...e.data()})
      })
      setMenu(documents.filter(e => e.status === type))
      //setMenu(documents)
      //console.log(documents)
    })
    */
  }, [])

  const changeStatus = (e) => {
    editStatus(e, newDate())
  }

  return (
    <section>
        <section className="chef-container">
            <section className='orders-chef'>
                <h1 className='chef-title'>Pedidos al Chef</h1>
            </section>
            <section className='data-container'>
            {menu.map((e, index) => (
                <section className='orders-container' key={index}>
                  <section className='container-principal'>
                      <section>
                        <h2 className='customers-names'>Client's Name: {e.clientName}</h2>
                      </section>
                      <section className='prepare-orders'>
                        <h3 >Pedidos:</h3>
                        <section>
                        {e.products.map((cart, index) =>
                           <div className='the-orders' key= {index}>
                            <section id='ordersPrepare'>{cart.product}</section>
                            <span type='text' className='number-orders'>{cart.quanty}</span>
                          </div>
                        )}
                        </section>
                      </section>
                      <section className='note-container'>
                        <img src={customerNotes} className='note-icon' alt='customers-notes'/>
                        <div className='customer-notes'>N° Table: <span>{e.numberTable}</span></div>
                        <div className='customer-notes'>Waiter: <span id="waitername-style-orderChef">{e.waiterName}</span></div>
                      </section>
                  </section>
                  <div className = 'time-order'>
                    {/* <section className='time-container'>
                      <section className='count' id='hms'>00:00:00</section>
                        <img src={play} className='btn start' alt='play'/>
                        <img src={stop} className='btn stop' alt='stop'/>
                        <img src={restart} className='btn restart' alt='restart'/>
                      </section> */}
                    <section className='ready-container' onClick={() => changeStatus(e.id)}>
                      <img src={readyOrder} className='ready-order rotate' alt='ready-order'/>
                    </section>
                  </div>
                </section>
            ))}
            </section>
        </section>
    </section>
  )
}

export default ChefContainer;
