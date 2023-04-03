import axios from "axios";

const BASE_API = process.env.REACT_APP_API_ENDPOINT;
//const token = JSON.parse(localStorage.getItem("token"));
//const BASE_API = "http://localhost:5000"
const config = {
  headers: { "Content-Type": "application/json" },
  params: {},
};

export const getPatientsAPI = async () =>
  await axios.get(`${BASE_API}/patient/get`, config);

export const createPatientsAPI = async (patient) => {
  return await axios.post(`${BASE_API}/patient/create`, patient, config);
};

export const editPatientsAPI = async (payload) => {
  return await axios.put(
    `${BASE_API}/patient/${payload.id}`,
    payload,
    config
  );
};
