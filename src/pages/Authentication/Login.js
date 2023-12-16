import React from 'react';
import withRouter from '../../components/Common/withRouter';
import { Container} from 'reactstrap'

const Login = props => {
  console.log(props);
  return (
    <React.Fragment>
      <div className='page-content'>
        <Container fluid>
           login page
        </Container>
      </div>
       
    </React.Fragment>
  )
}

export default withRouter(Login);