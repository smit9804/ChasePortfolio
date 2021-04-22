import { Link } from '@reach/router';
import React from 'react';

const NCAAF = () => {

    const style = {
        desc: {
            marginTop: "20px",
            padding: "150px",
            color: "antiquewhite"
        }
    }

    return (
        <div class="carbon">
            <h1 class="ou">NCAAF_Ultimate</h1>
            <img src="images/ncaaapi.jpg" alt="NCAAF Ultimate" />
            <h2 style={style.desc}>This is where I just went crazy with the colors. By the end of this project, my legendary "chasestyle.css" - <a href="https://smit9804.github.io">Github . IO</a> - was finally complete with a lot of gradients. The point of the app is personal college football API that includes all the info and team colors with hex values. As well, the user has the option to choose between 2 teams utilizing a random matchup generator.<br/><Link class="homebutton" to="/">Main Page</Link></h2>
        </div>
    )
}

export default NCAAF;