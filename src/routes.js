import Experiencia from "pages/Experiencia";
import Home from "pages/Home";
import Informacao from "pages/Informacao";
import Ingresso from "pages/Ingresso";
import Mapa from "pages/Mapa";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";
import Sucesso from "pages/Sucesso";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaBase />}>
                        <Route index element={<Home />}></Route>
                        <Route path="experiencia" element={<Experiencia />}></Route>
                        <Route path="mapa" element={<Mapa />}></Route>
                        <Route path="informacao" element={<Informacao />}></Route>
                        <Route path="ingresso" element={<Ingresso />}></Route>
                        <Route path="sucesso" element={<Sucesso />}></Route>
                        <Route path="*" element={<NaoEncontrada />}></Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;