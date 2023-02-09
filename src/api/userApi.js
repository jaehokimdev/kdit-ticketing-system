import axios from "axios";

const rootUrl = "http://localhost:8000/";

export const getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(rootUrl + "user/get");
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};
