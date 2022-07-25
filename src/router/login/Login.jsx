import React, {useState} from 'react'
import "./Login.css"
import { firebase } from "../../server/firebase"
import { useDispatch } from "react-redux"
import {useHistory} from "react-router-dom"

function Login() {
    const [phone, setPhone] = useState("+998")
    const dispatch = useDispatch()
    const history = useHistory()

    const signPhoneNumber = (e)=>{
        e.preventDefault()
        const recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha")
        firebase
            .auth()
            .signInWithPhoneNumber( phone, recaptcha )
            .then(e => {
              let code = prompt("enter code")
              e.confirm(code).then(user => {
                dispatch( {type:"SIGN_USER", payload: user} )
                history.push("/chat")
              })
            })
    }

  return (
    <div className='login'>
        <div className='login_con'>
            <h1 className='login_title'>Login</h1>
            <form onSubmit={signPhoneNumber} className='login_form' action="">
                <input value={phone} onChange={e => setPhone(e.target.value)} type="text" />
                <button type='submit'>Sign in</button>
            </form>
            <div id="recaptcha"></div>
        </div>
    </div>
  )
}

export default Login