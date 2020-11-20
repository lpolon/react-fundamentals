// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const id = 'username'

  const [username, setUsername] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(username)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={id}>Username:</label>
        <input
          value={username}
          onChange={({target: {value}}) => {
            setUsername(value.toLowerCase())
          }}
          id={id}
          name={id}
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
