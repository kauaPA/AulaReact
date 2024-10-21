import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setcontador] = useState(0);
  const [calculo, setcalculo] = useState(0)
  useEffect(() => {

    setcalculo ( () => contador * 2)
  
  
  
  }, [contador]);

  

  return (
    <>
      <div>
       <p> Voce clicou {contador} vezes!!</p>
       <button onClick={() => setcontador(contador+1)}>Clique aqui </button>
       <p>Cálculo: {calculo}</p>

      </div>
      
    </>
  )
}

export default App
