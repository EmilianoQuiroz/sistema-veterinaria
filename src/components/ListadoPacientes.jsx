// Importamos el listado de pacientes
import Paciente from "./Paciente";

// Creamos nuestro functional component
function ListadoPacientes() {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
                <span className="text-red-500 font-bold">Pacientes y Turnos</span>
            </p>
            
            {/** Mostramos el listado de pacientes en pantalla */}
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />

        </div>
    );
}

// Importamos nuestro functional component
export default ListadoPacientes;