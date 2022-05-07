import React, { useRef } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Youtube from 'react-youtube';

import useWindowDimensions from '../utils/useWindowDimensions';

function MusicHeader() {
    const refs = [useRef[null], useRef[null], useRef[null]]
    const handleReady = (e) => {
        e.target.mute();
        e.target.playVideo();
    }
    const handleNext = (index) => {
        refs.forEach(video => {
            video.internalPlayer.pauseVideo();
        })
        refs[index].internalPlayer.mute();
        refs[index].internalPlayer.playVideo();
      };
    const { width } = useWindowDimensions();
    const getOpts = () => {
        if (width > 840) {
            return {
                height: '390',
                width: '640'
            };
        } else if (width > 768) {
            return {
                height: '315',
                width: '560'
            }
        } else {
        const multiplyer = width / 80
            return {
                height: (45*multiplyer),
                width: width
            }
        }
    }
    const opts = getOpts();
    return (
        <div className="position-relative">
            <Carousel className="music-carousel" interval={150000} onSlide={handleNext} onSelect={handleNext}>
                <Carousel.Item>
                    <div style={opts} className="d-flex justify-content-center bg-black w-100">
                    <Youtube
                        videoId="JPD9NM2lAN4"
                        title="Venom Dolls - Fucked Up (The Live Rooms)"
                        opts={opts}
                        onReady={handleReady}
                        ref={(ref) => refs[0] = ref}
                    />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center bg-black w-100">
                    <Youtube
                        videoId="KuQdEn_mZeA"
                        title="Venom Dolls - Don't Wanna Be (Official Music Video)"
                        opts={opts}
                        ref={(ref) => refs[1] = ref}
                    />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center bg-black w-100">
                    <Youtube
                        videoId="7QBpZnauk8I"
                        title="Venom Dolls - ALAB live @ Whammy"
                        opts={opts}
                        ref={(ref) => refs[2] = ref}
                    />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MusicHeader;