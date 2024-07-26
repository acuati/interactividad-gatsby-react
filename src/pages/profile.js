import React from 'react';
import CerrarSesion from '../components/cerrarsesion';
import Layout from "../components/layout";
import Perfil from '../components/perfil';
import UploadUserImage from '../components/uploaduserimage';
const Profile = () => {
    return (
        <>
        <Layout>
          <CerrarSesion/>
          <Perfil
          email={ localStorage.getItem('tndm_email')}
          id={localStorage.getItem('tndm_id')}
          role ={localStorage.getItem('tndm_role')}
           />
           <UploadUserImage idUser={localStorage.getItem('tndm_id')}></UploadUserImage>
           </Layout>
          </>
    );
};
export default Profile;