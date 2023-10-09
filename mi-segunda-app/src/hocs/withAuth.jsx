import config from '../config.json'


const withAuth = (Component) => {

    const Authentication = (props) => {

        // verificar si estoy en una ruta privada y si el componente
        // que llegó como parametro debería tener acceso.
        // En ese caso dejo sergui. Caso contrario, redirect to Login

    }

    // Implementación del hook
    // Podemos hacer uso de states effects y todos los hooks que hagan falta
    // Debemos retornar el componente que recibe o realizar alguna
    // operación.

    return Authentication;

};

export default withAuth;
