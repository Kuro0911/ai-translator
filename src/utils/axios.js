import axios from "axios";

export const serverUrl = `https://48ef-34-123-95-162.ngrok-free.app/`;
export let api = axios.create({
  baseURL: serverUrl,
});

export const TRANSLATE = "translate";

export const translate = (data) => {
  const request = api.post(TRANSLATE, data);
  return request;
};
