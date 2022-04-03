import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./protectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import MasterSpesification from "./pages/MasterSpesification";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/overview" component={Dashboard} />
        <ProtectedRoute exact path="/plan" component={MasterSpesification} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
