// Importacion de los Hooks al formulario
import {useState, useEffect} from 'react'
import Error from './Error'

// Creamos nuestro functional component
const Formulario = ({ pacientes, setPacientes, paciente }) => {
    /**
     * Como buena practica el State debe ser declarado en la parte
     * superior de nuestra funcion antes del return 
     * Es importante declarar los states en el orden en el que 
     * se van usando.
     */
    const [nombre,setNombre] = useState(''); 
    const [propietario,setPropietario] = useState(''); 
    const [email,setEmail] = useState(''); 
    const [fecha,setFecha] = useState(''); 
    const [sintomas,setSintomas] = useState('');    

    const [error, setError] = useState(false)

    useEffect(() => {
                
    }, [paciente])

    /** Funcion para generar id unico */
    const generarId = () => {
        
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha
    }
    /** Funcion handleSubmit */
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacion de formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('Hay al menos un campo vacio')
            
            setError(true)
            return;
        } 

        setError(false)

        // Objeto de paciente
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
            id: generarId()
        }

        //console.log(objetoPaciente)
        setPacientes([...pacientes, objetoPaciente]);

        //Reinicio del formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }
    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        
        <p className="text-lg mt-5 text-center mb-10">
            Añadir Pacientes y {''}
            <span className="text-red-500 font-bold">Administrarlos</span>
        </p>

        {/** Formulario para el ingreso de los pacientes */}
        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
            {/** error es = true entonces imprimo el mensaje en formulario */}
            { error && <Error><p>Todos los campos son obligatorios</p></Error>}
            <div className="mb-5">
                <label htmlFor="paciente" className="block text-gray-800 uppercase font-bold">
                    Nombre del Paciente
                </label>
                <input
                id="paciente" 
                type="text" 
                placeholder="nombre del paciente" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-800 uppercase font-bold">
                    Nombre del Propietario
                </label>
                <input
                id="dueño" 
                type="text" 
                placeholder="nombre del dueño" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={propietario}
                onChange={(e)=> setPropietario(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-800 uppercase font-bold">
                    Email de Contacto
                </label>
                <input
                id="email" 
                type="email" 
                placeholder="email de contacto" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-800 uppercase font-bold">
                    Alta del paciente
                </label>
                <input
                id="alta" 
                type="date" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={fecha}
                onChange={(e)=> setFecha(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-800 uppercase font-bold">
                    Sintomas
                </label>
                <textarea name="" 
                    id="sintomas" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="describe los sintomas"
                    value={sintomas}
                    onChange={(e)=> setSintomas(e.target.value)}
                />
            </div>

            {/** Boton de agregar paciente */}
            <input 
                type="submit" 
                className="bg-red-500 w-full p-3 text-white uppercase font-bold hover:bg-red-700 cursor-pointer transition-all"
                value="Agregar paciente"
            />
        </form>
        </div>
    );
}

// Importamos nuestro functional component
export default Formulario;