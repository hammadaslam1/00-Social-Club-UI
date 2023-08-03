import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/navbar/Navbar";
import { EVENTS, STORIES, VENUES } from "./assets/components/routes/Routes";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path={VENUES} />
          <Route path={EVENTS} />
          <Route path={STORIES} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
