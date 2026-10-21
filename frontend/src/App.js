import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";
import Privacy from "./pages/Privacy";
import Offer from "./pages/Offer";
import Booking from "./pages/Booking";
import Ramadan from "./pages/Ramadan";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/start" element={<Quiz />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/ramadan" element={<Ramadan />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
