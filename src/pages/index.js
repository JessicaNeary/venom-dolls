import React from 'react';
import { StaticImage  } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Facebook from '../images/socials/icons8-facebook.svg';
import Instagram from '../images/socials/icons8-instagram.svg';
import Spotify from '../images/socials/icons8-spotify.svg';
import Bandcamp from '../images/socials/icons8-bandcamp.svg';
import Soundcloud from '../images/socials/icons8-soundcloud.svg';
import Youtube from '../images/socials/icons8-youtube.svg';
import Apple from '../images/socials/icons8-apple-logo.svg';

function Home({ location }) {
  return (
    <Layout path={location.pathname}>
      <div className="bg-black p-4">
        <div className="row p-4 m-4 w-100 align-items-center">
          <div className="col-6 ms-4 p-4">
            <h1>Venom Dolls</h1>
            <h6 className="mt-2 mb-4 fw-light text-light">
  Venom Dolls are a 3 piece all-girl alt rock band formed at the end of 2020. With a freshly released EP, their fast paced, highly relatable tunes are sure to get you dancing/moshing/accidentally injuring your neighbor.</h6>
            <Link to="/music" className="btn btn-outline-light mt-2">Listen now</Link>
          </div>
          <StaticImage placeholder="none" src="../images/neon-dolls.jpg" className="col-4 m-auto" alt="venom dolls graffiti group shot" />
        </div>
        <div className="row pb-4">
          <StaticImage placeholder="blurred" src="../images/venom-dolls-graf-shot-1.jpg" className="d-block w-100" alt="venom dolls graffiti group shot" />
        </div>
        <div className="row justify-content-center pb-4 mb-4">
          <div className="my-4 d-flex fd-row col-12 col-sm-10 col-md-8 col-lg-6 justify-content-around">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/thevenomdolls/"><Facebook className="socials-icon" alt="Facebook Icon by Icons8" /></a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/venomdollsnz/"><Instagram className="socials-icon" alt="Instagram Icon by Icons8" /></a>
            <a target="_blank" rel="noreferrer" href="https://venomdolls.bandcamp.com/"><Bandcamp className="socials-icon" alt="Bandcamp Icon by Icons8" /></a>            
            <a target="_blank" rel="noreferrer" href="https://soundcloud.com/venomdolls"><Soundcloud className="socials-icon" alt="Soundcloud Icon by Icons8" /></a>
            <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/5Z0X2J07rdkyv59qNlxWeZ?si=NB5a31rYRSq-UeIyihhrDA&dl_branch=1"><Spotify className="socials-icon" alt="Spotify Icon by Icons8" /></a>
            <a target="_blank" rel="noreferrer" href="https://youtube.com/channel/UCNs7xLhTy8FVcNCx-O-vOsg"><Youtube className="socials-icon" alt="Youtube Icon by Icons8" /></a>
            <a target="_blank" rel="noreferrer" href="https://music.apple.com/us/artist/venom-dolls/1578434812"><Apple className="socials-icon" alt="Apple Music Icon by Icons8" /></a>
          </div>
        </div>
        <div className="row justify-content-around my-4 py-4">
          <div className="col-10 col-md-4 col-lg-3 px-md-4">
            <StaticImage placeholder="blurred" src="../images/members/cara.jpg" className="d-block w-100" alt="Carawei Gao Profile Picture" />
            <h5 className="my-4 fw-bold text-center">CARAWEI</h5>
            <p>asasdasd</p>
          </div>          
          <div className="col-10 col-md-4 col-lg-3 px-md-4">
            <StaticImage placeholder="blurred" src="../images/members/jess-2.jpg" className="d-block w-100" alt="Jessica Frank Profile Picture" />
            <h5 className="my-4 fw-bold text-center">JESS</h5>
            <p>Bassist and lead vocalist of the group, Jessica Frank developed her tone whilst belting out the oldies during her long Auckland commute. Bass is the latest in a long line of instrument friends, which originated with a piano as the 'weird kid' at the age of 6. Her bucket list consists entirely of bands she needs to see, having thus far ticked off such legends as The Adicts, Dead Kennedys and Black Sabbath.</p>
          </div>          
          <div className="col-10 col-md-4 col-lg-3 px-md-4">
            <StaticImage placeholder="blurred" src="../images/members/summah.jpg" className="d-block w-100" alt="Summah Auvae Profile Picture" />
            <h5 className="my-4 fw-bold text-center">SUMMAH</h5>
            <p>Summah 'the Drummer' Auvae, formerly of the band Bad Sport, has been obsessed with drums since the moment she first heard Led Zeppelin's 'Dazed and Confused'. She likes Knocked Loose, Big Boots & Sals Pizza, and can usually be found getting tattooed & drooling over double kicks and chinas.</p>
          </div>
        </div>
        <a className="link-danger p-2" target="_black" rel="noreferrer" href="https://www.muzic.net.nz/articles/reviews/92551/venom-dolls-ep-review-venom-dolls">
          <h2 className="text-center mt-4 pt-4">Muzic.net EP review</h2>
        </a>
        <a className="link-danger p-2" target="_black" rel="noreferrer" href="https://95bfm.com/bcast/the-hard-fast-heavy-show-with-paddy-august-15th-2021-venom-2018-brrip-1080p-mp4">
          <h2 className="text-center mb-4 pb-4">Hard Fast and Heavy show on 95BFM</h2>
        </a>
      </div>
    </Layout>
  );
}

export default Home;
