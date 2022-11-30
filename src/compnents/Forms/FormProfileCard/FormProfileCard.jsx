import React from 'react'

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile-substrate"></div>
      <div className="profile-wrap">
        <h4 className="profile-title_text">Профиль</h4>
        <p className="profile-description_text">Введите платежные данные</p>
        <div className="profile-card_wrap">
          <div className="profile-card-form_wrap">
            <form>
              <div className="profile-card-form_name">
                <input className="profile-card_input" name="cardName" required type="text" placeholder="name" />
              </div>
              <div className="profile-card-form_number-card">
                <input className="profile-card_input" name="cardNumber" required type="text" placeholder="1231243241542345" />
              </div>
              <div className="profile-card-form_data-wrap">
                <div className="profile-card-input_data">
                  <input className="profile-card_datе-input" name="expireDate" required type="text" placeholder="01/23" />
                </div>
                <div className="profile-card-input_data">
                  <input className="profile-card_secret-input" name="cvc" maxLength="3" required type="text" placeholder="123" />
                </div>
              </div>
            </form>
          </div>
          <div className="scren-card">
            <div className="scren-card_wrap">
              <p>Здесь будут данные банковской карты</p>
            </div>
          </div>
          <div className="btn-save_wrap">
            <button type="button" className="btn-save">Сохранить</button>
          </div>
        </div>
      </div>
    </section>
  )
}
