import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">
      {/* Produto 1 */}
          <div className="card">
            <img src="" alt="" />
            <h2 className="titulo-card"</h2>
            <p className="desc">saxophone Dourado alto </p>
            <p className="preco">R$ 3.900,00</p>
            <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
          </div>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
