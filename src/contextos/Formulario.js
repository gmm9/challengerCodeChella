import { createContext, useState } from "react";

export const FormularioContext = createContext();


export default function FormularioProvider({children}) {
    const [formulario, setFormulario] = useState([]);

    const atualizaFormulario = (name, value) => {
        setFormulario({...formulario, [name]: value})
    }

    return (
        <FormularioContext.Provider value={{formulario, atualizaFormulario}}>
            {children}
        </FormularioContext.Provider>
    )
}