import React, { useState, useRef, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../../store/action-creators/actions';
import { Link } from 'react-router-dom';
import  Button  from '../../../ui/Button/Button';

 function FormInput(props){
const authent =(event)=> {
    
    event.preventDefault();
    const { email, password } = event.target;
   
    props.authenticate(email.value, password.value)
}

    return (<>
    
        <div className="form-input">    
            <div className="form-input-wrap">
                <div className="form-input-wrap_wrap">
                    <h4 className="form-input_text">Войти</h4>
                    <form className="form-input_container" onSubmit={authent}>
                        <div className="form-input-name_wrap">
                            <div className="form-input-input_name">
                                <input  id="email" type="email" name="email" placeholder="Имя пользователя*" />
                            </div>
                        </div>
                        <div className="form-input-pass_wrap">
                            <div className="form-input-input_pass">
                                <input  id="password" type="password" name="password" placeholder='Пароль*' />
                            </div>
                        </div>
                        <Button buttonAttr={'Войти'} />
                    </form>
                    <div>
                    <p className="form-input_newuser">
                        Новый пользователь?
                        <Link to="/FormReg">Зарегистрируйтесь</Link>
                    </p>
                </div>
                </div>
                
            </div>
        </div>
        </>)
}
export default connect( 
    state => ({isLoggedIn: state.auth.isLoggedIn}),
    { authenticate }
)(FormInput)