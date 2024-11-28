import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage/HomePage";
import MyBookings from "./components/MyBookings/MyBookings";
import FindDoctors from "./components/FindDoctors/FindDoctors";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* Default route */}
          <Route path="find-doctors" element={<FindDoctors />} />{" "}
          {/* About page */}
          <Route path="my-bookings" element={<MyBookings />} />{" "}
          {/* About page */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
