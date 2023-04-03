import axios from "axios";
const API_ENDPOINT = import.meta.env.VITE_APP_API_ENDPOINT;
import { toast } from "react-toastify";

export const loginUser = async (callback, values) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `${API_ENDPOINT}/users/authenticate`,
      values,
      config
    );
    localStorage.setItem("user", JSON.stringify(res.data.user));
    callback(res.data);

    return res.data;
  } catch (error) {
    console.error(error);
    if (
      typeof error.response.data === "undefined" ||
      typeof error.response.data.message === "undefined"
    ) {
      console.error(error.message);
    }
    console.error(error.response.data.message);
  }
};

export const getAllUsers = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(`${API_ENDPOINT}/users`, config);

    return res.data;
  } catch (error) {
    console.error(error);
    if (
      typeof error.response.data === "undefined" ||
      typeof error.response.data.message === "undefined"
    ) {
      console.error(error.message);
    }
    console.error(error.response.data.message);
  }
};

export const createUser = async (callback, payload) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `${API_ENDPOINT}/users/register`,
      payload,
      config
    );
    callback(res);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
    if (
      typeof error.response.data === "undefined" ||
      typeof error.response.data.message === "undefined"
    ) {
      console.error(error.message);
      toast.error(error.message);
    }
    console.error(error.response.data.message);
    toast.error(error.response.data.message);
  }
};

export const updateUser = async (callback, payload) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.put(
      `${API_ENDPOINT}/users/${payload.id}`,
      payload,
      config
    );
    callback(res);
    return res;
  } catch (error) {
    console.error(error);
    if (
      typeof error.response.data === "undefined" ||
      typeof error.response.data.message === "undefined"
    ) {
      console.error(error.message);
      toast.error(error.message);
    }
    console.error(error.response.data.message);
    toast.error(error.response.data.message);
  }
};

export const deleteUser = async (callback, payload) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.delete(`${API_ENDPOINT}/users/${payload}`, config);
    callback(res);
    return res;
  } catch (error) {
    console.error(error);
    if (
      typeof error.response.data === "undefined" ||
      typeof error.response.data.message === "undefined"
    ) {
      console.error(error.message);
      toast.error(error.message);
    }
    console.error(error.response.data.message);
    toast.error(error.response.data.message);
  }
};
