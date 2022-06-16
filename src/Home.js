import React, {useEffect, useState } from 'react';
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
        
        <img id="bg_img" className='img-fluid d-none animate__animated' src='/images/bg-1.jpg' alt='retro hunters bg' width={1920} height={1080} />
        <video id="RH-entry-video" className="RH-entry-video" autoPlay muted>
            <source src="/videos/RH-home-entry.mp4" type='video/mp4' />
        </video>
        <video id="RH-entry-join" className="RH-entry-video d-none" autoPlay loop muted>
            <source src="/videos/RH-home-1.mp4" type='video/mp4' />
        </video>
        <section id="Home-page" className="rh-home">
            <div className="container">
                <div className="row">
                    <div className="column entry-1">
                        <Link to="/join-the-hunt" className="text-center enter-website-links">
                                Enter the website
                        </Link>
                    </div>
                </div>               
            </div>
        </section>
        </>
    );
}
export default Home;