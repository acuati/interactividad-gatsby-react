import React, { useState} from 'react';
import Layout from '../components/layout';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const apiUrl = process.env.GATSBY_API_URL;

    const handleLogin = async () => {
        try {
            const peticion = await fetch(`${apiUrl}/login-user.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const respuesta = await peticion.json();
            console.log(respuesta)
            if (respuesta.message === 'Login exitoso') {
                // Aquí podrías guardar el usuario en el estado global o en localStorage
                setMessage('Login exitoso para el usuario con id:'+ respuesta.user.id);
                localStorage.setItem('tndm_id', respuesta.user.id)
                localStorage.setItem('tndm_email', respuesta.user.email)
                // localStorage.setItem('tndm_img_user', respuesta.user.image_url)
                localStorage.setItem('tndm_role', respuesta.user.role)
                window.location.href='/micuenta'
            } else {
                setMessage('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error en el login', error);
            setMessage('Error en el login');
        }
    };
    return (
        <Layout>
        <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
           
        </div>
        </Layout>
    );
};
export default Login;