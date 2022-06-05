import React from 'react';
const About = () => {
    return(
        <section id="about" className="sec-pad-lg">
            <div className="container">
                <div className="row about-us align-items-center">
                    <div className="col-md-3">
                    <img className='img-fluid' src="/images/about-2.jpg" alt="discord" width="240"/>
                    </div>
                    <div className="col-md-6">
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
                        <a className="link-active" href='/'>WHAT WE DID</a>
                        </div>
                    </section>
                    <section className="section" id="section2">
                        <div className="content">Section 2</div>
                    </section>
                    <section className="section" id="section3">
                        <div className="content">Section 3</div>
                    </section>
                    <section className="section" id="section4">
                        <div className="content">Section 4</div>
                    </section>    
                    
                    </div>
                    <div className="col-md-3">
                    <img className='img-fluid' src="/images/about-1.png" alt="discord" width="240"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;