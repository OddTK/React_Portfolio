import React from 'react';
import '../style/Style.css';

export default function Contact() {
    return (
            <section className="contactPage">
                <div>
                <h1 className="h1">Contact Me</h1>
            </div>
            <div>
                <h3 className="contact">Based in Denver, Colorado (available for remote work)</h3>
                <br />
                <div className="contact">
                    <a href="mailto:jesusbalandra@outlook.com">JESUSBALANDRA@OUTLOOK.COM</a>
                </div>
            </div>
            <br />
            <div className="contact">
                <a className="contactA" href="https://www.github.com/oddtk">GitHub</a>
                <a className="contactA" href="https://www.linkedin.com/in/jesus-balandra">LinkedIn</a>
                <a className="contactA" href="https://coursera.org/share/448e67a79f8c2a206dad422ff8b07702">Google IT Support</a>
            </div>
            </section>
    )
}
