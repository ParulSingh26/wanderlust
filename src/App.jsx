import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { useTheme } from "../src/contextapi/themecontext";
// import { useEffect } from "react";


function App() {
  // const {theme} = useTheme();
  // console.log(theme);

  // useEffect(() => {
  //   let htmlTag = document.querySelector("html");
  //   htmlTag.classList.remove("light", "dark");
  //   htmlTag.classList.add(theme);
  // }, [theme]);

  return (
    <>
      <Navbar />
      <div className="mt-[88px]">
        <Outlet />
      </div>
      <Footer />
      
    </>
  );
}

export default App;
