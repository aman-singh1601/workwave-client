import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import withRouter from './Common/withRouter';

import { ToastProvider } from 'react-toast-notifications'

const NonAuthLayout = (props) => {
    
    useEffect(() => {
        document.body.setAttribute("data-layout-mode", "dark");
    }, [])

    // const CustomToast = ({appearance, children}) => {
    //     <div style={{background: appearance === 'error' ? 'red' : 'green'}}>W
    //     {children}   
    //     </div>
    // }
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

NonAuthLayout.propTypes = {
    children: PropTypes.any,
    location: PropTypes.object
};

export default withRouter(NonAuthLayout);