import React, {useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
const Task = () => {
    const [tokenBalance, settokenBalance] = useState(0);
    //const [connect, setconnect] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            $(".bg_join_arcade").removeClass("d-none");
            $(".join-the-hunt-into").addClass("d-none");
            $("#task").addClass("bg_gif");
            $("#tasks-section").addClass("animate__fadeIn");
            $("#tasks-section").removeClass("d-none");
        }, 2000);
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
    const follow_twitter = (e)=>{
        e.preventDefault();
        $(document).on( 'click', '#follow_twitter', function () {
            $(this).parents(".list-item").addClass("connected");
            settokenBalance(tokenBalance+1);
            $(this).attr("disabled", "disabled");
        });
        console.log("follow twitter account");
    }
    const follow_founder = (e)=>{
        e.preventDefault();
        $(document).on( 'click', '#follow_founder', function () {
            $(this).parents(".list-item").addClass("connected");
            settokenBalance(tokenBalance+1);
            $(this).attr("disabled", "disabled");
        });
        console.log("follow our founder!");
    }
    const show_love = (e)=>{
        e.preventDefault();
        $(document).on( 'click', '#show_love', function () {
            $(this).parents(".list-item").addClass("connected");
            settokenBalance(tokenBalance+1);
            $(this).attr("disabled", "disabled");
        });
        console.log("Show some love!");
    }
    const tweet_us = (e)=>{
        e.preventDefault();
        $(document).on( 'click', '#tweet_us', function () {
            $(this).parents(".list-item").addClass("connected");
            settokenBalance(tokenBalance+1);
            $(this).attr("disabled", "disabled");
        });
        console.log("Tweet us!");
    }
    const refer_friends = (e)=>{
        e.preventDefault();
        $(document).on( 'click', '#refer_friends', function () {
            $(this).parents(".list-item").addClass("connected");
            settokenBalance(tokenBalance+1);
            $(this).attr("disabled", "disabled");
        });
        console.log("Refer friends!");
    }
    const copy_code = (e)=>{
        e.preventDefault();
        $(document).on( 'click', '#copy_code', function () {
            const referral_code = $(".user-referral-code").text();
            navigator.clipboard.writeText(referral_code);
        });
        console.log("code copied to clipboard");
    }
    return(
        <>
        <div className='join-the-hunt-into' id='join-the-hunt-into'>
        <video id="entry_point" className="RH-entry-video" autoPlay muted>
            <source src="/videos/RH_Arcade_Glitch_Clown.mp4" type='video/mp4' />
        </video>
        </div>
        <img id='bg_img' className='img-fluid bg_join_arcade d-none' src='/images/RH_arcade_1.png' alt='retro hunters bg' width={1920} height={1080} />
        
        <section id="task" className="rh-task">
            <div className="container">
                <div className="row align-items-center vh-100">
                    <div className='col-md-8 offset-md-2'>
                        <div id="tasks-section" className='d-none animate__animated animate__delay-1s'>
                        <div className='tasks-inner'>
                            <h4>COMPLETE YOUR TASKS BELOW TO<br/>
                            EARN YOUR ARCADE TOKENS… <br/>
                            STAY TUNED TO FIND OUT WHERE YOU CAN SPEND<br/>
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
                                    <div className="col-8 p-0"><a id="follow_twitter" href="" onClick={follow_twitter}>Follow our official Twitter account!</a></div>
                                    <div className="d-flex col-2 align-items-center">
                                        <span className='task-info d-flex align-items-center'>
                                        <h5 className='points'>+1</h5>
                                        <img src="/images/token.svg" alt="+1 token" width={32} height={32}/>
                                        </span>
                                        <img className="connected" src="/images/connected-tick.svg" alt="account connected" width={23} height={16}/>
                                    </div>
                                    </div>
                                    <div className='list-item row align-items-center'>
                                    <div className="text-center col-2">2</div>
                                    <div className="col-8 p-0"><a id="follow_founder" href="" onClick={follow_founder}>Follow our Founder!</a></div>
                                    <div className="d-flex col-2 align-items-center">
                                        <span className='task-info d-flex align-items-center'>
                                        <h5 className='points'>+1</h5>
                                        <img src="/images/token.svg" alt="+1 token" width={32} height={32}/>
                                        </span>
                                        <img className="connected" src="/images/connected-tick.svg" alt="account connected" width={23} height={16}/>
                                    </div>
                                    </div>
                                    <div className='list-item row align-items-center'>
                                    <div className="text-center col-2">3</div>
                                    <div className="col-8 p-0"><a id="show_love" href="" onClick={show_love}>Show some love!</a></div>
                                    <div className="d-flex col-2 align-items-center">
                                        <span className='task-info d-flex align-items-center'>
                                        <h5 className='points'>+1</h5>
                                        <img src="/images/token.svg" alt="+1 token" width={32} height={32}/>
                                        </span>
                                        <img className="connected" src="/images/connected-tick.svg" alt="account connected" width={23} height={16}/>
                                    </div>
                                    </div>
                                    <div className='list-item row align-items-center'>
                                    <div className="text-center col-2">4</div>
                                    <div className="col-8 p-0"><a id="tweet_us" href="" onClick={tweet_us}>TWEET AT US</a></div>
                                    <div className="d-flex col-2 align-items-center">
                                        <span className='task-info d-flex align-items-center'>
                                        <h5 className='points'>+1</h5>
                                        <img src="/images/token.svg" alt="+1 token" width={32} height={32}/>
                                        </span>
                                        <img className="connected" src="/images/connected-tick.svg" alt="account connected" width={23} height={16}/>
                                    </div>
                                    </div>
                                    
                                </div>
                                <div className='col-sm-6 items-list-col-2'>
                                    <div className='list-item row align-items-center'>
                                        <div className="text-center col-2">5</div>
                                        <div className="col-8 p-0"><a id="refer_friends" href="" onClick={refer_friends}>Refer Your Friends!</a></div>
                                        <div className="d-flex col-2 align-items-center">
                                            <span className='task-info d-flex align-items-center'>
                                            <h5 className='points'>+1</h5>
                                            <img src="/images/token.svg" alt="+1 token" width={32} height={32}/>
                                            </span>
                                            <img className="connected" src="/images/connected-tick.svg" alt="account connected" width={23} height={16}/>
                                        </div>
                                    </div>
                                    <div className='list-item row align-items-center'>
                                        <h3>each referral will grant one token for yourself, as well as the referred party</h3>
                                    </div>
                                    { tokenBalance == 5 &&
                                    <div className='list-item row align-items-center referral-code'>
                                        <h3><span className='user-referral-code'>A12SA231ZDAS</span> <a href='' id="copy_code" className='text-end' onClick={copy_code}>COPY CODE</a></h3>
                                    </div>
                                    }
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className='return-back animate__animated animate__slideInLeft animate__delay-1s'>
            <h5><Link to="/home">RETURN TO WEBSITE</Link></h5>
        </div>
        </>
    );
}
export default Task;