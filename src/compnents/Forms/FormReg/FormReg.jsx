import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registration } from '../../../store/action-creators/actions'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '../../../ui'

 function RegInput(props){
    const store = useSelector(store => store);
    const registration = (event) => {
        event.preventDefault();
        
        const { email, password, name, surname } = event.target;
        props.registration(email.value,  password.value, name.value, surname.value)
    }
    return (
        <div className="form-input">
            <div className="form-input-wrap">
                <div className="form-input-wrap_wrap">
                    <h4 className="form-input_text">Регистрация</h4>
                    <form className="form-input_container" onSubmit={registration}>
                        <div className="form-input-email_wrap">
                            <div className="form-input-input_email">
                                <input id="email" type="email" name="email" placeholder="Email*" />
                            </div>
                        </div>
                        <div className="form-input-name_wrap">
                            <div className="form-input-input_name">
                                <input id="name" type="name" name="name" placeholder="Имя пользователя*" />
                            </div>
                        </div>
                        <div className="form-input-surname_wrap">
                            <div className="form-input-input_surname">
                                <input id="surname" type="surname" name="surname" placeholder="Фамилия*" />
                            </div>
                        </div>
                        <div className="form-input-pass_wrap">
                            <div className="form-input-input_pass">
                                <input id="pass" type="password" name="password" placeholder="Пароль*"/>
                            </div>
                        </div>
                             <Button buttonAttr={'Зарегистрироватся'} />
                    </form>
                    <div>
                    <p className="form-input_newuser">
                    <Link to="/FormInput">Войти</Link>
                    </p>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default connect( 
    null,
    { registration }
)(RegInput)