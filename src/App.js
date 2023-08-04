import Navbar from "./components/navbar/Navbar";
import { EVENTS, STORIES, VENUES } from "./routes/Routes";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import './App.css'
import Navigation from "./routes/Navigation";

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Navigation />
    </div>
    </Provider>
  );
}

export default App;
