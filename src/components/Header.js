const Header = ({
    join
}) => {
    return (
        <>
            <div className="mobile-container">

                <div className="topnav">
                    <a href="#home" className="active"><img className="mobile-logo" src="/images/logo-white.png" /></a>
                    <div id="myLinks">
                        <a href="#news">About Us</a>
                        <a href="#contact">Roadmap</a>
                        <a href="#about">How to join</a>
                        <a href="#about">Team</a>
                        <a href="#about">FAQ</a>
                    </div>
                    <a href="#" className="icon js-mobile-menu">
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