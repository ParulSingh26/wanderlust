import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Elements from "./Elements.jsx";
// import App from "./App.jsx";
// import Home from "./components/Home.jsx";
// import About from './components/About.jsx';
// import Contact from './components/Contact.jsx';
// import Listing from './components/Listing.jsx';
// import Login from './components/Login.jsx';
// import Signup from './components/Signup.jsx';
// import AddListing from './components/AddListing.jsx';
// import ListDetails from './components/ListDetails.jsx';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

import { ToastContainer } from 'react-toastify'
import AuthState from "./contextapi/authcontext/Authstate.jsx";
import ListState from "./contextapi/listcontext/ListState.jsx";
import ThemeState from "./contextapi/themecontext/ThemeState.jsx";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<Home />} />
//       <Route path="/listing" element={<Listing />} />
//       <Route path="/addlisting" element={<AddListing />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup/>} />
//       <Route path="/listdetails" element={<ListDetails/>} />
//     </Route>
//   )
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeState>
    <AuthState>
      <ListState>
      {/* <RouterProvider router={router} /> */}
      <Elements/>
      </ListState>
    </AuthState>
    </ThemeState>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StrictMode>
);
