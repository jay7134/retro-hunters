import React from 'react';
import $ from 'jquery';
const About = () => {
    $(document).on( 'click', '.nav-links li a', function (e) {
        e.preventDefault();
        $(".about-section-nav .nav-links li").each(function(){
            $(this).removeClass("active");
        });
        $(this).parent("li").fadeIn().addClass("active");
        const sectionId = $(this).attr('href');
        $("section.section").each(function(){
            $(this).addClass("d-none");
        })
        $(sectionId).removeClass("d-none").addClass("animate__animated animate__zoomIn");
    });
    return(
        <>
        <img id='bg_img' className='img-fluid' src='/images/bg.jpg' alt='retro hunters bg' width={1920} height={1080} />
        
        <section id="about" className="sec-pad-lg">
            <div className="container">
                <div className="row about-us align-items-center">
                    <div className="col-md-3">
                    <img className='img-fluid animate__animated animate__fadeInLeft' src="/images/about-2.jpg" alt="discord" width="240"/>
                    </div>
                    <div className="col-md-6 about-content-sections">
                    <div className='about-section-nav'>
                        <ul className='nav-links'>
                            <li className='active'><a href='#section1'>section</a></li>
                            <li><a href='#section2'>section</a></li>
                            <li><a href='#section3'>section</a></li>
                            <li><a href='#section4'>section</a></li>
                        </ul>    
                    </div>    
                    <section className="section" id="section1">
                        <div className="content">
                        <h2>FROM THE ALLEY TO THE GARDEN</h2>
                        <p>
                        Azuki is a brand.<br/>
                        A new kind of brand that we build together.<br/>
                        A brand for the metaverse. By the community.
                        </p>
                        <p>A collection of 10,000 avatars that give you membership access to The Garden. It starts with exclusive streetwear collabs, NFT drops, live events, and much more that will be revealed over time. Community ownership in Azuki allows for a new genre of media which the world has yet to explore. An Azuki is your identity in the metaverse — let's build together.</p>
                        <p>The Garden is a corner of the internet where art, community, and culture fuse to create magic. The lines between the physical and digital worlds are blurring and the rules are being rewritten</p>
                        <a className="link-active" href='/'>WHAT WE DID <img src="/images/down-arrow.svg" alt="What we do" width={10}/></a>
                        </div>
                    </section>
                    <section className="section d-none" id="section2">
                    <div className="content">
                        <h2>FROM THE ALLEY TO THE GARDEN</h2>
                        <p>
                        Azuki is a brand.<br/>
                        A new kind of brand that we build together.<br/>
                        A brand for the metaverse. By the community.
                        </p>
                        <p>A collection of 10,000 avatars that give you membership access to The Garden. It starts with exclusive streetwear collabs, NFT drops, live events, and much more that will be revealed over time. Community ownership in Azuki allows for a new genre of media which the world has yet to explore. An Azuki is your identity in the metaverse — let's build together.</p>
                        <p>The Garden is a corner of the internet where art, community, and culture fuse to create magic. The lines between the physical and digital worlds are blurring and the rules are being rewritten</p>
                        <a className="link-active" href='/'>WHAT WE DID <img src="/images/down-arrow.svg" alt="What we do" width={10}/></a>
                        </div>
                    </section>
                    <section className="section d-none" id="section3">
                    <div className="content">
                        <h2>FROM THE ALLEY TO THE GARDEN</h2>
                        <p>
                        Azuki is a brand.<br/>
                        A new kind of brand that we build together.<br/>
                        A brand for the metaverse. By the community.
                        </p>
                        <p>A collection of 10,000 avatars that give you membership access to The Garden. It starts with exclusive streetwear collabs, NFT drops, live events, and much more that will be revealed over time. Community ownership in Azuki allows for a new genre of media which the world has yet to explore. An Azuki is your identity in the metaverse — let's build together.</p>
                        <p>The Garden is a corner of the internet where art, community, and culture fuse to create magic. The lines between the physical and digital worlds are blurring and the rules are being rewritten</p>
                        <a className="link-active" href='/'>WHAT WE DID <img src="/images/down-arrow.svg" alt="What we do" width={10}/></a>
                        </div>
                    </section>
                    <section className="section d-none" id="section4">
                    <div className="content">
                        <h2>FROM THE ALLEY TO THE GARDEN</h2>
                        <p>
                        Azuki is a brand.<br/>
                        A new kind of brand that we build together.<br/>
                        A brand for the metaverse. By the community.
                        </p>
                        <p>A collection of 10,000 avatars that give you membership access to The Garden. It starts with exclusive streetwear collabs, NFT drops, live events, and much more that will be revealed over time. Community ownership in Azuki allows for a new genre of media which the world has yet to explore. An Azuki is your identity in the metaverse — let's build together.</p>
                        <p>The Garden is a corner of the internet where art, community, and culture fuse to create magic. The lines between the physical and digital worlds are blurring and the rules are being rewritten</p>
                        <a className="link-active" href='/'>WHAT WE DID <img src="/images/down-arrow.svg" alt="What we do" width={10}/></a>
                        </div>
                    </section>    
                    
                    </div>
                    <div className="col-md-3">
                    <img className='img-fluid animate__animated animate__fadeInRight' src="/images/about-1.png" alt="discord" width="240"/>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}
export default About;