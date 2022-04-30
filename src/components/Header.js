import { useState } from "react";

const Header = () => {
    const [toogle, setToogle] = useState(false);

    return (
        <>
            <div className="mobile-container">

                <div className="topnav">
                    <a href="#" className="active"><img className="mobile-logo" src="/images/logo-white.png" /></a>
                    {
                        toogle
                            ? <div id="myLinks">
                                <a href="#about-us">About Us</a>
                                <a href="#roadmap">Roadmap</a>
                                <a href="#how-to-join">How to join</a>
                                <a href="#team">Team</a>
                                <a href="#faq">FAQ</a>
                            </div>
                            : ''
                    }

                    <a href="#" onClick={() => toogle ? setToogle(false) : setToogle(true)} className="icon js-mobile-menu">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>

            </div>
            <div className="header-menu">
                <a href="#" className="logo-wrapper">
                    <img src="/images/logo.png" />
                </a>
                <a href="#about-us" className="menu-link first">About Us</a>
                <a href="#roadmap" className="menu-link">Roadmap</a>
                <a href="#how-to-join" className="menu-link">How to join</a>
                <a href="#team" className="menu-link">Team</a>
                <a href="#faq" className="menu-link">FAQ</a>
            </div>
        </>
    );
};

export default Header;