import React, { useEffect } from "react";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Listing from "./components/Listing.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import AddListing from "./components/Addlisting.jsx";
import ListDetails from "./components/ListDetails.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { useAuthContext } from "./contextapi/authcontext/authContext.js";
import { useTheme } from "./contextapi/themecontext/themeContext.js";
import YourPost from "./components/Yourpost.jsx";
// import { useEffect } from "react";

function Elements() {
  const { theme } = useTheme();
  console.log(theme);

  useEffect(() => {
    let htmlTag = document.querySelector("html");
    htmlTag.classList.remove("light", "dark");
    htmlTag.classList.add(theme);
  }, [theme]);

  const { isLogin, getUserFun } = useAuthContext();

  useEffect(() => {
    if (isLogin) {
      getUserFun();
    }
  }, [isLogin]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route
          path="/addlisting"
          element={isLogin ? <AddListing /> : <Login />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/yourpost" element={<YourPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/listdetails/:listId" element={<ListDetails />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default Elements;
