import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/LoginScreen";
import MapScreen from "./pages/MapScreen";
import Registration from "./pages/Registration/Registration";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main className="main_container">
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/location/:id" element={<MapScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
