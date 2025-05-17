import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStateProvider } from "./context/GlobalState";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import Header from "./components/Header";


function App() {
  return (
    <GlobalStateProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </GlobalStateProvider>
  );
}

export default App;
