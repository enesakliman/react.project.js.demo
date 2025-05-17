import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStateProvider } from "./context/GlobalState";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <GlobalStateProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </GlobalStateProvider>
  );
}

export default App;
