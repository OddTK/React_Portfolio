import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
    return (
        <MDBFooter className="text-center" color="white" bgColor="dark">
            <MDBContainer className="p-4">
                <section className="mb-4">

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://coursera.org/share/448e67a79f8c2a206dad422ff8b07702"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MDBIcon fab icon="google" />
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.linkedin.com/in/jesus-balandra"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MDBIcon fab icon="linkedin-in" />
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.github.com/oddtk"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MDBIcon fab icon="github" />
                    </a>
                </section>

            </MDBContainer>

            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                <p class="footer-text text-center">
                    Made with {""}
                    <img alt="❤️"
                    draggable="false"
                    src="https://twemoji.maxcdn.com/2/72x72/2764.png"
                    style={{
                        height: '1em',
                        width: '1em',
                        margin: '0px 0.05em 0px 0.1em',
                        verticalAlign: '-0.1em'
                        }}
                        />{" "}
                    by Jesus Balandra
                </p>
            </div>
        </MDBFooter>
    );
}
