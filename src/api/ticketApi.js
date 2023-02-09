import axios from "axios";

const rootUrl = "http://localhost:8000/";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(rootUrl + "ticket/get");
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};

export const getCategories = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(rootUrl + "ticket/categories");
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};
