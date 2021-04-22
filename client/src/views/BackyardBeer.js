import { Link } from '@reach/router';
import React from 'react';

const BackyardBeer = () => {

    const style = {
        desc: {
            marginTop: "20px",
            padding: "150px"
        }
    }

    return(
        <div class="kubotaback">
            <h1 class="yellow">Backyard Beer</h1>
            <h1 class="orange">Backyard Beer</h1>
            <img src="images/backyard.jpg" alt="Backyard Beer" />
            <h2 style={style.desc} class="wheat">This is my true pride and joy. Built alongside Carl Thomason, we constructed a Django based Python web application that is similar to Gas Buddy.....but for beer. It truly is the app we all wish we had in college. It allows the user to login to the app and find all the local and non-local beer prices found by other members. <br/> <br/>Stay tuned for a launch date!<br/><Link class="homebutton" to="/">Main Page</Link></h2>
        </div>
    )
}

export default BackyardBeer;