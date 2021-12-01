import { Link } from '@reach/router';
import React from 'react';

const SmithSite = () => {
    const style = {
        desc: {
            marginTop: "20px",
            padding: "150px"
        }
    }
    return(
        <div>
            <h1 class="ruby">Smith Site</h1>
            <img src="images/smithsite.jpg" alt="Smith Site" />
            <h2 class="parchment" style={style.desc}>
            This is a website that I built for my father. I'll always remember one of the first things he asked me when he saw my first project: "I want one, but for us."<br/><br/> So I took the idea and ran with it. This project is built in the Java language utilizing the Spring Tool Suite IDE. The application utilizes a embedded google calendar and allows only those registered through myself to receive the link to the actual webpage. Just as a extra measure of security. As well, it gives access to the family email account to send out notifications for upcoming events.<br/><Link class="homebutton" to="/">Main Page</Link>
            </h2>
        </div>
    )
}

export default SmithSite;