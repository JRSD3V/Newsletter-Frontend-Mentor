import React, { useState } from 'react'
import Form from './comps/Form'
import Confirm from './comps/Confirm'
import Footer from './comps/Footer'
import './css/App.css'
import './css/Footer.css'
import './css/Confirm.css'

const App = () => {

  const [userEmail, setUserEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  function getEmail(email) {
    setUserEmail(email);
    setConfirmed(true);
  }

  function dismiss() {
    setConfirmed(false);
  }

  return (
    <>
    <main className='wrapper'>
      {confirmed ? <Confirm userEmail={userEmail} dismiss={dismiss}/> : <Form getEmail={getEmail}/>}
    </main>
    <Footer />
    </>
  )
}

export default App