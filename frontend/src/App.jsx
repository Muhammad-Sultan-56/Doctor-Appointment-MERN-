import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointments from "./pages/Appointments";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/appointment" element={<Appointments />} />
          <Route path="/appointment/:docId" element={<Appointments />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
