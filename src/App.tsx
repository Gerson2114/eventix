import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header.component";
import Footer from "./components/footer.component";
import "./App.css";
import Home from "./pages/home.page";
import Event from "./pages/event.page";
import EventDetailPage from "./pages/EventDetail.page";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header />
        {/* Contenido principal de la página */}
        <main
          className="container mt-4 flex-grow-1"
          style={{ marginBottom: "50px" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Event />} />
            <Route path="/event/:id" element={<EventDetailPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
