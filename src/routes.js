import NavBar from "components/NavBar";
import Rodape from "components/Rodape";
import Experiencia from "pages/Experiencia";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return(
        <BrowserRouter>
                <NavBar />
                <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/experiencia" element={<Experiencia />}></Route>
                </Routes>
        <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;