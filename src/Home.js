import React, {useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
function Home(){
    useEffect(() => {
        $(".main-wrapper").addClass("d-none");
    }, []);
    return(
        <>
        
        <img id="bg_img" className='img-fluid d-none animate__animated' src='/images/arcade.jpg' alt='retro hunters bg' width={1920} height={1080} />
        <video id="RH-entry-video" className="RH-entry-video" autoPlay muted>
            <source src="/videos/RH-arcade.mp4" type='video/mp4' />
        </video>
        <section id="Home-page" className="rh-home">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h2 className="text-center enter-website-links">
                            <Link  to="/join-the-hunt">
                                Enter the website
                            </Link> 
                        </h2>
                    </div>
                </div>               
            </div>
        </section>
        </>
    );
}
export default Home;