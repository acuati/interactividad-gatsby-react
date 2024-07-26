// src/pages/micuenta.js
import React from "react"
import { Link } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Layout from "../components/layout"
import LogoutButton from "../components/logoutbutton/logoutbutton"
const MiCuenta = () => {
 const { user } = useAuth0();
  return (
  <>
  <Layout>
  
    <div>
      <LogoutButton/>
    </div>
    <Link to="/">Home</Link>
   
    <p>Foto: {user.picture}</p>
    <p>Email: {user.email}</p>
    <p>Nombre: {user.name}</p>
    

  </Layout>
 </>
 );
};

/* 👇 Wrap the component in the withAuthenticationRequired handler 👇 */
export default withAuthenticationRequired(MiCuenta);

