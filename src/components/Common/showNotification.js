import React from 'react';
import toast from 'react-hot-toast';


const showNotification = (message, type) => {
   
    switch(type) {
      case "error":
        toast.error(message,{style:{backgroundColor:'#2a3042',color:"#9099b6"}});
        break;
      default:
        toast.success(message,{style:{backgroundColor:'#2a3042',color:"#9099b6"}});
    }
    return <></>
}
export default showNotification;