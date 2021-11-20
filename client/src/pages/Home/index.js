import React from "react";
import AppNavbar from "../../components/AppNavbar";
import SocialIcon from "../../components/SocialIcon";
import TermsPolicy from "../../components/TermsPolicy";
import { Route, Switch } from "react-router";
import News from "../News";
import Covid from "../Covid";
import Tech from "../Tech";
import Politics from "../Politics";
import Entertainment from "../Entertainment";
import Sports from "../Sports";
import "./Home.css";

const NewHome = () => {
  return (
    <>
      <AppNavbar placeholder="Search Nigerian Web" />
      <Switch>
        <Route path="/politics" component={Politics} />
        <Route path="/news" component={News} />
        <Route path="/entertainment" component={Entertainment} />
        <Route path="/sports" component={Sports} />
        <Route path="/covid" component={Covid} />
        <Route path="/tech" component={Tech} />
        <Route path="/" component={News} />
      </Switch>
      <div className="mobileFooter">
        <SocialIcon />
        <TermsPolicy />
      </div>
    </>
  );
};

export default NewHome;
