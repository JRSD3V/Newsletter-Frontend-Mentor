import React, { useState } from 'react'

const Form = ({ getEmail }) => {

  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getEmail(userInput);
  }

  return (
    <div className='card-item'>
        <div className="card-left">
          <div className="card-left-inner">
            <h1 className='card-title'>Stay updated!</h1>
            <p className='card-desc'>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="card-list">
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
            <form onSubmit={handleSubmit}>
              <label className='card-label' htmlFor='emailInput'>Email address</label>
              <input id='emailInput' type="email" placeholder='email@company.com' required onChange={handleChange} value={userInput}/>
              <button type='submit' id='formBtn'>Subscribe to monthly newsletter</button>
            </form>
          </div>
        </div>
        <div className="card-right">
            <picture>
              <source srcSet="public/images/illustration-sign-up-mobile.svg" media="(max-width: 865px)" />
              <img src="public/images/illustration-sign-up-desktop.svg" alt="Sign-up illustration" className="card-img" />
            </picture> 
        </div>
      </div>
  )
}

export default Form