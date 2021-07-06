import React, { useEffect, useState } from 'react';
import customerNotes from './imgChef/customerNotes.svg';
import readyOrder from './imgChef/readyOrder.svg';
import play from './imgChef/play.svg';
import stop from './imgChef/stop.svg';
import restart from './imgChef/restart.svg';
import { db } from '../../collections/firebase-config'


function ChefContainer() {
  const [menu, setMenu] = useState([])
  const [cart, setCart] = useState([])
  const [type, setType] = useState('menu')
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

    //traer la data para mostrar en ventana chef
    useEffect(() => {
    var docRef = db.collection('order')

    docRef.get().then((doc) => {
      const documents = []
      doc.forEach(e => {
        documents.push({ id: e.id, ...e.data()})
      })
      //setMenu(documents.filter(e => e.category === type))
      setMenu(documents)
      //console.log(documents)
    })
  }, [type])

    //cronómetro actulizando con useEffect
    //null pq sera el hook que encienda y apague, se necesita tener acceso a ese intervalo
    useEffect(() => {
      let interval = null;

      if (timerOn) {
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 10)
        }, 10)
      } else if (!timerOn) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [timerOn]);


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
                        <div className='customer-notes'>Waiter: <span>{e.waiterName}</span></div>
                      </section>
                  </section>
                  <div className = 'time-order'>
                    <section className='time-container'>
                      <section className='count' id='hms'>
                        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                      </section>
                      <section >
                        {!timerOn && time === 0 && (
                          <img src={play} className='btn' alt='play'onClick={() => setTimerOn(true)}/>
                        )}
                        {timerOn && (
                          <img src={stop} className='btn' alt='stop'onClick={() => setTimerOn(false)}/>
                        )}
                        {!timerOn && time !== 0 && (
                          <img src={restart} className='btn' alt='restart' onClick={() => setTime(0)}/>
                        )}
                      </section>
                    </section>
                    <section className='ready-container'>
                      <img src={readyOrder} className='ready-order rotate' alt='ready-order'/>
                    </section>
                  </div>
                </section>
            ))}
            </section>
        </section>
    </section>
  );











}

export default ChefContainer;
