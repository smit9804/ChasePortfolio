import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";

const styles = {
    links: {
        fontSize: "25px",
        color: "darkslategray",
    },
    header: {
        fontSize: "50px",
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "1000px",
        background: "linear-gradient(#b9f2ff, #61e2ff)",
    },
    contentbox: {
        display: "flex",
        justifyContent: "center",
        width: "1000px",
        margin: "0px auto",
        paddingTop: "100px",
        paddingBottom: "50px"
    },
    images: {
        height: "300px",
        width: "500px",
    },
    footer: {
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(#a8c3bc, #7da59b)",
        padding: "100px",
        paddingTop: "50px"
    },
    image: {
        height: "800px",
        width: "auto",
        
    }
};

const Main = () => {
    return (
    <div>
        <body>
        <div class="imgtransition">
            <img style={styles.image} src="images/chase.jpg" alt="Profile" />
        </div>
        <div class="parchment">
            <div style={styles.contentbox} id="about">
            <h1 style={{fontSize: "50px"}}>
                Well howdy there! My name is Chase Smith. Although I have spent
                most of my life as a blue collar worker through my time in the
                U.S. Coast Guard and civilian life, I finally found my calling in
                2020 into Software Development and Web Development.{" "}
            </h1>
            <hr/>
            </div>
        </div>
        </body>
        <div id="projects"><h1 style={{fontSize: "60px", marginBottom: "50px"}}>Current Projects:</h1>
            <h1 class="johndeere" style={{height: "100px", width: "600px"}}><Link style={{color: "darkslategray"}}to="/BackyardBeer">BackyardBeer</Link></h1>
            <h1 class="johndeere" style={{height: "100px", width: "600px"}}><Link style={{color: "#841617"}}to="/NCAAF">NCAAF Ultimate</Link></h1>
            <h1 class="johndeere" style={{height: "100px", width: "600px"}}><Link style={{color: "black"}}to="/AEG">Alpha Elite Gaming</Link></h1>
            <h1 class="johndeere" style={{height: "100px", width: "600px"}}><Link style={{color: "goldenrod"}} to="/SmithSite">SmithSite</Link></h1>
        </div>
        <footer style={styles.footer}>
        <div id="contact">
            <h1>If you have any questions or would like to talk through how you would like your website built, please send an email to me at <span style={{color: "antiquewhite"}}>chaseasmith95@gmail.com</span> and I will get back to you as soon as possible!</h1>
        </div>
        </footer>
    </div>
    );
};

export default Main;
