import React from 'react'
import Button from '../../ui/Button/Button'
import './modalTransitionMapStyle.css'

export default function ModalTransitionMap() {
  return (<>
  <div className="modalTransitionMap-wrap">
    <h4 className="modalTransitionMap-title">Профиль</h4>
    <p className="modalTransitionMap-text">Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
    <Button buttonAttr={'Перейти на карту'} />
  </div>
  </>
  )
}
