// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const id = 'username'
  const inputRef = useRef()
  const [error, setError] = useState(null)
  const handleSubmit = e => {
    e.preventDefault()
    if (inputRef.current) {
      onSubmitUsername(inputRef.current.value)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={id}>Username:</label>
        <input
          onChange={({target: {value}}) => {
            if (value !== value.toLowerCase()) {
              setError('Username must be lower case')
            } else {
              setError(null)
            }
          }}
          ref={inputRef}
          id={id}
          name={id}
          type="text"
        />
      </div>
      <p role="alert" style={{color: 'red'}}>
        {error}
      </p>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
