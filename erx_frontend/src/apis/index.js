import axios from "axios";

const BASE_API = process.env.REACT_APP_API_ENDPOINT;

const config = {
  headers: { "Content-Type": "application/json" },
  params: {},
};

export const getAppointmentAPI = async () =>{
 return await axios.get(`${BASE_API}/appointment/get`, config);
}


export const createAppointmentAPI = async (appointment) => {
  return await axios.post(`${BASE_API}/appointment/create`, appointment, config);
};

export const editAppointmentAPI = async (payload) => {
  return await axios.put(
    `${BASE_API}/appointment/${payload._id}`,
    payload,
    config
  );
};
