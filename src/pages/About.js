// test
import React from 'react';
import '../style/Style.css';
import TK from '../img/TK.jpg';

export default function About(){
    return(
        <div className="contactPage">
            <div>
                <h1 className="h1">About Me</h1>
            </div>
            <div className="home1">
            <div className="info">
                <p>I am a full stack developer - graduate of the University of Denver's full stack boot camp!</p>
                <b />
                <p>In my free time, I love learning! Astronomy has always held a special place in my heart - what can I say I love looking up at the sky and discovering new facts about space! I am also very much interested in video games! My favorite franchise being the Legend of Zelda. Growing up my parents were very much into play Super Mario. I loved watching them play and the fun we had together so it always stuck with me! And of course coding! It is such a rewarding passion of mine - sometimes difficult but oh so rewarding when you fix a bug and get your code working. Plus, with coding the learning never stops!</p>
            </div>
            <div>
                <img
                className="TK"
                src={TK}
                alt="Jesus Balandra"
                />
            </div>
            </div>
        </div>
    )
}
