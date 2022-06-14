import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import MusicHeader from "../components/MusicHeader";

function Music({ location }) {
  return (
    <Layout path={location.pathname}>
      <Seo title="Music" />
      <div className="z-index-1 w-100 bg-black">
        <MusicHeader />
        <div className="py-4 d-flex flex-column justify-content-center align-items-center w-100">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://venomdolls.bandcamp.com"
            aria-label="Bandcamp Link"
            className="my-4 h2 text-white text-decoration-none"
          >
            Band Camp
          </a>
          <iframe
            className="bandcamp-embedded mb-4 rounded w-75"
            title="Venom Dolls on Band Camp"
            src="https://bandcamp.com/EmbeddedPlayer/album=2996126774/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://venomdolls.bandcamp.com/album/the-venom-dolls">
              The Venom Dolls by Venom Dolls
            </a>
          </iframe>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://soundcloud.com/venomdolls"
            aria-label="Soundcloud Link"
            className="my-4 h2 text-white text-decoration-none"
          >
            Sound Cloud
          </a>
          <iframe
            className="soundcloud-embedded mb-4 rounded w-75"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/venomdolls?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          ></iframe>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/artist/5Z0X2J07rdkyv59qNlxWeZ?si=NB5a31rYRSq-UeIyihhrDA&dl_branch=1"
            aria-label="Spotify Link"
            className="my-4 h2 text-white text-decoration-none"
          >
            Spotify
          </a>
          <iframe
            className="spotify-embedded mb-4 rounded w-75"
            title="Venom Dolls on Spotify"
            src="https://open.spotify.com/embed/artist/5Z0X2J07rdkyv59qNlxWeZ?utm_source=generator"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://music.apple.com/us/artist/venom-dolls/1578434812"
            aria-label="Apple Music Link"
            className="my-4 h2 text-white text-decoration-none"
          >
            Apple Music
          </a>
          <iframe
            className="apple-embedded rounded w-75 mb-4"
            title="Venom Dolls on Apple Music"
            src="https://embed.music.apple.com/us/album/the-venom-dolls-ep/1579428533?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1"
            frameBorder="0"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            allow="autoplay *; encrypted-media *;"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default Music;
