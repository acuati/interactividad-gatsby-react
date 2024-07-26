import React , {useState} from "react"
import Layout from "../components/layout"
import MiMapa from "../components/mimapa"
import CardStylo from "../components/Card-Stylo"
// import DarkMode from "../components/Darkmode"
const IndexPage = () => {
  const [latLng, setLatLng] = useState(null);

  // const [darkMode, setDarkMode] = useState(false)
  // const handleDarkMode =()=>{
  //   setDarkMode(!darkMode)
  // }
    return (
      <>
      {/* <button style={{
        backgroundColor: '#333',
        color: 'whitesmoke',
        position:'fixed',
        right:0
  
      }} 
      onClick={handleDarkMode}>
        {darkMode?'Encender':"Apagar"}
        </button>
      <DarkMode dark={darkMode}> */}
  
  {/* <CardStylo
     titulo="Mi card Genial"
     descripcion="Esto es el contenido del la card"
     url="https://upload.wikimedia.org/wikipedia/commons/4/49/Palacio_Real_de_Aranjuez_%285%29.jpg"
     >
     </CardStylo> */}
  {/* </DarkMode> */}
  <Layout>
  <CardStylo
     titulo="Mi card Genial"
     descripcion="Esto es el contenido del la card"
     url="https://upload.wikimedia.org/wikipedia/commons/4/49/Palacio_Real_de_Aranjuez_%285%29.jpg"
     >
     </CardStylo>
     <CardStylo
     titulo="Mi card Genial"
     descripcion="Esto es el contenido del la card"
     url="https://upload.wikimedia.org/wikipedia/commons/4/49/Palacio_Real_de_Aranjuez_%285%29.jpg"
     destacado= 'destacado'
     >
    </CardStylo>
  <div>

<MiMapa setLatLng={setLatLng} />
<div className="coordinates">
  {latLng ? (
    <p>
      Latitud: {latLng.lat}, Longitud: {latLng.lng}
    </p>
  ) : (
    <p>Haz clic en el mapa para obtener las coordenadas</p>
  )}
</div>
</div>


 

  </Layout>
  </>  

  
  )
}

export default IndexPage
