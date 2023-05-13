import axios from "axios";

const baseUrl = "https://fakerapi.it/api/v1/";
export const getAddress = async () => {
  try {
    const response = await axios.get(`${baseUrl}addresses?_quantity=1`);
    return response?.data?.data; // using optional chaining
  } catch (error) {
    console.log("getAddress error:", error);
    return undefined;
  }
};
