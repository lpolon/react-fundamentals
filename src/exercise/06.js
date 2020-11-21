// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  const id = 'username'
  // usei ref, mas obvio que não precisa
  const inputRef = useRef()
  const handleSubmit = e => {
    /*
    um event sintético é um objeto do React igual ao objeto de evento do browser.
    acessar o event nativo? e.nativeEvent. Não precisa.

    props que importam de eventos:
    target, elements e eventualmente

    console.log = mostrar o elemento/node do DOM. Se eu quiser só ver os métodos.
    console.dir
    console.dir(event.target[0].value) --> melhor usar o id ao invés de acessar a ordem no array

    */
    e.preventDefault()
    /*
    sobre ref:
    um Element React pode receber um ref. ref aceita um objeto. React vai criar uma propriedade nesse objeto apontando para o DOM node (element)
    */
    if (inputRef.current) {
      // Objetos diferentes carregando o mesmo valor: Um elemento input do DOM
      /*
      inputRef.current
      e.target.elements[id]
      */
      onSubmitUsername(inputRef.current.value)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={id}>Username:</label>
        <input ref={inputRef} id={id} name={id} type="text" />
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
