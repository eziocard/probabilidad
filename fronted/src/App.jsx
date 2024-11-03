import Sidebar from './components/sidebar.jsx'
import Table from './components/table.jsx'
import './App.css'

function App() {

  return (
    <>
    <article className='dashboard'>
      <div className = "sidebar">
        <Sidebar />
      </div>
      
      <section className = "contenedor">
        <h1 id = 'titulo' >Analisis de Datos</h1>
        <div className = "table">
          <Table />
        </div>
      </section>
    </article>
    </>
  );
}

export default App
