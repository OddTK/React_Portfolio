import React from 'react';
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
                <h2></h2>
            </div>
        </section>
    )
}
