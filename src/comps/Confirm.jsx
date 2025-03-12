import React from 'react'
import '../css/Confirm.css'

const Confirm = ({ userEmail, dismiss }) => {

    function handleDismiss() {
        dismiss();
    }

  return (
    <div className="confirmWrapper">
        <div className='confirm'>
            <img src="../images/icon-success.svg" alt="" />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <b>{userEmail}</b>. Please open it and click the button inside to confirm your subscription.</p>
            <button id='formBtn' onClick={handleDismiss}>Dismiss message</button>
        </div>
    </div>
  )
}

export default Confirm