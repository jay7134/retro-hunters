import { Link } from "react-router-dom";
import Typed from "react-typed";
function Home(){
    return(
        <>
        
        {/*<img id="bg_img" className='img-fluid' src='/images/bg-1.jpg' alt='retro hunters bg' width={1920} height={1080} />*/}
        <video className="RH-entry-video" autoPlay muted>
            <source src="/videos/RH-home-1.mp4" type='video/mp4' />
        </video>
        <section id="Home-page" className="rh-home">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h2 className="text-center enter-website-links">
                            <Link  to="/join-the-hunt">Enter the website</Link> 
                            <Link  to="/join-the-hunt">Join the hunt</Link>
                        </h2>
                        <h1 className="heading-text d-none">
                            <Link to="/join-the-hunt" className="text-link">
                            <Typed
                                strings={[
                                        "Join The Hunt",
                                    ]}
                                    typeSpeed={150}
                                    backSpeed={100}
                                    
                                    />
                            </Link>
                        </h1>
                    </div>
                </div>               
            </div>
        </section>
        </>
    );
}
export default Home;