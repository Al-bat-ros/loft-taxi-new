import React from 'react'
// import { FormInput } from '../../compnents/Forms/FormInput'

export default function Button(props) {
    
  return (
    <div>
        <button className="form-input_button" type="submit" >{props.buttonAttr}</button>
    </div>
  )
}
