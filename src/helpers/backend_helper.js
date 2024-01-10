import axios from "axios";
import { API_URL, del, get, post, put } from "./api_helper";
import * as url from "./url_helper";

// export const postFakeRegister = (data) => {
//   return axios
//     .post(API_URL+url.POST_SIGNUP, data)
//     .then((response) => {
//       if (response.status >= 200 || response.status <= 299) {
//         console.log("first:",response.data);
//         return response.data;
//       }
//       throw response.data;
//     })
//     .catch((err) => {
//       let message;
//       if (err.response && err.response.status) {
//         switch (err.response.status) {
//           case 404:
//             message = "Sorry! the page you are looking for could not be found";
//             break;
//           case 500:
//             message =
//               "Sorry! something went wrong, please contact our support team";
//             break;
//           case 401:
//             message = "Invalid credentials";
//             break;
//           default:
//             message = err[1];
//             break;
//         }
//       }
//       throw message;
//     });
// };


export const postFakeRegister = (data) => {
  return axios
    .post(API_URL+url.POST_SIGNUP, data)
    .then((response) => {
      if (response.status >= 200 || response.status <= 299) {
        // console.log("first:",response.data);
        return response.data;
      }
      throw response.data;
    })
    .catch((err) => {
      let message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message =
              "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};
