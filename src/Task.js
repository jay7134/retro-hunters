import React, {useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const Task = () => {
    const [tokenBalance, settokenBalance] = useState(0);
    //const [connect, setconnect] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            //document.getElementById("bg_img").src="/images/join_hunt_1.jpg";
            
            //document.getElementById("bg_img").src="/images/join_hunt_2.jpg";
            document.getElementById("clown-box").classList.add("d-none");
            document.getElementById("tasks-section").classList.add("animate__fadeInUp");
            document.getElementById("tasks-section").classList.remove("d-none");
        }, 4000);
        return () => clearTimeout(timer);
    }, [tokenBalance]);

    const setReferralCode = ()=>{
        console.log("entered referral code");

    }
    const noReferralCode = (e)=>{
        e.preventDefault();
        console.log("No referral code");
        //document.getElementById("referral-code-section").classList.add("d-none");
        //document.getElementById("connection-section").classList.remove("d-none");
        //document.getElementById("connection-section").classList.add("animate__fadeInUp");
    }
    const connectwallet = ()=>{
        console.log("connect your wallet code");
    }
    const verifydiscord = ()=>{
        console.log("verify your discord");
    }
    return(
        <>
        <img id='bg_img' className='img-fluid' src='/images/RH-task-bg-1.jpg' alt='retro hunters bg' width={1920} height={1080} />
        
        <section id="task" className="rh-task">
            <div className="container">
                <div className="row align-items-center">
                    <div className='col-md-8 offset-md-2'>
                        
                        <div id="clown-box" className='section-clown animate__animated animate__zoomIn animate__delay-2s'>
                        <video className='clown-video img-fluid' autoPlay loop muted>
                            <source src="/videos/RH-Glitch-Clown.mp4" type='video/mp4' />
                        </video>
                        </div>
                        <div id="tasks-section" className='d-none animate__animated animate__delay-1s'>
                            <h4>COMPLETE YOUR TASKS BELOW TO<br/>
                            EARN YOUR ARCADE TOKENS… <br/>
                            STAY TUNED TO FIND OUT WHERE YOU CAN SPEND
                            THEM IN THE NEAR FUTURE ;) ////////
                            </h4>
                            <div className='tasks-list'>
                            <div className='row token-balance'>
                                <div className='col-6'>
                                    <h4>Token balance:</h4>
                                </div>
                                <div className='col-6 text-end'>
                                    <h5 className='token-balance-count'>{tokenBalance} <img src="/images/token.svg" alt="Token Balance" width={32} height={32}/></h5>
                                </div>
                            </div>
                            <div className='row task-listing'>
                                <div className='col-sm-6'>
                                    <div className='list-item row align-items-center'>
                                    <div className="col-2 text-center">1</div>
                                    <div className="col-7 p-0">Follow our official Twitter account!</div>
                                    <div className="d-flex col-3 align-items-center">
                                        <h5 className='points'>+1</h5>
                                        <img src="/images/token.svg" alt="+1 token" width={32} height={32}/>
                                        <img className="connected" src="/images/connected-tick.svg" alt="account connected" width={23} height={16}/>
                                    </div>
                                    </div>
                                    <div className='list-item row align-items-center'>
                                    <div className="text-center col-2">2</div>
                                    <div className="col-7 p-0">Follow our Founder!</div>
                                    <div className="d-flex col-3 align-items-center">
                                        <h5 className='points'>+1</h5>
                                        <img src="/images/token.svg" alt="+1 token" width={32} height={32}/>
                                        <img className="connected" src="/images/connected-tick.svg" alt="account connected" width={23} height={16}/>
                                    </div>
                                    </div>
                                    <div className='list-item row align-items-center'>
                                    <div className="text-center col-2">3</div>
                                    <div className="col-7 p-0">Show some love!</div>
                                    <div className="d-flex col-3 align-items-center">
                                        <h5 className='points'>+1</h5>
                                        <img src="/images/token.svg" alt="+1 token" width={32} height={32}/>
                                        <img className="connected" src="/images/connected-tick.svg" alt="account connected" width={23} height={16}/>
                                    </div>
                                    </div>
                                    <div className='list-item row align-items-center'>
                                    <div className="text-center col-2">4</div>
                                    <div className="col-7 p-0">TWEET AT US</div>
                                    <div className="d-flex col-3 align-items-center">
                                        <h5 className='points'>+1</h5>
                                        <img src="/images/token.svg" alt="+1 token" width={32} height={32}/>
                                        <img className="connected" src="/images/connected-tick.svg" alt="account connected" width={23} height={16}/>
                                    </div>
                                    </div>
                                    
                                </div>
                                <div className='col-sm-6 items-list-col-2'>
                                    <div className='list-item row align-items-center'>
                                        <div className="text-center col-2">5</div>
                                        <div className="col-7 p-0">Refer Your Friends!</div>
                                        <div className="d-flex col-3 align-items-center">
                                            <h5 className='points'>+1</h5>
                                            <img src="/images/token.svg" alt="+1 token" width={32} height={32}/>
                                            <img className="connected" src="/images/connected-tick.svg" alt="account connected" width={23} height={16}/>
                                        </div>
                                    </div>
                                    <div className='list-item row align-items-center'>
                                        <h3>each referral will grant one token for yourself, as well as the referred party</h3>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <div className='return-back animate__animated animate__slideInLeft animate__delay-2s'>
            <h5><Link to="/">RETURN TO WEBSITE</Link></h5>
        </div>
        </>
    );
}
export default Task;