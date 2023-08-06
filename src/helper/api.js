import axios from "axios";

axios.defaults.baseURL =
  "https://64cc050a2eafdcdc851995d6.mockapi.io/api/events";

export const addEventToDB = async (event) => {
  const result = await axios.post("/", event);
  return result;
};

export const getAllEvents = async () => {
  const result = await axios("/");
  return result.data;
};

export const deleteEvent = async (id) => {
  await axios.delete(`${id}`);
};

export const updateEvent = async (event, id) => {
  const result = await axios.put(`${id}`, event);
  return result;
};
