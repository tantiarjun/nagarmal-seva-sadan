import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  News,
  Reviews,
  Footer,
  Excellence,
  Team,
  Gallery,
} from "./components/Landing Page/LandingPage";
import AboutPage from "./components/About Page/AboutPage";
import Doctors from "./components/Doctors Page/Doctors/Doctors.jsx";
import Article from './components/News Page/Article/Article.jsx';
import NewsPage from './components/News Page/News Page/NewsPage';
import DocInfo from "./components/Doctors Page/Doctor Info/DoctorInfo";
import CentreOfExcellence from "./components/COE Page/COE/CentreOfExcellence.jsx";
import CoeDescription from "./components/COE Page/COE Description/CoeDescription.jsx";
import NewsGallery from "./components/News Gallery/Gallery/Gallery.jsx";
import ContactUs from "./components/Contact Us/ContactUs.jsx";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import CommingSoon from "./components/Comming Soon/CommingSoon.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <About />
            <Excellence />
            <Team />
            <News />
            <Gallery />
            <Reviews />
          </Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/news" exact component={NewsPage} />
          <Route path="/news/:id" component={Article} />
          <Route path="/doctors" exact component={Doctors} />
          <Route path="/doctors/:id" component={DocInfo} />
          <Route path="/coe" exact component={CentreOfExcellence} />
          <Route path="/coedescription/:id" component={CoeDescription} />
          <Route path="/newsgallery" component={NewsGallery} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/commingsoon" component={CommingSoon} />
        </Switch>
        <Footer />
        <FloatingButton />
      </div>
    </Router>
  );
};
export default App;
