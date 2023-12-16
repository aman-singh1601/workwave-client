import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import withRouter from './Common/withRouter';

const NonAuthLayout = (props) => {
    
    useEffect(() => {
        document.body.setAttribute("data-layout-mode", "dark");
    }, [])
    return (
        <React.Fragment>{props.children}</React.Fragment>
    )
}

NonAuthLayout.propTypes = {
    children: PropTypes.any,
    location: PropTypes.object
};

export default withRouter(NonAuthLayout);