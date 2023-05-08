const Paciente = ({ paciente }) => {

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
        </div>
  );
}

export default Paciente;
