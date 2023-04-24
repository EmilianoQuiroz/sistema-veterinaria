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
        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            <div className="mb-5">
                <label htmlFor="paciente" className="block text-gray-800 uppercase font-bold">
                    Nombre del Paciente
                </label>
                <input
                id="paciente" 
                type="text" 
                placeholder="nombre del paciente" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
            </div>
            <div className="mb-5">
                <label htmlFor="dueño" className="block text-gray-800 uppercase font-bold">
                    Nombre del Dueño
                </label>
                <input
                id="dueño" 
                type="text" 
                placeholder="nombre del dueño" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-800 uppercase font-bold">
                    Email de Contacto
                </label>
                <input
                id="email" 
                type="email" 
                placeholder="email de contacto" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
            </div>
            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-800 uppercase font-bold">
                    Alta del paciente
                </label>
                <input
                id="alta" 
                type="date" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
            </div>
            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-800 uppercase font-bold">
                    Sintomas
                </label>
                <textarea name="" 
                    id="sintomas" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="describe los sintomas"
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