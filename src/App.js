import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Configs from "./pages/Configs";
import Calcs from "./pages/Calcs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      {/* need a larger font-size */}
      <div className="text-lg flex flex-col justify-between h-screen">
        <NavBar />

        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/configs" element={<Configs />} />
            <Route path="/calcs" element={<Calcs />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
