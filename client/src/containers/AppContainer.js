import Search from "../pages/Search";
import Footer from "../layout/Footer";
import { Route, Switch } from "react-router-dom";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms/Terms";
import AddAccount from "../pages/AddAccount";
import Home from "../pages/Home";

function AppContainer() {
  return (
    <>
      <section>
        <Switch>
          <Route path="/about" component={AddAccount} />
          <Route path="/addaccount" component={AddAccount} />
          <Route path="/terms" component={Terms} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/search" component={Search} />
          <Route path="/" component={Home} />
        </Switch>
      </section>
    </>
  );
}

export default AppContainer;
