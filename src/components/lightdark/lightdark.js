import React ,{useState} from 'react'

const LightDark= ({children})=>{
  const [lightDark, setLightDark]= useState('oscuro')
  function cambiarColor() {
    
    lightDark==='oscuro'?setLightDark('claro'):setLightDark('oscuro')
  }

  return(
    <>
    <button onClick={()=>cambiarColor()}>{lightDark}</button>
    <div className={lightDark}>{children}</div>
    </>
  )
}
export default LightDark