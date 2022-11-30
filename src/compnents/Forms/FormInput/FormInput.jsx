import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext'

export default function FormInput({ setRouteReg }){
 const [name, setName] = useState('')
 const [password, setPassword] = useState('')

 const auth = useContext(AuthContext)

const nameHandler = (e) => {
    setName(e.target.value)
}

const passHandler = (e) => {
    setPassword(e.target.value)
}

const send =()=> {
    auth.login(name, password)
}

    return (<>
        <div className="form-input">
            <div className="form-input-wrap">
                <div className="form-input-wrap_wrap">
                    <h4 className="form-input_text">Войти</h4>
                    <form className="form-input_container">
                        <div className="form-input-name_wrap">
                            <div className="form-input-input_name">
                                <input onChange={e => nameHandler(e)} value={name}  id="name" type="name" name="name"    placeholder="Имя пользователя*" />
                            </div>
                        </div>
                        <div className="form-input-pass_wrap">
                            <div className="form-input-input_pass">
                               
                                <input onChange={e => passHandler(e)}  value={password}  id="pass" type="password" name="password"    placeholder='Пароль*' />
                            </div>
                        </div>
                            <button className="form-input_button" onClick={send}>Войти</button>
                    </form>
                    <div>
                    <p className="form-input_newuser">
                        Новый пользователь?
                        <a onClick={() => setRouteReg(true)}>Зарегистрируйтесь</a>
                    </p>
                </div>
                </div>
                
            </div>
        </div>
        </>)
}