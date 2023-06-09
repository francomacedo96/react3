import './App.css';
import logoReact from "./imagenes/logo.png";
import Boton from "./componentes/Botones.jsx"
import Pantalla from "./componentes/Pantalla.jsx"
import BotonClear from "./componentes/BotonClear.jsx"

function App() {
  return (
    <div className="App">

      <div className='logo-contenedor'>
        <img className='react-logo' src={logoReact} alt="react-logo" />
        <div className='contenedor-calculadora'>
          <Pantalla></Pantalla>
          <div className='fila'>
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>+</Boton>
          </div>
          <div className='fila'>
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <Boton>-</Boton>
          </div>
          <div className='fila'>
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>*</Boton>
          </div>
          <div className='fila'>
            <Boton>=</Boton>
            <Boton>0</Boton>
            <Boton>.</Boton>
            <Boton>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear>Clear</BotonClear>
          </div>

        </div>


      </div> 
      
    </div>
  );
}

export default App;
