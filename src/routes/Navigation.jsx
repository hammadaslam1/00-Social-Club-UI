import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import {
  ABOUT_US,
  CONTACT_US,
  CREATE_EVENT,
  EDIT_PROFILE,
  EVENTS,
  HOME,
  MY_EVENTS,
  STORIES,
  STORY_DETAIL,
  VENUES,
} from "./Routes";
import CreateEvent from "../screens/CreateEvent";
import Footer from "../components/footer/Footer";
import ContactUs from "../screens/ContactUs";
import Venues from "../screens/Venues";
import Events from "../screens/Events";
import Stories from "../screens/Stories";
import StoryDetail from "../screens/StoryDetail";
import EditProfile from "../screens/EditProfile";
import MyEvents from "../screens/MyEvents";
import AboutUs from "../screens/AboutUs";
import Home from "../screens/Home";

const Navigation = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path={HOME} element={<Home />} />
        <Route path={VENUES} element={<Venues />} />
        <Route path={EVENTS} element={<Events />} />
        <Route path={STORIES} element={<Stories />} />
        <Route path={STORY_DETAIL} element={<StoryDetail />} />
        <Route path={CREATE_EVENT} element={<CreateEvent />} />
        <Route path={CONTACT_US} element={<ContactUs />} />
        <Route path={ABOUT_US} element={<AboutUs />} />
        <Route path={EDIT_PROFILE} element={<EditProfile />} />
        <Route path={MY_EVENTS} element={<MyEvents />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navigation;
