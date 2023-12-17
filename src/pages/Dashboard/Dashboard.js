import React from 'react';
import withRouter from '../../components/Common/withRouter';
import { useSelector } from 'react-redux';
const Dashboard = props => {
  console.log(props);
  const user = useSelector((state)=>state.login.userData);
  console.log(user);
  return (
    <React.Fragment>
        Dashboard page
    </React.Fragment>
  )
}

export default withRouter(Dashboard);