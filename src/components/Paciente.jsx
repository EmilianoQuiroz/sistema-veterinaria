const Paciente = ({ paciente, setPaciente }) => {

    {/** Desestructuracion */}
    const {nombre, propietario, email, fecha, sintomas} = paciente

  return (
    /** Listado de pacientes */
        <div className="mx-3 my-5 bg-white shadow-md px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between">
                <button
                    type="button"
                    className="py-2 px-9 bg-blue-500 hover:bg-blue-700 text-white font-bold uppercase rounded-md"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-9 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-md"
                >
                    Eliminar
                </button>
            </div>
        </div>
  );
}

export default Paciente;
