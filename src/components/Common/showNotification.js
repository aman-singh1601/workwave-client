import React from 'react';
import toast from 'react-hot-toast';


const showNotification = (message, type) => {
   
    switch(type) {
      case "error":
        toast.error(message);
        break;
      default:
        toast.success(message);
    }
    return <></>
}
export default showNotification;