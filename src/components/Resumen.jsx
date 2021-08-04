import styled from "@emotion/styled";
import { primerMayuscula } from "../helper";
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {

    // extraer de datos
    const {marca, year, plan} = datos;

    // retorna nulo sin no hay datos
    if( marca === '' || year === '' || plan === '' ) return null;


    return ( 
        <ContenedorResumen>
            <h1>Resumen de cotizacion</h1>
        <ul>
            <li>Marca: { primerMayuscula( marca ) }</li>
            <li>Plan: { plan }</li>
            <li>Año del Auto: { year }</li>
        </ul>
        </ContenedorResumen>
    );
}
 
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
export default Resumen;