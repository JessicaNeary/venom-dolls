import React from "react";

import Layout from "../components/Layout";
import MusicHeader from "../components/MusicHeader";

function Music({ location }) {
  return (
    <Layout path={location.pathname}>
      <div className="position-absolute top-0 z-index-1 w-100">
        <MusicHeader/>
        <div className="pt-4 text-white d-flex flex-column justify-content-center align-items-center bg-dark w-100"
        >
          <h2 className="my-4">Band Camp</h2>
          <iframe className="bandcamp-embedded mb-4 rounded w-75" title="Venom Dolls on Band Camp" src="https://bandcamp.com/EmbeddedPlayer/album=2996126774/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/" seamless><a href="https://venomdolls.bandcamp.com/album/the-venom-dolls">The Venom Dolls by Venom Dolls</a></iframe>
          <h2 className="my-4">Spotify</h2>
          <iframe className="spotify-embedded mb-4 rounded w-75" title="Venom Dolls on Spotify" src="https://open.spotify.com/embed/artist/5Z0X2J07rdkyv59qNlxWeZ?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          <h2 className="my-4 ">Apple Music</h2>
          <iframe className="apple-embedded rounded w-75 mb-4" title="Venom Dolls on Apple Music" src="https://embed.music.apple.com/us/album/the-venom-dolls-ep/1579428533?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *;"></iframe>
        </div>
      </div>
    </Layout>
  );
  }
  
  export default Music;

  // "width: 100%; max-width: 660px; overflow: hidden; border-radius: 10px; background: transparent;