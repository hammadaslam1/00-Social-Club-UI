import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { CONTACT_US, CREATE_EVENT, EVENTS, HOME, STORIES, VENUES } from "./Routes";
import CreateEvent from "../screens/CreateEvent";
import Footer from "../components/footer/Footer";
import ContactUs from "../screens/ContactUs";
import Venues from "../screens/Venues";

const Navigation = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path={HOME} />
        <Route path={VENUES} element={<Venues />}/>
        <Route path={EVENTS} />
        <Route path={STORIES} />
        <Route path={CREATE_EVENT} element={<CreateEvent />} />
        <Route path={CONTACT_US} element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navigation;
