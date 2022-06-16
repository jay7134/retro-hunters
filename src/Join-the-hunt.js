import React, {useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Typed from "react-typed";
import $ from 'jquery';
const Join_the_hunt = () => {
    const WEBURL = useRef(0);
    //console.log(WEBURL.current);
    //const [refCode, setrefCode] = useState("");
    //const [connect, setconnect] = useState("");
    /*
    useEffect(() => {
        const timer = setTimeout(() => {
            document.getElementById("bg_img").src="/images/join_hunt_1.jpg";
            document.getElementById("join-box").classList.add("animate__fadeInUp");
            document.getElementById("bg_img").src="/images/join_hunt_2.jpg";
            document.getElementById("join-box").classList.remove("d-none");
        }, 2000);
        return () => clearTimeout(timer);
    }, []);*/
    const join_hunt = () => {
        WEBURL.current++;
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
            $("#join-box").addClass("animate__zoomIn").removeClass("d-none");
        }, 2000);
        document.getElementById("bg_img").src="/images/join_hunt_2.jpg";
        document.getElementById("return-back").classList.remove("d-none");
    }
    const setReferralCode = ()=>{
        console.log("entered referral code");
    }
    const noReferralCode = (e)=>{
        e.preventDefault();
        console.log("No referral code");
        document.getElementById("referral-code-section").classList.add("d-none");
        document.getElementById("connection-section").classList.remove("d-none");
        document.getElementById("connection-section").classList.add("animate__fadeInUp");
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
        <video className="RH-entry-video" autoPlay loop muted>
            <source src="/videos/RH-home-1.mp4" type='video/mp4' />
        </video>
        
        </div>
        <img id='bg_img' className='img-fluid d-none' src='/images/bg-3.jpg' alt='retro hunters bg' width={1920} height={1080} />
        
        <h1 id='btn-txt-heading' className="heading-text">
            <button className='btn text-link' onClick={join_hunt}>
            <Typed
                strings={[
                        "Join The Hunt",
                    ]}
                    typeSpeed={150}
                    backSpeed={100}
                    
                    />
            </button>
        </h1>
     
        <section id="join-the-hunt" className="sec-pad-lg">
            <div className="container">
                <div className="row align-items-center vh-100">
                    <div className='col-md-8 offset-md-2'>
                        <div className="video-playbox ratio ratio-16x9 d-none animate__animated animate__delay-1s">
                            <video className="embed-responsive-item" autoPlay muted></video>
                        </div>
                        <div id="join-box" className='d-none animate__animated animate__delay-3s'>
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
        <div id="return-back" className='return-back animate__animated animate__slideInLeft d-none'>
            <h5><a href="/join-the-hunt">RETURN TO WEBSITE</a></h5>
        </div>
        </>
    );
}
export default Join_the_hunt;