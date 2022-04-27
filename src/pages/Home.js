import React from 'react';
import '../style/Style.css';
import DistortedTK from '../img/distorted_tk.png';

export default function Home(){
    return(
        <section className="home">
            <div>
                <img
                    src={DistortedTK}
                    alt="animated Jesus distorted"
                />
            </div>
            <div>
                <h1>Hey, I'm Jesus Balandra</h1>
                <h3>I'm a {' '}
                {/* make dynamic display diff adjectives in future development */}
                <span>
                    full stack developer
                    </span>
                </h3>
            </div>
        </section>
    )
}
