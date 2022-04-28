import React from "react";
import {Link} from "react-router-dom";
import {Link as Scroll} from "react-scroll";

const Home_Header = () => {
    return(
        <>
            <section className="container home_header">
                <div className="home_header_container">
                    <nav className="navigation">
                        <Scroll to={"section2"} className="nav--link"
                                spy={true}
                                smooth={true}
                            // offset={-70}
                                duration={500}>ABOUT US</Scroll>
                        <Scroll to={"section4"} className="nav--link"
                                spy={true}
                                smooth={true}
                            // offset={-70}
                                duration={500}>SESSIONS</Scroll>
                        <Scroll to={"section5"} className="nav--link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>PRODUCTS</Scroll>
                        <Scroll to={"section6"} className="nav--link"
                                spy={true}
                                smooth={true}
                            // offset={-70}
                                duration={500}>CONTACT</Scroll>
                    </nav>
                    <div className="logo">
                    </div>

                </div>

            </section>
        </>
    )
}

export default Home_Header