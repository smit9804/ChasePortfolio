import { Link } from '@reach/router';
import React from 'react';

const AEG = () => {

    const style = {
        desc: {
            marginTop: "20px",
            padding: "150px",
            
        }
    }

    return (
        <div class="black-radial">
            <h1 class="black-radial">AEG Site</h1>
            
            <img src="images/AEGSite.jpg" alt="AEG Webpage" />
            <h2 style={style.desc} class="xtrablue"> This is another Django based Python web application. I built this alongside Ted Cady for a gaming company called "Alpha Elite Gaming". This 8 page application ran into a few funding snags so it was never launched. However, I like to keep this design for future webpages as it has alot of interesting design and styles. The images rotate into a description, and each tab pulls up a different view depending on which gaming icon is clicked.<br/><Link class="homebutton" to="/">Main Page</Link></h2>
            
        </div>
    )
}

export default AEG;