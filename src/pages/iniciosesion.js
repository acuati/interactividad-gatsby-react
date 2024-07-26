// src/pages/login.js
import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, Button} from 'react-bootstrap';
import UserCard from '../components/usercard';
import { StaticImage } from 'gatsby-plugin-image';

// const users = [
//     { email: 'gerente@gmail.com', image: '../images/Captura de pantalla 2024-07-05 123618.png' },
//     { email: 'empleado@gmail.com', image: '../images/Captura de pantalla 2024-07-05 123814.png' },
//     { email: 'invitado@gmail.com', image: '../images/avatar-invitada-o.png' },
//   ];

const InicioSesion = () => {
    return(
      <Container>
        <h1>Lista de usuarios</h1>
        <Card
          body
          color="primary"
          inverse
        >
        <StaticImage
        src="../images/avatar-invitada-o.png"
        loading="eager"
        width={100}
        height={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        
      />
        <CardTitle tag="h5">
          Special Title Treatment
        </CardTitle>
        <CardText>
           With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>
          Button
        </Button>
        </Card>
        <Card
          body
          color="primary"
          inverse
        >
        <CardTitle tag="h5">
          Special Title Treatment
        </CardTitle>
        <CardText>
           With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>
          Button
        </Button>
        </Card>
        <Card
          body
          color="primary"
          inverse
        >
        <CardTitle tag="h5">
          Special Title Treatment
        </CardTitle>
        <CardText>
           With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>
          Button
        </Button>
        </Card>
        
        


      </Container>
    );
  };
  
  export default InicioSesion;
{/* // const users = [
//     { email: 'gerente@gmail.com',  image: 'https://via.placeholder.com/150' },
//     { email: 'empleado@gmail.com', image: 'https://via.placeholder.com/150' },
//     { email: 'invitado@gmail.com', image: 'https://via.placeholder.com/150' },
//   ];
// const InicioSesion = () => { */}
{/* //   return (
//     <Container>
//       <h1>Lista de usuarios</h1>
//       <Row>

//         {users.map((user, index) => ( */}
{/* //             <Col key={index} md={4}> {/* Agrega md={4} para ajustar el tamaño de las columnas */}
{/* //             <UserCard user={user}  */}
           
            
           
            
            
{/* //             />
//             <StaticImage */}
{/* //         src="../images/avatar-invitada-o.png"
        
//       /> */}
{/* //           </Col>  */}
          

       
      
{/* //       </Row> */}
{/* //     </Container> */}


{/* // export default InicioSesion; */}

