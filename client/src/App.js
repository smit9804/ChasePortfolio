import './App.css';
import { Button } from '@material-ui/core';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router'
import SmithSite from './views/SmithSite';
import Main from './views/Main';
import BackyardBeer from './views/BackyardBeer';
import NCAAF from './views/NCAAF';
import AEG from './views/AEG';

const styles = {
  links: {
      fontSize: "25px",
      color: "darkslategray",
  },
  header: {
      fontSize: "50px",
      display: "flex",
      position: "fixed",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "-webkit-fill-available",
      background: "linear-gradient(#3e96aa, #1b4a55)",
  },
  contentbox: {
      display: "flex",
      justifyContent: "center",
      width: "600px",
      margin: "0px auto",
  },
  images: {
      height: "300px",
      width: "500px",
  },
  footer: {
      display: "flex",
      justifyContent: "center",
      height: "150px",
      background: "linear-gradient(#a8c3bc, #7da59b)",
  },
};


function App() {
  return (
    <div className="App">
      <header style={styles.header}>
            <h1><Link to="/" style={{color: "antiquewhite"}}>Chase Smith</Link></h1>
            <div class="links">
            <Button style={styles.links} href="#about">
                About
            </Button>
            <div style={{ margin: "15px" }} />
            <Button style={styles.links} href="#projects">
                Projects
            </Button>
            <div style={{ margin: "15px" }} />
            <Button style={styles.links} href="#contact">Contact</Button>
            </div>
        </header>
      <Router>
        <Main path="/" />
        <AEG path="/AEG" />
        <NCAAF path="/NCAAF" />
        <SmithSite path="/SmithSite" />
        <BackyardBeer path="/BackyardBeer" />
      </Router>
    </div>
  );
}

export default App;