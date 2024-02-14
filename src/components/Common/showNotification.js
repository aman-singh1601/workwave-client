import React from 'react';
import toastr from 'toastr';
import "toastr/build/toastr.min.css";


const showNotification = (message, type) => {
  toastr.options = {
    newestOnTop: true,
    positionClass: "toast-top-right",
    preventDuplicates: true,
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
    showDuration: "200",
    hideDuration: "1000"
   }
   
    switch(type) {
      case "error":
        toastr.error(message);
        break;
      case "warning":
        toastr.warning(message);
        break;
      default:
        toastr.success(message);

    }
    return <></>
}
export default showNotification;