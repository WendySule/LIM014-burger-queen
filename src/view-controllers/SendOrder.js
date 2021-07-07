import React, {useEffect, useState} from 'react'
import MenuBar   from './MenuBar'
import { db } from '../collections/firebase-config'
import { statusReady } from '../collections/firestore-controller'
import customerNotes from './Chef/imgChef/customerNotes.svg'
import hamburguesaBag from '../img-svg/hamburguesaBag.svg'

function HistorialContainer() {
    const [menu, setMenu] = useState([])
    const type = null

      useEffect(() => {
      var docRef = db.collection('order')
      docRef.orderBy('timeEnd', 'asc').onSnapshot((querySnapshot) => {
        const output = [];
        querySnapshot.forEach((doc) => {
          output.push({ id: doc.id, ...doc.data() });
        })
        setMenu(output.filter(e => e.status === 'completed'));
      })
    }, [])
    const renderTimeStart = (h, m, s) => {
        return (h +':'+ m +':'+s)
    }
    const renderTimeEnd = (h,m,s) => {
        return (h +':'+ m +':'+s)
    }
    const timeCalculate = (a,b) => {
        const t1GetHour = b[0] - a[0]
        const t1GetMinutes = b[1] - a[1]
        const t1GAetSeconds = b[2] - a[2]
        if (t1GetHour>0){
            let t1NewGetHour = t1GetHour-1
            if(t1GAetSeconds<0){
                let t1GAetSecondsPositive =  60 - (t1GAetSeconds * -1)
                if(t1GetMinutes>0){
                    return(t1NewGetHour+':'+t1GetMinutes+':'+t1GAetSecondsPositive)
                }else if (t1GetMinutes===0){
                    let t1NewGetMinutes = 0
                    return(t1NewGetHour+':'+t1NewGetMinutes+':'+t1GAetSecondsPositive)
                } else {
                    let t1GetMinutePositive =  60 - (t1GetMinutes * -1)
                    return(t1NewGetHour+':'+t1GetMinutePositive+':'+t1GAetSecondsPositive)
                }
            }  else if (t1GetMinutes===0){
                let t1NewGetMinutes = 0
                return(t1NewGetHour+':'+t1NewGetMinutes+':'+t1GAetSeconds)
            } else {
                if(t1GetMinutes>0){
                    return(t1NewGetHour+':'+t1GetMinutes+':'+t1GAetSeconds)
                } else {
                    let t1GetMinutePositive =  60 - (t1GetMinutes * -1)
                    return(t1NewGetHour+':'+t1GetMinutePositive+':'+t1GAetSeconds)
                }
            }
        } else if(t1GetHour===0){
            if(t1GAetSeconds<0){
            let t1GAetSecondsPositive =  60 - (t1GAetSeconds * -1)
            //let t1GetHourPositive =  24 - (t1GetHour * -1)
            return(t1GetHour+':'+t1GetMinutes+':'+t1GAetSecondsPositive)
            } else {
                return(t1GetHour+':'+t1GetMinutes+':'+t1GAetSeconds)
            }
        } else {
            return('no hiciste bien el trabajo')
        }
    }

      const finalStatus = (e) => {
      statusReady(e)
    }

    return (
    <div>
        <MenuBar/>
        <section className="chef-container">
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
                        <div className='customer-notes'>Number Table:<span>{e.numberTable}</span></div>
                        <div className='customer-notes'>Waiter: <span id="waitername-style-orderChef">{e.waiterName}</span></div>
                      </section>
                      <section className='note-container'>
                        <img src="https://image.flaticon.com/icons/png/512/1497/1497835.png"  className='note-icon' alt='customers-notes'/>
                        <div className='customer-notes'>  Start : <span id="waitername-style-orderChef">{renderTimeStart(e.timeHourStart[0],e.timeHourStart[1],e.timeHourStart[2])}</span></div>
                        <div className='customer-notes'>Finish : <span id="waitername-style-orderChef">{renderTimeEnd(e.timeEnd[0],e.timeEnd[1],e.timeEnd[2])}</span></div>
                      </section>
                      <section className='note-container'>
                        <img src="https://image.flaticon.com/icons/png/512/1584/1584942.png"className='note-icon' alt='customers-notes'/>
                        <div className='customer-notes'>Time : <span id="waitername-style-orderChef">{timeCalculate(e.timeHourStart, e.timeEnd)}</span></div>
                      </section>

                  </section>
                  <section className='bagBurger-container' onClick={() => finalStatus(e.id)}>
                  <img src={hamburguesaBag} className='bagBurger' alt='ready-order'/>
                  <h3>Ready!</h3>
                  </section>
                </section>
            ))}
            </section>
        </section>
    </div>
  );
}

export default HistorialContainer;
