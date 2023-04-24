// Creamos nuestro functional component
function Formulario() {
    

    return(
        <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        
        <p className="text-lg mt-5 text-center">
            Añadir Pacientes y {''}
            <span className="text-red-500 font-bold">Administrarlos</span>
        </p>
        </div>
    );
}

// Importamos nuestro functional component
export default Formulario;