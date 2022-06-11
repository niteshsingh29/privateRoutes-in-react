import "./styles.css";
// import { useAuth } from "./hooks";
import Navbar from "./components/Navbar";
import { Fof, Home, Login, Signup, Profile } from "./pages";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// Task-1
// Create a Private Route for My Profile Page.
const PrivateRoute = ({ children, ...props }) => {
  return (
    <Route
      {...props}
      render={() => {
        if (3 > 2) {
          //I am assuming if user is logged in
          return children;
        }
        return <Redirect to="/signup" />;
      }}
    />
  );
};

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <Fof />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
