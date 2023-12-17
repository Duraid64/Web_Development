import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./utils.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Services from "./pages/Services/Services";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/services'
            element={<Services />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
