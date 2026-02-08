import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Offer from "./pages/Offer";
import Booking from "./pages/Booking";
import Ramadan from "./pages/Ramadan";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/ramadan" element={<Ramadan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
