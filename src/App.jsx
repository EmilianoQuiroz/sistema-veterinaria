import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  return (
    <>
      {/** Llamamos a los componentes para mostrarlos en pantalla */}
      <Header />
      <Formulario />
      <ListadoPacientes />
    </>
  )
}

export default App
