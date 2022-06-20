import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { Login } from "./Login";
import { Profile } from "./Profile";
const LS_KEY = "login-with-metamask:auth";

const qs = (key) => {
  key = key.replace(/[*+?^$.[\]{}()|\\/]/g, "\\$&"); // escape RegEx meta chars
  const match = window.location.search.match(
    new RegExp(`[?&]${key}=([^&]+)(&|$)`)
  );
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
};

const Arcade = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    // Access token is stored in localstorage
    const ls = window.localStorage.getItem(LS_KEY);
    const auth = ls && JSON.parse(ls);
    setState({ auth });
  }, []);

  const handleLoggedIn = (auth) => {
    localStorage.setItem(LS_KEY, JSON.stringify(auth));
    setState({ auth });
  };

  const handleLoggedOut = () => {
    localStorage.removeItem(LS_KEY);
    setState({ auth: undefined });
  };

  useEffect(() => {
    const token = qs("token");

    if (token && state && state.auth && state.auth.accessToken) {
      fetch(`/users/verifyDiscord`, {
        body: JSON.stringify({
          token,
        }),
        headers: {
          Authorization: `Bearer ${state.auth.accessToken}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.errorMsg) {
            alert(res.errorMsg);
          } else {
            if (res.publicAddress) {
              alert("Verified discord account");
            }
          }
        });
    }
    // eslint-disable-next-line
  }, [qs, state]);

  const { auth } = state;

  return (
    <>
    <img id='bg_img' className='img-fluid' src='/images/arcade.jpg' alt='retro hunters bg' width={1920} height={1080} />
    <video id="RH-entry-video-2" className="RH-loop-entry-video" autoPlay loop muted>
        <source src="/videos/Looping-arcade-machine.mp4" type='video/mp4' />
    </video>
    <section id="join-the-hunt" className="sec-pad-lg">
        <div className="container">
            <div className="row align-items-center">
                <div className='col-md-8 offset-md-2'>
                    {/*
                {auth ? (
                <Profile auth={auth} onLoggedOut={handleLoggedOut} />
                ) : (
                <Login onLoggedIn={handleLoggedIn} />
                )}*/}
                <h2 className="text-center arcade-links">
                  <Link  to="/home" className="text-center enter-website-links">Enter the site</Link>
                  <Link  to="/join-the-hunt" state={{ from: "RH_arcade" }} className="text-center enter-website-links">Join the hunt</Link>
                </h2>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Arcade;
