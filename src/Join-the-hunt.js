import React, {useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import { useLocation } from "react-router-dom";
const Join_the_hunt = () => {
    //const location = useLocation();
    //const { from } = location.state;
    //const WEBURL = useRef(0);
    useEffect(() => {
        setTimeout(() => {
            $(".video-playbox").addClass("d-none");
            $("#join-box").addClass("animate__fadeIn").removeClass("d-none");
        }, 2000);
    }, []); 
    {/*
    const join_hunt = () => {
        WEBURL.current++;
        $(".back-to-arcade").addClass("d-none");
        $(".main-wrapper").addClass("d-none");
        document.getElementById("btn-txt-heading").classList.add("d-none");
        document.getElementById("join-the-hunt-into").classList.add("d-none");
        document.getElementById("bg_img").classList.remove("d-none");
        document.getElementById("bg_img").src="/images/join_hunt_1.jpg";
        //$("#machine-entry").removeClass("d-none");

        $(".video-playbox").removeClass("d-none").addClass("animate__zoomIn");
        $(".video-playbox video").html('<source src="/videos/RH-join-entry.mp4" type="video/mp4" />');
        setTimeout(() => {
            $(".video-playbox").addClass("d-none");
            $("#join-box").addClass("animate__fadeIn").removeClass("d-none");
        }, 2000);
        document.getElementById("bg_img").src="/images/join_hunt_2.jpg";
        document.getElementById("return-back").classList.remove("d-none");
    }*/}
    const setReferralCode = ()=>{
        console.log("entered referral code");
    }
    const noReferralCode = (e)=>{
        e.preventDefault();
        console.log("No referral code");
        document.getElementById("referral-code-section").classList.add("d-none");
        document.getElementById("connection-section").classList.remove("d-none");
        document.getElementById("connection-section").classList.add("animate__fadeIn");
    }
    const connectwallet = (target)=>{
        console.log("connect your wallet code");
        document.getElementById("wallet_connection").classList.add("button-connected");
    }
    const verifydiscord = ()=>{
        console.log("verify your discord");
        document.getElementById("verify_discord").classList.add("button-connected");
    }
    return(
        <>
        <div className='join-the-hunt-into' id='join-the-hunt-into'>
        <video id="entry_point" className="RH-entry-video" autoPlay muted>
            <source src="/videos/RH_join_page.mp4" type='video/mp4' />
        </video>
        </div>
        {/*
        <div className='join-the-hunt-into' id='join-the-hunt-into'>
        <video id="entry_point" className="RH-entry-video" autoPlay muted>
            <source src="/videos/entry_Transition.mp4" type='video/mp4' />
        </video>
        <video id="entry_loop" className="RH-entry-video d-none" autoPlay loop muted>
            <source src="/videos/RH-home-entry.mp4" type='video/mp4' />
        </video>
        
        </div>
        <img id='bg_img' className='img-fluid d-none' src='/images/bg-3.jpg' alt='retro hunters bg' width={1920} height={1080} />
        <div className='back-to-arcade'>
            <Link to="/arcade">Back to arcade</Link>
        </div>
        <h1 id='btn-txt-heading' className="heading-text animate__animated animate__fadeInRight animate__delay-2s">
            <button className='btn text-link' onClick={join_hunt}>
            <Typed
                strings={[
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Join The Hunt",
                    ]}
                    typeSpeed={300}
                    backSpeed={100}
                    
                    />
            </button>
        </h1>
        <img id='bg_img' className='img-fluid bg_join_arcade' src='/images/RH_arcade_1.png' alt='retro hunters bg' width={1920} height={1080} />
        */}
        <section id="join-the-hunt" className="sec-pad-lg">
            <div className="container">
                <div className="row align-items-center vh-100">
                    {/*
                    <div className="video-playbox ratio ratio-16x9 animate__animated animate__zoomIn animate__delay-1s">
                        <video className="embed-responsive-item" autoPlay loop muted>
                            <source src="/videos/RH_join_page.mp4" type="video/mp4" />
                        </video>
                    </div>*/}
                    <div className='col-md-8 offset-md-2'>
                
                        <div id="join-box" className='d-none animate__animated animate__delay-2s'>
                            <div id='referral-code-section'>
                                <h2>ENTER YOUR REFERRAL CODE</h2>
                                <input type="text" className='input'/>
                                <div className='referral-link'>
                                    <button className='btn btn-default' onClick={setReferralCode}>Enter</button>
                                </div>
                                <div className='referral-code'>
                                    <h4>IF YOU DON’T HAVE A REFERRAL CODE, <a href='' onClick={noReferralCode}>CLICK HERE</a></h4>
                                </div>
                            </div>
                            <div id="connection-section" className='d-none animate__animated animate__delay-1s'>
                                <h2>In order to join the hunt, you must</h2>
                                <div className='connection-buttons'>
                                    <button id="wallet_connection" className='btn btn-default' onClick={connectwallet}>
                                        <img className='connect' src="/images/connect-wallet.svg" alt="connect wallet" width={19} height={32}/>
                                        <img className='connected' src="/images/connect-wallet-2.svg" alt="wallet connected" width={19} height={32}/> 
                                        <span className="button-text">Connect your wallet</span>
                                        <span className='token-info'>
                                            <span className='points'>+1</span>
                                            <img src="/images/token.svg" alt="+1 token" width={32} height={32}/>
                                        </span>
                                        <img className="connected" src="/images/connected-tick.svg" alt="account connected" width={23} height={16}/>
                                    </button>
                                    <button id="verify_discord" className='btn btn-default' onClick={verifydiscord}>
                                        <img className='connect' src="/images/connect-discord.svg" alt="connect discord account" width={33} height={25}/> 
                                        <img className='connected' src="/images/connect-discord-2.svg" alt="connected discord account" width={33} height={25}/> 
                                        <span className="button-text">Verify your discord</span>
                                        <span className='token-info'>
                                            <span className='points'>+1</span>
                                            <img src="/images/token.svg" alt="+1 token" width={32} height={32}/>
                                        </span>
                                        <img className="connected" src="/images/connected-tick.svg" alt="account connected" width={23} height={16}/>
                                    </button>
                                </div>
                                <div className='connection-text pt-50'>
                                    <h4><Link to="/task">connecting and verifying will reward you with consumable tokens, find more information on these on the next page</Link></h4>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <div id="return-back" className='return-back animate__animated animate__slideInLeft animate__delay-1s'>
            <h5><Link to="/home">RETURN TO WEBSITE</Link></h5>
        </div>
        </>
    );
}
export default Join_the_hunt;