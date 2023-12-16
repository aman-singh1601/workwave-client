import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form } from 'reactstrap';

import withRouter from '../../components/Common/withRouter';

// import images
import profile from "../../assets/images/profile-img.png";
import { Link } from 'react-router-dom';

const Login = (props) => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   // Add your login logic here
  //   console.log('Username:', username);
  //   console.log('Password:', password);
  // };

  return (
    <React.Fragment>
    <div className='account-pages my-5 pt-sm-5'>
      <Container>
        <Row className='justify-content-end'>
          <Col md={8} lg={6} xl={5} className='align-self-end'>
           <Card className='overflow-hidden'>
              <div className='bg-primary bg-soft'>
              <Row>
               <Col xs={7}>
                  <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to WorkWave.</p>
                  </div>
                </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid"/>
                    </Col>
               </Row>
              </div>
              <CardBody className='pt-0'>
                <div className='p-2'>
                 
                </div>
              </CardBody>
           </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </React.Fragment>
  );
};

export default withRouter(Login);