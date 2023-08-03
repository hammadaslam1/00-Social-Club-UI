import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { EVENTS, STORIES, VENUES } from "./routes/Routes";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import './App.css'

function App() {
  return (
    <Provider store={Store}>
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
    </Provider>
  );
}

export default App;
