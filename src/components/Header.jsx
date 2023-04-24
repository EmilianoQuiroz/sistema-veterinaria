// Creamos nuestro functional component
function Header() {

    return(
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Sistema de Pacientes {''}
                <span className="text-red-500">Veterinaria</span>
            </h1>
        </>
    );
}

// Importamos nuestro functional component
export default Header;