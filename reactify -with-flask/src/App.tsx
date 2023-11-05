import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WeatherProvider } from "./context/weatherContext";
import { UserProvider } from "./context/userContext";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

function App() {
  return (
    <UserProvider>
      <WeatherProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </WeatherProvider>
    </UserProvider>
  );
}

export default App;
