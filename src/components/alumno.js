import React, {useState, useEffect} from "react";
const Alumno = ()=>{
    const [economia, setEconomia]=useState(-500)
    const [felicidad, setFelicidad]=useState(true)

    const darDinero= ()=>{
        setEconomia(economia+100)
    }
    const hacerFeliz= ()=>{
        !felicidad ?setFelicidad(true):setFelicidad(false)
    }

    return (
        <>
        
        <button onClick={darDinero}>hazme rico</button>
       <p>El alumno tiene {economia}</p> 
        
       <button onClick={hacerFeliz}>hazme feliz</button>
       <p>{felicidad&& <p>El alumno es mas feliz que una perdiz</p>}</p>
        </>
    )
}
export default Alumno