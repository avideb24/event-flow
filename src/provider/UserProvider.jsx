"use client";
import { axiosPublic } from "@/lib/axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
    const router = useRouter();

  const checkAuth = async () => {
    setUserLoading(true)
    try {
      const { data } = await axiosPublic.get("/user/check");
      if (data?.success) {
        // console.log("check user", data);
        setUser(data?.user);
        setUserLoading(false)
      }
    } catch (error) {
      setUserLoading(false)
      // toast.error(error?.response?.data?.message || "User not found!");
    }
  };

  const logout = () => {
    setUser(null), Cookies.remove("token");
    toast.success("Logged out successfully!");
    router.push("/login");
  };
  // initial user load
  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken) {
      //  Send token in Authorization header
      axiosPublic.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${storedToken}`;
    }

    checkAuth();
  }, []);

  const values = { user,logout,userLoading };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
