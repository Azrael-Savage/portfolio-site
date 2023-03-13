import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
import Resume from "./Resume/Resume";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Project />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;
