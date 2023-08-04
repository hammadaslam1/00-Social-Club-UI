import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { CREATE_EVENT, EVENTS, HOME, STORIES, VENUES } from "./Routes";
import CreateEvent from "../screens/CreateEvent";

const Navigation = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path={HOME} />
        <Route path={VENUES} />
        <Route path={EVENTS} />
        <Route path={STORIES} />
        <Route path={CREATE_EVENT} element={<CreateEvent />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
