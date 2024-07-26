import React, {useState} from "react"
const FormRegistro = () => {
    const [nombre,setNombre]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleRegister= ()=>{
        console.log(nombre,email,password)
    }
    // const handleNombre = (e)=>{setNombre(e.target.value)}
    return (
        <>
        <div>
            <label htmlFor="nombre">nombre</label>
            <input
            type="text"
            placeholder='escribe tu nombre'
            id='nombre'
            value={nombre}
            onChange={(e)=>{setNombre(e.target.value)}}

            />
        </div>
        <div>
            <label htmlFor="email">email</label>
            <input
            type="text"
            placeholder='escribe un email para administrar cuenta'
            id='email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}

            />
        </div>
        <div>
            <label htmlFor="password">contraseña</label>
            <input
            type="text"
            placeholder='escribe una contraseña segura'
            id='password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}

            />
        </div>
        <button onClick={handleRegister}>Registrar</button>
        </>
    )

}
export default FormRegistro