import React, { useState } from "react";
import authContext from "./authContext";
import { baseUrls } from "../../baseUrls";
import { successEmitter, errorEmitter } from "../../ToastEmitter";
function AuthState({ children }) {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false
  );

  const signupFun = async (myObj, navigate) => {
    try {
      const response = await fetch(`${baseUrls}/api/v3.2/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myObj),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        // setAuthData({
        //   fname: "",
        //   lname: "",
        //   email: "",
        //   password: "",
        //   cpassword: "",
        // });
        // setTandc(false);
        navigate("/login");
        successEmitter(data.message);
      } else {
        errorEmitter(data.message);
      }
    } catch (error) {
      console.log(error);
      errorEmitter("something went wrong");
    }
  };

  const loginFun = async (user, navigate, setLogin) => {
    try {
      const response = await fetch(`${baseUrls}/api/v3.2/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setLogin({
          email: "",
          password: "",
        });
        localStorage.setItem("token", data.token);
        setIsLogin(true);
        setUser(data.user);
        navigate("/");
        successEmitter(data.message);
      } else {
        errorEmitter(data.message);
      }
    } catch (error) {
      errorEmitter("something went wrong");
    }
  };

  const getUserFun = async() => {
    // fetch(`${baseUrls}/api/v3.2/auth/getuser`)
     try {
      const response = await fetch(`${baseUrls}/api/v3.2/auth/getuser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth_token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setUser(data.user);
      }
    }catch(error){
        console.log(error)
    }
  };

  return (
    <authContext.Provider value={{ user, isLogin, signupFun, loginFun, getUserFun }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthState;
