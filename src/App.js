import Events from "./Components/Events.js";
import Header from "./Components/Header.js";
import Hero from "./Components/Hero.js";
import EventForm from "./Components/EventForm.js";
import { Routes, Route } from "react-router";
import About from "./Components/About.js";

function App() {
  const events = [
    { title: "Christmas Charity Drive", date: Date.now(), category: "Religious" },
    { title: "Welcome party", date: Date.now(), category: "Social" },
  ] 

  if (!localStorage.getItem("events")){
    localStorage.setItem("events", JSON.stringify(events));
  }
  return (
    <div className="w-screen h-screen  bg-center bg-cover" style={{ backgroundImage: 'url("/people2.avif")', }}>
      <Header />
      <Routes >
        <Route path="/" element={<Hero />} />
        <Route path="/events" element={<Events />} />
        <Route path="/add-event" element={<EventForm />} />
        <Route path="/about" element={<About/>} />
      </Routes>

    </div>
  );
}

export default App;
