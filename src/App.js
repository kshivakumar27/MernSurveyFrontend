import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Survey from "./components/survey";
import Register from "./components/register";
import Login from "./components/login";
import Nav from "./components/nav";
import { UserProvider } from "./components/usercontext";

function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <div className="container">
          <UserProvider>
            <Switch>
              <Route path="/login" component={Login} exact />
              <Route path="/register" component={Register} exact />
              <Route path="/home" component={Home} exact />
              <Route path="/survey/:id" component={Survey} exact />
            </Switch>
          </UserProvider>
        </div>
      </Router>
    </>
  );
}

export default App;
