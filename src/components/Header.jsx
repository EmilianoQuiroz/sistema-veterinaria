// Importacion de los Hooks al formulario
import {useState, useEffect} from 'react'
// Creamos nuestro functional component
function Header() {
    /**
     * Como buena practica el State debe ser declarado en la parte
     * superior de nuestra funcion antes del return 
     */
    const [nombre,setNombre] = useState('');
    setNombre('Hook')
    console.log(nombre);

    return(
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Sistema de Pacientes {''}
                <span className="text-red-500">Veterinaria</span>
            </h1>
        </>
    );
}

// Importamos nuestro functional component
export default Header;