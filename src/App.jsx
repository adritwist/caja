import { useState } from 'react'
import './App.css'

function App() {
  const [cant1, setCant1] = useState(0)
  const [cant2, setCant2] = useState(0)
  const [cant3, setCant3] = useState(0)
  const [cant4, setCant4] = useState(0)
  const [cant5, setCant5] = useState(0)
  const [cant6, setCant6] = useState(0)
  const [cant7, setCant7] = useState(0)
  const [cant8, setCant8] = useState(0)
  const [cant9, setCant9] = useState(0)
  const [cant10, setCant10] = useState(0)
  const [cant11, setCant11] = useState(0)
  const [cant12, setCant12] = useState(0)
  const [cant13, setCant13] = useState(0)

  const handleChange = (e) => {
    e.preventDefault()
    setCant1(e.target.value)
   
  }
  const handleChange2 = (e) => {
    e.preventDefault()
    setCant2(e.target.value)
  }
  const handleChange3 = (e) => {
    e.preventDefault()
    setCant3(e.target.value)
  }
  const handleChange4 = (e) => {
    e.preventDefault()
    setCant4(e.target.value)
  }
  const handleChange5 = (e) => {
    e.preventDefault()
    setCant5(e.target.value)
  }
  const handleChange6 = (e) => {
    e.preventDefault()
    setCant6(e.target.value)
  }
  const handleChange7 = (e) => {
    e.preventDefault()
    setCant7(e.target.value)
  }
  const handleChange8 = (e) => {
    e.preventDefault()
    setCant8(e.target.value)
  }
  const handleChange9 = (e) => {
    e.preventDefault()
    setCant9(e.target.value)
  }
  const handleChange10 = (e) => {
    e.preventDefault()
    setCant10(e.target.value)
  }
  const handleChange11 = (e) => {
    e.preventDefault()
    setCant11(e.target.value)
  }
  const handleChange12 = (e) => {
    e.preventDefault()
    setCant12(e.target.value)
  }
  const handleChange13 = (e) => {
    e.preventDefault()
    setCant13(e.target.value)
  }

  return (
    <>
      <h1 className='titulo'>Caja peluquería Low Cost Fuengirola</h1>
      <div className='tabla'>
        <h3>Billete/moneda</h3>
        <h3>Cantidad</h3>
        <h3>Total billete/moneda</h3>
      </div>

      <div className='orden'>
        <label htmlFor="500">500 €</label>
        <input type='number' name='500' id='500' value={cant1} onChange={handleChange}/>
        <div className="cantTotal">
        <p>{(cant1 * 500) + ' €'} </p>
        </div>
      </div>
      <div className='orden'>
        <label htmlFor="200">200 €</label>
        <input type='number' name='200' id='200'  value={cant2} onChange={handleChange2}/>
        <div className="cantTotal">
          <p>{(cant2 * 200) + ' €'} </p>
        </div>
      </div>
      <div className='orden'>
        <label htmlFor="100">100 €</label>
        <input type='number' name='100' id='100' value={cant3} onChange={handleChange3} />
        <div className="cantTotal">
          <p>{(cant3 * 100) + ' €'} </p>
        </div>
      </div>

      <div className='orden'>
        <label htmlFor="50">50 €</label>
        <input type='number' name='50' id='50' value={cant4} onChange={handleChange4} />
        <div className="cantTotal">
          <p>{(cant4 * 50) + ' €'} </p>
        </div>
      </div>
      <div className='orden'>
        <label htmlFor="20">20 €</label>
        <input type='number' name='20' id='20' value={cant5} onChange={handleChange5} />
        <div className="cantTotal">
          <p>{(cant5 * 20) + ' €'} </p>
        </div>
      </div>

      <div className='orden'>
        <label htmlFor="10">10 €</label>
        <input type='number' name='10' id='10' value={cant6} onChange={handleChange6}  />
        <div className="cantTotal">
          <p>{(cant6 * 10) + ' €'} </p>
        </div>
      </div>

      <div className='orden'>
        <label htmlFor="5">5 €</label>
        <input type='number' name='5' id='5' value={cant7} onChange={handleChange7}  />
        <div className="cantTotal">
          <p>{(cant7 * 5) + ' €'} </p>
        </div>
      </div>

      <div className='orden'>
        <label htmlFor="2">2 €</label>
        <input type='number' name='2' id='2' value={cant8} onChange={handleChange8}  />
        <div className="cantTotal">
          <p>{(cant8 * 2) + ' €'} </p>
        </div>
      </div>

      <div className='orden'>
        <label htmlFor="1">1 €</label>
        <input type='number' name='1' id='1' value={cant9} onChange={handleChange9}  />
        <div className="cantTotal">
          <p>{(cant9 * 1) + ' €'} </p>
        </div>
      </div>

      <div className='orden'>
        <label htmlFor="0.50">0.50 €</label>
        <input type='number' name='0.50' id='0.50' value={cant10} onChange={handleChange10}  />
        <div className="cantTotal">
          <p>{(cant10 * 0.50).toLocaleString('es-Es', 1) + ' €'} </p>
        </div>
      </div>

      <div className='orden'>
        <label htmlFor="0.20">0.20 €</label>
        <input type='number' name='0.20' id='0.20' value={cant11} onChange={handleChange11} />
        <div className="cantTotal">
          <p>{(cant11 * 0.20).toLocaleString('es-Es', 1) + ' €'} </p>
        </div>
      </div>

      <div className='orden'>
        <label htmlFor="0.10">0.10 €</label>
        <input type='number' name='0.10' id='0.10' value={cant12} onChange={handleChange12}  />
        <div className="cantTotal">
          <p>{(cant12 * 0.10).toLocaleString('es-Es', 1) + ' €'} </p>
        </div>
      </div>

      <div className='orden'>
        <label htmlFor="0.05">0.05 €</label>
        <input type='number' name='0.05' id='0.05' value={cant13} onChange={handleChange13}  />
        <div className="cantTotal">
          <p>{(cant13 * 0.05).toLocaleString('es-Es', 1) + ' €'} </p>
        </div>
      </div>

      <div>
        <h1>Total: <span>{((cant1 * 500) + (cant2 * 200) + (cant3 * 100) + (cant4 * 50) + (cant5 * 20) + (cant6 * 10) + (cant7 * 5) + (cant8 * 2) + (cant9 * 1)
         + (cant10 * 0.50) + (cant11 * 0.20) + (cant12 * 0.10) + (cant13 * 0.05)).toLocaleString('es-Es', 2)} €</span></h1>
      </div>

    </>
  )
}

export default App
