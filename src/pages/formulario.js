import React, { useState } from "react";

import Layout from "../components/layout";
const Formulario = ()=>{
   
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [enviado, setEnviado] = useState(false)
    const [novalidado, setNoValidado] = useState(false)
    const handleChangeName = (event) => {
        setNombre(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
         // Aquí vemos al info almacenada para procesar
         console.log('Nombre:', nombre);
         console.log('Correo electrónico:', email);
         setEnviado(true); // Marcar formulario como enviado que aprovechamos para desactivar el button una vez clickeado
 
        if(validar()){
            // procesar el formulario y mandar base de datos, procesar datos con ...
            console.log(nombre,email) 
            // pasamos la variable enviado a true 
            setEnviado(true)

        }
        
        

    }
    function validar(){
        if(nombre||email ===''){
            setNoValidado(true)
            return false
        }
        return true 
        
    }
    return (
        <>
        <Layout>
        <div>
            <p>Formulario de registro</p>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>Escribe tu nombre 
                        <input onChange={ handleChangeName} value={nombre} type='text'/>
                    </label>
                </div>
                <div>
                    <label>Escribe tu correo 
                        <input onchange={ handleChangeEmail } value={email} type='text'/>
                    </label>
                </div>
                <button type='submit' disabled = {enviado}>Registrate</button>
            </form>
            {novalidado  ? `bro, no has incorporado bien los datos`: ``}
            {enviado ? `Gracias por enviar, ${nombre}`: ``}
        </div>
        </Layout>
        </>
    )
}
export default Formulario 