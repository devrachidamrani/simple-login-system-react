import './App.css'

import { useState, useEffect } from 'react'

import { login } from './utils'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccesMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    login(username, password)
      .then(successMessage => {
        setSuccesMessage(successMessage)
        setErrorMessage('')
      })
      .catch(errorMessage => {
        setErrorMessage(errorMessage)
        setSuccesMessage('')
      })
  }

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccesMessage('')
      }, 3000)
    }
  }, [successMessage, errorMessage])

  return (
    <div className='section' id='main-section'>
      <h1 className='title has-text-centered'> Log In </h1>
      <hr />
      <div className='notification'>
        {successMessage && (
          <h1 className='is-size-3 has-text-weight-bold has-text-success has-text-centered my-3'>
            {' '}
            You are logged in !
          </h1>
        )}

        {errorMessage && (
          <h1 className='is-size-3 has-text-weight-bold has-text-danger has-text-centered my-3'>
            {' '}
            Wrong Credentials! Please try again ...
          </h1>
        )}
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <div className='control'>
              <input
                type='text'
                className='input'
                placeholder='Username'
                value={username}
                onChange={e => setUsername(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <input
                type='password'
                className='input'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className='field'>
            <input type='submit' className='button is-link' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
