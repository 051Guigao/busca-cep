import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState('');

  async function buscarCep(){
    
  }

  const handleBuscar = () => {
    setResultado(`Você buscou por:  ${busca}`)
  }

  return (

    <main>

      <h1>Informações sobre o seu Código de Endereçamento Postal (CEP)</h1>

      <input type="text" id='cep' placeholder='Digite Seu CEP'
      value={busca} onChange={(e) => setBusca(e.target.value)}
      />
      <button id='btnBuscar' onClick={handleBuscar}>Buscar</button>

      {resultado && <p>{resultado}</p>}

    </main>
  )
}

export default App
