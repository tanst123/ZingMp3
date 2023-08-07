import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path: string, options: any) => {
  const res = await httpRequest.get(path, options);
  return res.data;
};
export default httpRequest;
