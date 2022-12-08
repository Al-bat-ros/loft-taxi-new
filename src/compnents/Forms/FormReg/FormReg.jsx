import React, { useState } from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../../../store/action-creators/actions'
import { Link } from 'react-router-dom';


 function RegInput(props){
    return (
        <div className="form-input">
            <div className="form-input-wrap">
                <div className="form-input-wrap_wrap">
                    <h4 className="form-input_text">Регистрация</h4>
                    <form className="form-input_container">
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
                        <div className="form-input-pass_wrap">
                            <div className="form-input-input_pass">
                                <input id="pass" type="password" name="password" placeholder="Пароль*"/>
                            </div>
                        </div>
                            <button className="form-input_button" type="submit">Зарегистрироватся</button>
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
    state => ({isLoggedIn: state.auth.isLoggedIn}),
    { authenticate }
)(RegInput)