import './App.css';
import React from 'react';
import Header from './SiteParts/Header';
import Navigation from './SiteParts/Navigation';
import Footer from './SiteParts/Footer';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
