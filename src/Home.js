import { Link } from "react-router-dom";
import Typed from "react-typed";
function Home(){
    return(
        <>
        
        {/*<img id="bg_img" className='img-fluid' src='/images/bg-1.jpg' alt='retro hunters bg' width={1920} height={1080} />*/}
        <video className="RH-entry-video" autoPlay muted loop>
            <source src="/videos/RH-entry.mp4" type='video/mp4' />
        </video>
        <section id="Home" className="rh-home">
            <div className="container">
                <div className="row">
                    <div className="mt-4 text-end">
                        <h1 className="heading-text">
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