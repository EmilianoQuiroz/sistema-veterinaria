// Creamos nuestro functional component
function Formulario() {
    

    return(
        <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        
        <p className="text-lg mt-5 text-center mb-10">
            Añadir Pacientes y {''}
            <span className="text-red-500 font-bold">Administrarlos</span>
        </p>

        {/** Formulario para el ingreso de los pacientes */}
        <form className="bg-white shadow-md rounded-lg py-10 px-5">
            <div>
                <label htmlFor="paciente" className="block text-red-500 uppercase font-bold">
                    Nombre del Paciente
                </label>
                <input
                id="paciente" 
                type="text" 
                placeholder="nombre del paciente" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
            </div>
        </form>
        </div>
    );
}

// Importamos nuestro functional component
export default Formulario;