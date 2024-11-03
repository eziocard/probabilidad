import './styles/sidebar.css'
function Sidebar(){
  return(
  <>
    <div id = 'sidebar'>
        <h3>Menu</h3>
        <div className='nav'>
          <ul>
           <li><a href="#home">Home</a></li>
           <li><a href="#graficos">Graficos</a></li>
           <li><a id = "tendencias" href="#contact">Analisis</a></li>
           <li><a href="#about">About</a></li>
         </ul>
        </div>
    </div>
  </>
  )
}

export default Sidebar
