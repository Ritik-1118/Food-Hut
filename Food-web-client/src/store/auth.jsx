import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setuser] = useState("");

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const [food, setFood] = useState([]);
  const [isloading, setLoading] = useState(true);
  const autheader = `Bearer ${token}`;
  // Store Token in local storage
  const storetokeinLs = (servertoken) => {
    setToken(servertoken);
    localStorage.setItem("token", servertoken);
  };
  // check wheteher token present or not
  let islogin = !!token;
  //   Logout funxtion4

  const Logoutuser = () => {
    setToken("");
    localStorage.removeItem("token");
  };
  // JWt verification
  const userAuthentication = async () => {
    try {
      const response = await axiosInstance.get("/auth/user", {
        headers: {
          Authorization: autheader,
        },
      });
      setUserData(response.data);
      setuser(response.data.userdata);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const getFood = async () => {
    try {
      const response = await axiosInstance.get("/food", {
        withCredentials: true,
      });
      setFood(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFood();
    userAuthentication();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        food,
        islogin,
        userData,
        user,
        isloading,
        autheader,
        storetokeinLs,
        Logoutuser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

Authprovider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
