import Swal from 'sweetalert2';
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    {/** Desestructuracion */}
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    // Funcion de confirmacion en caso de querer eliminar un paciente 
    const handleEliminar = () => {
        /**
         * Usamos la libreria de Sweet Alert 2
         * esta mostrara un cartel en el que se le pregunta al usuario
         * si desea eliminar al paciente, en caso de la respuesta sea 
         * canselar el paciente sigue en la lista, en caso de que la 
         * respuesta sea confirmar el paciente sera eliminar de los 
         * registros
         */
        Swal.fire({
            title: '¿Desea eliminar este paciente?',
            text: "El paciente sera eliminado del sistema",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText:'Cancelar',
            confirmButtonText: 'Confirmar'
          }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id)
              Swal.fire(
                'Paciente eliminado',
                'El paciente se elimino del sistema',
                'success'
              )
            }
          })

    }

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
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
  );
}

export default Paciente;
