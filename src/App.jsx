import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [busca, setBusca] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function buscarCep() {
    const cep = busca

    setCarregando(true);
    setResultado(null);
    setErro('');

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await resposta.json();

      if (dados.erro) {
        setErro('CEP não encontrado.');
      } else {
        setResultado(dados);
      }
    } catch {
      setErro('Erro ao consultar o CEP. Tente novamente.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main>
      <h1>Informações sobre o seu Código de Endereçamento Postal (CEP)</h1>

      <input
        type="text"
        id="cep"
        placeholder="Digite Seu CEP"
        maxLength={9}
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && buscarCep()}
      />
      <button id="btnBuscar" onClick={buscarCep} disabled={carregando}>
        {carregando ? 'Buscando...' : 'Buscar'}
      </button>


      {resultado && (
        <div>
          <p>CEP: {resultado.cep}</p>
          <p>Rua: {resultado.logradouro}</p>
          <p>Bairro: {resultado.bairro}</p>
          <p>Cidade: {resultado.localidade} - {resultado.uf}</p>
        </div>
      )}
    </main>
  )
}

export default App
