import Axios from "axios";

const rootUrl = "http://127.0.0.1:8000/";

const userApi = () => {
  return new Promise((resolve, reject) => {
    try {
      Axios.get(rootUrl + "user/get").then((response) => {
        resolve(response.data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default userApi;
