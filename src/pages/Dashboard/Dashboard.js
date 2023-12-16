import React from 'react';
import withRouter from '../../components/Common/withRouter';

const Dashboard = props => {
  console.log(props);
  return (
    <React.Fragment>
        Dashboard page
    </React.Fragment>
  )
}

export default withRouter(Dashboard);