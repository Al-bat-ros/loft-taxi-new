import React, { useState } from 'react';
import { Button } from '../../../ui'
import './FormProfileCardStyle.css'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import HeaderCardLogo from '../../../assets/images/HeaderCardLogo.svg';
import FootherCardLogoR from '../../../assets/images/FootherCardLogoR.svg';
import { paymentSuccess } from '../../../store/action-creators/actions';
import { connect } from 'react-redux';
// var jwt = require('jsonwebtoken');
// const { secret } = require("../../../api/config");

// const generateAcceccToken = (id, roles) => {
//    const payload = {
//     id,
//     roles
//    }
//    return jwt.sign(payload, secret, {expiresIn: "24h"} )
// }

const placeHolder = ( preview, value, simbol) => {
  Array.from(value).forEach(item => preview = preview.replace(simbol, item));
  let result = preview.replace(/(\d?)\D+$/, "$1")

  return result;
}

const regCard = (value) => placeHolder("**** **** **** ****", value.replace(/\D/g, ""), "*")
const regDate = (value) => placeHolder("**/**", value.replace(/\D/g, ""), "*")
const regCVC = (value) => value.replace(/\D/g, "").substr(0, 3);
const regName = (value) => value.replace(/\d/g, "");
 
 function FormProfileCard(props) {

const [name, setName] = useState("");
const [card, setCard] = useState("");
const [date, setDate] = useState("");
const [CVC, setCvc] = useState("");

  const pay =(event)=> {
    event.preventDefault();
    const {cardNumber, cardName, expireDate, cvc } = event.target;
  //  const token = generateAcceccToken()

   
   props.paymentSuccess( cardNumber.value, cardName.value, expireDate.value, cvc.value  )
}
  return (
    <section className="profile">
       <form onSubmit={pay}>
      <div className="profile-substrate"></div>
      <div className="profile-wrap">
        <h4 className="profile-title_text">Профиль</h4>
        <p className="profile-description_text">Введите платежные данные</p>
        <div className="profile-card_wrap">
         
          <Box sx={{ minWidth: 400}} className="profile-card-form_wrap" >
            <FormControl >
              <label className="profile-card-form_name profile-card">
                <TextField sx={{ minWidth: 355}} value={name} onChange={e => setName(regName(e.target.value))} id="standard-basic" label="Имя владельца" variant="standard" className="profile-card_input" name="cardName" required type="text" placeholder="name" />
              </label>
              <label className="profile-card-form_number-card profile-card">
                <TextField sx={{ minWidth: 355}} value={card} onChange={e => setCard(regCard(e.target.value))} id="standard-basic" label="Номер карты" variant="standard" className="profile-card_input" name="cardNumber" required type="card" placeholder="1231243241542345" />
              </label>
              <div className="profile-card-form_data-wrap">
                <label className="profile-card-input_data">
                  <TextField value={date} onChange={e => setDate(regDate(e.target.value))} id="standard-basic" label="MM/YY" variant="standard" className="profile-card_datе-input" name="expireDate" required type="" placeholder="01/23" />
                </label>
                <label className="profile-card-input_data">
                  <TextField value={CVC} onChange={e => setCvc(regCVC(e.target.value))} id="standard-basic" label="CVC" variant="standard" className="profile-card_secret-input" name="cvc" maxLength="3" required type="" placeholder="123" />
                </label>
              </div>
            </FormControl>
          </Box>
          <div className="screen-card">
            <div className="screen-card_wrap">
              <div className="screen-card_header">
                <img width="33" height="33" viewBox="0 0 272 61" fill="none" src={HeaderCardLogo} alt="Logo header card"></img>
                <p className="date-card">{date}</p>
              </div>
              <div>
                <p className="screen-number_card" >{card}</p>
              </div>
              <div className="screen-foother_card">
                 <img width="33" height="33" viewBox="0 0 272 61" fill="none" src={FootherCardLogoR} alt="Logo header card"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-save_wrap">
            <Button buttonAttr={'Сохранить'}/>
        </div>
      </div>
      </form>
    </section>
  )
}
export default connect(
  null,
  { paymentSuccess }
)(FormProfileCard)