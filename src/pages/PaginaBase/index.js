import NavBar from "components/Padrao/NavBar";
import Rodape from "components/Padrao/Rodape";
import FormularioProvider from "contextos/Formulario";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
  return (
    <main>
        <NavBar />
        <FormularioProvider>
        <Outlet />
        </FormularioProvider>
        <Rodape />

    </main> 
  )
}
