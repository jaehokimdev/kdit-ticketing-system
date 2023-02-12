import axios from "axios";
import { baseUrl } from "../config/constants";

export const creatNewTicket = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(baseUrl + "ticket/get", formData);
      resolve(result.data);
    } catch (e) {
      reject(e);
    }
  });
};
