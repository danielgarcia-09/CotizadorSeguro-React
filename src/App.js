import styled from "@emotion/styled";
import { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Resultado from "./components/Resultado";
import Resumen from "./components/Resumen";
import Spinner from "./components/Spinner";
import { CSSTransition } from "react-transition-group";
import "./index.css";


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: '',
    }
  })

  const [ cargando, guardarCargando ] = useState(false);

  // Extraer datos
  const { datos, cotizacion } = resumen;

  return (
    <Contenedor>
        <Header 
          titulo="Cotizador de Seguros"
        />

        <ContenedorFormulario>
          <Formulario 
            guardarResumen={ guardarResumen }
            guardarCargando={ guardarCargando }
          />

          { cargando ? <Spinner /> : null }

          <Fragment>

            <CSSTransition
              in={!cargando}
              timeout={3000}
              classNames="resumen resultado"
              unmountOnExit
            >
              <Resumen 
                datos={ datos }
              />
            </CSSTransition>

            <CSSTransition
              in={!cargando}
              timeout={3000}
              classNames="resultado"
              unmountOnExit
            >
              <Resultado 
                cotizacion={ cotizacion }
              />
            </CSSTransition>
              
          </Fragment>
          
        
           
        </ContenedorFormulario>
    </Contenedor>
     
  );
}

export default App;
