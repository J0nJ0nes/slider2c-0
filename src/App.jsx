import { useState } from 'react'
import './App.css'
import Xuxa1 from './assets/saxxx.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">

          {/* Produto 1 */}
          <div className="card">
            <img src={Xuxa1} alt="" />
            <h2 className="titulo-card">Saxophone</h2>
            <p className="desc">Saxophone Alto Durado Eagle</p>
            <p className="preco">R$ 5.000</p>
            <div className="avaliacao"> ★ ★ ★ ★ ★ </div>
          </div>

        </section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
