import { useMoralis } from "react-moralis";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";

import CountdownTimer from "./CountdownTimer";
import { isMobileDevice } from "../Utils/functions";


const Home = () => {
    const [countdown, setCountdown] = useState(false);
    const navigate = useNavigate();
    const { authenticate } = useMoralis();

    const dappUrl = "192.168.1.24.sslip.io:3000";
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;

    const didEnd = () => {
        setCountdown(true);
    }
    const message = `Hi there from the Weird Neckz! Sign this message to prove you own this wallet and we'll log you in. This won't cost you any Ether.`



    const join = () => {
        authenticate({ signingMessage: message, throwOnError: true })
            .then(data => {
                navigate('/mint');
            }).catch(err => {
                alert('Rejected')
            });
    };


    return (
        <>
            <div className="App">
                <section id="start" className="section-1">
                    <Header />
                    <div className="title-wrapper">
                        <p>Welcome to the<br /> <b>Weird Neckz</b> playground!</p>
                    </div>
                    <div className={countdown ? "buttons-wrapper" : 'countdown-timer'}>
                        {countdown
                            ? isMobileDevice()
                                ? !window.ethereum
                                    ? <a target={'_blank'} href={metamaskAppDeepLink} className="btn btn-join btn-login btn-green">Log in with Metamask</a>
                                    : <Link to={"/"} onClick={() => join()} className="btn btn-join btn-green">Join Us</Link>
                                : !window.ethereum
                                    ? <a target={'_blank'} href='https://metamask.io/' className="btn btn-join btn-login btn-green">Install Metamask</a>
                                    : <Link to={"/"} onClick={() => join()} className="btn btn-join btn-green">Join Us</Link>
                            : <> <CountdownTimer countdownTimestampMs={1656185925000} didEnd={didEnd} />
                            </>
                        }
                    </div>
                </section>

                <section className="section-2">
                    <div className="heading">
                        WeirdNeckz consists of 10,000 Weird collectibles and their native Playground environment.
                    </div>
                    <div className="description">
                        The initial collection will not only include cool art, but also work as a membership allowing access to future projects incl. game development, 3d art, experiences and more…
                    </div>
                </section>

                <section id="about-us" className="section-3">
                    <div className="header">
                        <h2 className="title">What are WeirdNeckz?</h2>
                        <p className="subtitle">These are our most popular NFT’s</p>
                    </div>
                    <div className={"slick"}>
                        <Swiper
                            loop={true}
                            slidesPerView={3}
                            navigation={true}
                            spaceBetween={25}
                            watchOverflow={true}
                            observer={true}
                            observeParents={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Navigation, A11y]}
                        >
                            <SwiperSlide>
                                <img className="swiper-slide" src="../images/left.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="swiper-slide" src="../images/top.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="swiper-slide" src="../images/right.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="swiper-slide" src="../images/right.png" />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </section>
                <section id='roadmap' className="section-4">
                    <div className="title-wrapper">
                        <h2>Roadmap</h2>
                        <p className="slide-up">The launch takes place in 3 rounds
                            With each round the price goes higher
                            Round 1 (pre-sale) – Available 3333 whitelist spots – 0,05 eth
                            Round 2 ( early public sale) – Available 3333 NFTs – 0.075 eth
                            Round 3 ( late public sale ) – Available 3333 NFTs – 0.1 eth
                        </p>
                    </div>
                    <div className="content-wrapper">
                        <h2>25%</h2>
                        <p className="slide-up">At the quarter mark special raffles will be held available to all WeirdNeckz holders. Multiple big prizes will be given away. A 25 NFT giveaway will also be available to non-holders</p>
                    </div>
                    <div className="content-wrapper">
                        <h2>50%</h2>
                        <p className="slide-up">Animation tokens will be announced. We will be adding them as a separate collection and dropping limited amounts every month. Holders will be able to collect them or combine the tokens with their NFTs to make them more valuable.</p>
                    </div>
                    <div className="content-wrapper">
                        <h2>60%</h2>
                        <p className="slide-up">We will buy Sandbox land and start development on our Play To Earn(P2E) game and other experiences incorporating the 3D design of the WeirdNeckz.</p>
                    </div>
                    <div className="content-wrapper">
                        <h2>75%</h2>
                        <p className="slide-up">We plan on donating 10% of life-time royalties to charities and organizations chosen by YOU the holder. Votes will be made at the end of every month and every holder will be able to add to list of charities.</p>
                    </div>
                    <div className="content-wrapper">
                        <h2>100%</h2>
                        <p className="slide-up">We will give away a *********** to a chosen by a raffle NFT holder and also announce our 4k 3D project</p>
                    </div>
                    <h2 className="middle-title">Current owners will be able to mint 3d pieces 1:1 based on nfts owned</h2>
                    <div className="content-wrapper">
                        <h2>25%</h2>
                        <p className="slide-up">We will announce our P2E game and start giving holders 3d files that they can use as full fledged avatars in the meta verse</p>
                    </div>
                    <div className="content-wrapper">
                        <h2>50%</h2>
                        <p className="slide-up">A major giveaway will be made including announcements for future projects and whitelist spots</p>
                    </div>
                </section>

                <section id="how-to-join" className="section-5">
                    <div className="actions-wrapper">
                        <h2>How to Join?</h2>
                        {countdown
                            ? window.ethereum
                                ? isMobileDevice()
                                    ? <a href={metamaskAppDeepLink} className="btn btn-green">Mint</a>
                                    : <Link to={"/"} onClick={() => join()} className="btn btn-green">Mint</Link>
                                : <a href="#start" className="btn btn-green">Mint</a>
                            : <CountdownTimer countdownTimestampMs={1656185925000} didEnd={didEnd} isHowToJoin={true} />
                        }
                        <a href="https://discord.gg/McBQWWcwHc" className="btn btn-transparent">Join Discord</a>
                    </div>
                </section>

                <section id='team' className="section-6">
                    <h2>Our Crew</h2>
                    <p className="description">
                        The initial collection will not only include cool art, but also work as a membership allowing access to future projects incl. game development, 3d art, experiences and more…
                    </p>
                    <div className="profiles-wrapper">
                        <div className="profile">
                            <img src="/images/user1.png" />
                            <h2>KS</h2>
                        </div>
                        <div className="profile bordered">
                            <img src="/images/user2.png" />
                            <h2>EP</h2>
                        </div>
                        <div className="profile">
                            <img src="/images/user3.png" />
                            <h2>IK</h2>
                        </div>
                    </div>
                </section>

                <section id="faq" className="section-7">
                    <h2 className="faq-title">FAQ</h2>
                    <div className="content-wrapper">
                        <div className="row-1">
                            <div className="content">
                                <h2>When is the mint date?</h2>
                                <p>We plan on minting in April, a specific date will be announced in our discord link</p>
                            </div>
                            <div className="content">
                                <h2>How can I buy a WeirdNeck?</h2>
                                <p>Trough the minting page. Also there will be whitelist pre-sale 72 hour prior to the public launch . After the 72 hours public sale will be available to all at a higher
                                    price.
                                </p>
                            </div>
                            <div className="content">
                                <h2>How can I get a whitelist spot?</h2>
                                <p>Whitelist spots can be obtained through our discord &lt;link&gt;</p>
                            </div>
                        </div>
                        <div className="row-2">
                            <div className="content">
                                <h2>What is the mint price?</h2>
                                <p>Minting prices and our scheduled drops have been specified in the beginning of the roadmap</p>
                            </div>
                            <div className="content">
                                <h2>What wallet can I use to mint?</h2>
                                <p>We plan on offering only metamask in the beginning , further expansion is possible.</p>
                            </div>
                            <div className="content">
                                <h2>How many can I mint?</h2>
                                <p>Pre-sale minting will be limited to 2 nfts per person and public sale to 10 nfts per person.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-8">
                    <div className="footer-wrapper">
                        <div className="footer-menu">
                            <a href="#about-us">About Us</a>
                            <a href="#roadmap">Roadmap</a>
                            <a href="#how-to-join">How to join</a>
                        </div>
                        <img className="logo" src="/images/logo-white.png" />
                        <div className="social-links-wrapper">
                            <img src="/images/discord.png" />
                            <img src="/images/twitter.png" />
                            <img src="/images/instagram.png" />
                        </div>
                    </div>
                    <div className="copyright-wrapper">
                        <p>Powered By</p>
                        <img src="/images/atlas.png" />
                    </div>
                </section>
            </div >
        </>
    );
};

export default Home;