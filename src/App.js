import "./App.css";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import NavbarHome from "./components/NavbarHome";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarHome />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
