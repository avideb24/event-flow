import { axiosPrivate } from "./axiosInstance";


export const getAllEvents = async () => {
  try {
    const res = await axiosPrivate.get("/event");
    return { data: res?.data?.data, error: null };
  } 
  catch(error) {
    return {data: null, error: error?.response?.data?.message || "Something Went Wrong" }
  }
};


export const addNewEvent = async (payload) => {
  try {
    const res = await axiosPrivate.post("/event/create", payload);
    return { data: res?.data?.data, error: null };
  } 
  catch(error) {
    return {data: null, error: error?.response?.data?.message || "Something Went Wrong" }
  }
};


export const joinEvent = async (eventId) => {
  try {
    const res = await axiosPrivate.post(`/event/${eventId}/join`);
    return { data: res?.data?.data, error: null };
  } 
  catch(error) {
    return {data: null, error: error?.response?.data?.message || "Something Went Wrong" }
  }
};
export const myEvents = async (userId) => {
  try {
    const res = await axiosPrivate.get(`/event/my-event/${userId}`);
    return { data: res?.data?.data, error: null };
  } 
  catch(error) {
    return {data: null, error: error?.response?.data?.message || "Something Went Wrong" }
  }
};



export const updateEvent = async (id, payload) => {
  try {
    const res = await axiosPrivate.put(`/event/update/${id}`, payload);
    return { data: res?.data?.data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error?.response?.data?.message || "Update failed",
    };
  }
};

export const deletedEvent = async (id) => {
  try {
    const res = await axiosPrivate.delete(`/event/delete/${id}`);
    return { data: res?.data?.data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error?.response?.data?.message || "Update failed",
    };
  }
};
