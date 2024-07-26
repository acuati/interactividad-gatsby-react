import React from 'react'
import { Link } from 'gatsby'
import CerrarSesion from './cerrarsesion'
const Perfil = ({id ,email,role})=>{
    if(role=='guest'){
        return(
            <>
            <p>Eres:{email} | {role} invitado</p>
            <ul>
                <li>Cambiar modo oscuro/claro</li>
                <li>Cambiar su contraseña</li>
                <li>Contactar con soporte </li>
                <li>Cambiar su avatar</li>
                <li><CerrarSesion/></li>
            </ul>
            </>
        )
    }
    if(role=='employee'){
            return(
                <>
                 <p>Eres:{email} | {role} empleado</p>
                 <ul>
                    <li>Cambiar modo oscuro/claro</li>
                    <li>Cambiar su contraseña</li>
                    <li>Contactar con soporte </li>
                    <li>Cambiar su avatar</li>
                    <li><CerrarSesion/></li>
                <li><Link to="/index">Crear Qr</Link></li>
                    <li>Administra sus propios codigos qr</li>
                </ul>
                </>
            )
        }
    if(role=='admin'){
        return(
            <>
            <p>Eres:{email} | {role} administrador</p>
            <ul>
            <li>Cambiar modo oscuro/claro</li>
                <li>Cambiar su contraseña</li>
                <li>Contactar con soporte </li>
                <li>Cambiar su avatar</li>
                <li><CerrarSesion/></li>
                <li><Link to="/index">Crear Qr</Link></li>
                <li>Administra sus propios codigos qr</li>
                <li>Administrar usuarios</li >
                <li>Administrar los codigos qr</li>
            </ul>
            </>
        )
    }
    }
export default Perfil
















// import React from 'react'

// import { Link } from 'gatsby'
// const Perfil = ({id ,email,role})=>{
//     if(role=='admin'){
//         return(
//             <>
//             <p>Eres:{email} | {role} </p>
//             <ul>
//                 <li>Cambiar modo oscuro/claro</li>
//                 <li>Ver listas de todos los qr</li>
//                 <li>Cambiar su contraseña</li>
//                 <li>Administra codigos qr</li>
//                 <li>Ver listas de usuarios</li>
//                 <li>Modificar permisos</li>
//                 <li>Cambiar su avatar</li>
//                 <li>Crear Qr</li>
                
               
//             </ul>
//             </>
//         )
//     }
//     if(role=='employee'){
//         return(
//             <>
//                <p>Eres:{email} | {role} emplead@ </p>
//                <ul>
//                 <li>Administra sus propios codigos qr</li>
//                 <li>Cambiar modo oscuro/claro</li>
//                 <li>Contactar con soporte</li>
//                 <li>Cambiar su contraseña</li>
//                 <li>Cambiar su avatar</li>
//                 <li>Crear Qr</li>
                
                
//             </ul>
//             </>
//         )
//     }
//     if(role=='guest'){
//         return(
//             <>
//              <p>Eres:{email} | {role} invitad@ </p>
//              <ul>
//                 <li>Cambiar modo oscuro/claro</li>
//                 <li>Contactar con soporte</li>
//                 <li>Cambiar su contraseña</li>
//                 <li>Cambiar su avatar</li>
                
//             </ul>
//             </>
//         )
//     }
//     return (
//         <>
//          <div>
//             <h1>Perfil de usuario</h1>
//         {/* <p>{id}</p> */}
//         <p>{email}</p>
//         {role=='admin'&& <p>Eres admin</p>}
//         {role=='employee'&& <p>Eres emplead@</p>}
//         {role=='guest'&& <p>Eres invitad@</p>}


       


//         </div>
//         </>
//     )
// }
// export default Perfil