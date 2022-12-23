import React from 'react'
import { useSelector } from 'react-redux';
import { Select, Button } from '../../../ui'

export default function SelectAddress(props) {

  const store = useSelector(store => store);
  let selectArr = [];
  if(store.list.addresses) {
    selectArr= store.list.addresses.addresses;
  }
   
    

  return (
    <section className='selectMod'>
      <div className="container-select">
        <div className="container-select_wrap">
            <div className="select-address_wrap">
              <div className="select-address-wrap_wrap">
                <div className="select-address_from">
                  {/* <input name="from" id='from' placeholder="Откуда"/> */}
                 
                  <Select listArr={selectArr} />
                </div>
                <div className="select-address_to">
                  {/* <input name="to" id='to' placeholder="Куда"/> */}
            
                  <Select listArr={selectArr} />
                </div>
              </div>
            </div>
        </div>
        <div className="container-select_wrap">
            <div className="select-class_wrap">
              <div className="select-card-class_wrap" >
                <div className="select-card-class-wrap_wrap">
                    <div className="card-class_wrap">Стандарт</div>
                    <div className="card-class_wrap">Бизнес</div>
                    <div className="card-class_wrap">Премиум</div>
                </div>
              </div>
              <Button buttonAttr={'Заказать'} />
            </div>
        </div>
      </div>
    </section>
  )
}
