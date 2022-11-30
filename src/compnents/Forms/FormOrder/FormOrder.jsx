import React from 'react'

export default function SelectAddress({ setRouteReg }) {
  return (
    <section className='selectMod'>
      <div className="container-select">
        <div className="container-select_wrap">
            <div className="select-address_wrap">
              <div className="select-address-wrap_wrap">
                <div className="select-address_from">
                  <input name="from" id='from' placeholder="Откуда"/>
                </div>
                <div className="select-address_to">
                  <input name="to" id='to' placeholder="Куда"/>
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
              <button className="select-btn-order" type="button" onClick={() => {}}>Заказать</button>
            </div>
        </div>
      </div>
    </section>
  )
}
