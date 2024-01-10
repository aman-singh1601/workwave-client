import React from 'react';
import { Container, Row, Col, Card, CardBody, Form, Input, FormFeedback, Label } from 'reactstrap';
import withRouter from '../../components/Common/withRouter';

// import images
import profile from "../../assets/images/profile-img.png";

//Formik validation
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/auth/signup/actions';

const Login = (props) => {

  const dispatch = useDispatch();
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your User Name"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: function (values) {
      console.log(values);
      dispatch(loginUser(values, props.router.navigate));
    }
  })

  const {user} = useSelector((state) => state.signup);

  return (
    <React.Fragment>
    <div className='account-pages my-5 pt-sm-5'>
      <Container className='vh-100'>
        <Row className='justify-content-center'>
          <Col md={8} lg={6} xl={5} >
           <Card className='overflow-hidden'>
              <div className='bg-primary bg-soft'>
              <Row>
               <Col xs={7}>
                  <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p> Login to continue to WorkWave.</p>
                  </div>
                </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid"/>
                    </Col>
               </Row>
              </div>
              <CardBody className='pt-0'>
                <div className='p-2'>
                 <Form
                  className="from-horizontal"
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                 >
                  <div className='mb-3'>
                    <Label className='form-label'>User Name</Label>
                    <Input
                     name='username'
                     className='form-control'
                     placeholder='Enter User Name'
                     type='text'
                     onChange={validation.handleChange}
                     onBlur={validation.handleBlur}
                     values = { validation.username || ''}
                     invalid = {
                      validation.touched.username && validation.errors.username? true : false
                     }
                    />
                    {validation.touched.username && validation.errors.username ?
                     <FormFeedback type="invalid">{validation.errors.username}</FormFeedback> :
                      null }
                  </div>
                  <div className='mb-3'>
                    <Label className='form-label'>Password</Label>
                    <Input
                     name='password'
                     className='form-control'
                     placeholder='Enter password'
                     type='password'
                     onChange={validation.handleChange}
                     onBlur={validation.handleBlur}
                     values = { validation.password || ''}
                     invalid = {
                      validation.touched.password && validation.errors.password? true : false
                     }
                    />
                    {validation.touched.password && validation.errors.password ?
                     <FormFeedback type="invalid">{validation.errors.password}</FormFeedback> :
                      null }
                  </div>
                  <button
                    className = 'btn btn-primary btn-block mt-3'
                    type = 'submit'
                  >
                    Sign Up
                  </button>
                 </Form>
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

