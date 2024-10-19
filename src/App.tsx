import './App.css'
import ExampleComponent from './components/Example'

function App() {

  return (
    <>
      <h1>Elkin + React + connector backend called axios</h1>
      <div className="card">
      </div>
      <p className="read-the-docs">
        en el componente llamado exampleComponent ves una integracion con algun backend solo cambia la URL y la ruta
      </p>
      <ExampleComponent />
    </>
  )
}

export default App
