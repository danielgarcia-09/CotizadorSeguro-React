export function obtenerDiferenciaYear( year ) {
    return new Date().getFullYear() - year;
} 


export function calcularMarca( marca ) {
    let incremento;
//! Americano 15
        //! Asiatico 5%
        //! Europeo 30%
        
    switch( marca ) {

        case 'europeo': {
            incremento = 1.30;
            break;
        }

        case 'americano': {
            incremento = 1.15;
            break;
        }

        case 'asiatico': {
            incremento = 1.05;
            break;
        }
        default:
            break;
    }

    return incremento;
}

// calcula el tipo de seguro
export const obtenerPlan = ( plan ) => ( plan === 'basico' ) ? 1.20 : 1.50;

// Muestra la primera letra mayuscula
export const primerMayuscula = ( texto ) => texto.charAt(0).toUpperCase() + texto.slice(1);