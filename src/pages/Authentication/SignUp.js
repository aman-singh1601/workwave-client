import React from 'react';
import { Container, Row, Col, Card, CardBody, Form, Input, FormFeedback, Label } from 'reactstrap';
import withRouter from '../../components/Common/withRouter';

// import images
import profile from "../../assets/images/profile-img.png";

//Formik validation
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../store/auth/signup/actions';

const SignIn = (props) => {

  const dispatch = useDispatch();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please Enter Your First Name"),
      lastName: Yup.string().required("Please Enter Your Last Name"),
      username: Yup.string().required("Please Enter Your User Name"),
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
      confirmPassword: Yup.string().required("Please Confirm Your Password"),
    }),
    validate: (values) => {
      const errors = {};
      var mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if ( !mailformat.test(values.email) ) {
        errors.email = "Not a valid email!"
      }

      return errors;
    },
    onSubmit: function (values) {
      if(values.confirmPassword !== values.password) {
        
        //toast to be added
       console.log("password do not match");
       return;
      }
      // console.log(values);
      delete values.confirmPassword;

      dispatch(signupUser(values, props.router.navigate));
    }
  })
  const {user} = useSelector((state) => state.signup)

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
                 <Form
                  className="from-horizontal"
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                 >
                  <Row>
                  <Col>
                    <div className='mb-3 pt-3'>
                    <Input
                     name = 'firstName'
                     className='form-control'
                     placeholder='Enter FirstName'
                     type='text'
                     onChange={validation.handleChange}
                     onBlur={validation.handleBlur}
                     values = { validation.firstName || ''}
                     invalid = {
                      validation.touched.firstName && validation.errors.firstName ? true : false
                     }
                    />
                    {validation.touched.firstName && validation.errors.firstName ? <FormFeedback type="invalid">{validation.errors.firstName}</FormFeedback> : null }
                  </div>
                  </Col>
                  <Col>
                  <div className='mb-3 pt-3'>
                    <Input
                     name='lastName'
                     className='form-control'
                     placeholder='Enter lastName'
                     type='text'
                     onChange={validation.handleChange}
                     onBlur={validation.handleBlur}
                     values = { validation.lastName || ''}
                     invalid = {
                      validation.touched.lastName && validation.errors.lastName? true : false
                     }
                    />
                    {validation.touched.lastName && validation.errors.lastName ?
                     <FormFeedback type="invalid">{validation.errors.lastName}</FormFeedback> :
                      null }
                  </div>
                  </Col>
                    </Row>
                    
                  <div className='mb-3'>
                    <Label className='form-label'>User Name</Label>
                    <Input
                     name='username'
                     className='form-control'
                     placeholder='Enter userName'
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
                    <Label className='form-label'>Email</Label>
                    <Input
                     name='email'
                     className='form-control'
                     placeholder='Enter email'
                     type='text'
                     onChange={validation.handleChange}
                     onBlur={validation.handleBlur}
                     values = { validation.email || ''}
                     invalid = {
                      validation.touched.email && validation.errors.email ? true : false
                     }
                    />
                    {validation.touched.email && validation.errors.email ? 
                      <FormFeedback type="invalid">{validation.errors.email}</FormFeedback> 
                      : null }
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
                  <div className='mb-3'>
                    <Label className='form-label'>Confirm Password</Label>
                    <Input
                     name='confirmPassword'
                     className='form-control'
                     placeholder='Confirm Password'
                     type='password'
                     onChange={validation.handleChange}
                     onBlur={validation.handleBlur}
                     values = { validation.confirmPassword || ''}
                     invalid = {
                      validation.touched.confirmPassword && validation.errors.confirmPassword? true : false
                     }
                    />
                    {validation.touched.confirmPassword && validation.errors.confirmPassword?
                     <FormFeedback type="invalid">{validation.errors.confirmPassword}</FormFeedback> :
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

export default withRouter(SignIn);

