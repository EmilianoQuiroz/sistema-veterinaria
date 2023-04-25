export const Paciente = () => {
  return (
    /** Listado de pacientes */
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Docker</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">Santiago Quiroz</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">email@email.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
                <span className="font-normal normal-case">10 de abril 2023</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">sintomas: {''}
                <span className="font-normal normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit illum et molestiae necessitatibus quo sequi, omnis minus commodi nostrum itaque qui odit minima expedita, similique, ipsa dolor nihil! Rerum, debitis.</span>
            </p>
        </div>
  );
}

export default Paciente;
