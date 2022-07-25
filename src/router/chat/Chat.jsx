import React from 'react'
import "./Chat.css"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

function Chat() {
  const dispatch = useDispatch()
  const history = useHistory()

  const SignOut = ()=>{
    dispatch({type: "SIGN_OUT_USER"})
    history.push("/login")
  }
  return (
    <div>
      <h1>Chat</h1>
      <button onClick={SignOut}>Sign out</button>

    </div>
  )
}

export default Chat