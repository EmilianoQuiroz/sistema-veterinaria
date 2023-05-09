// Importamos el listado de pacientes
import Paciente from "./Paciente";

// Creamos nuestro functional component
const ListadoPacientes = ({ pacientes }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {/** Si no hay pacientes mostrar el siguiente mensaje*/}
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
                        <span className="text-red-500 font-bold">Pacientes y Turnos</span>
                    </p>
        
                    {/** Mapeo de pacientes */}
                    { pacientes.map( paciente => 
                            /** El return esta implicito */
                            /** Mostramos el listado de pacientes en pantalla */
                            <Paciente 
                                key = {paciente.id}
                                paciente = {paciente}
                            />
                        )}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Agrega a tus pacientes {''}
                        <span className="text-red-500 font-bold">y apareceran aqui</span>
                    </p>
                </>
            )}
        </div>
    );
}

// Importamos nuestro functional component
export default ListadoPacientes;