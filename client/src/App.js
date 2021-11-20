import PrimeReact from "primereact/api";
import { Route, Switch } from "react-router-dom";
import AppContainer from "./containers/AppContainer";

function App() {
  PrimeReact.ripple = true;

  return (
    <>
      <Switch>
        <Route path="/" component={AppContainer} />
      </Switch>
    </>
  );
}

export default App;
