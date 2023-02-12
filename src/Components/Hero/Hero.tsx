import React from 'react'
import './hero.css'

type Props = {}

function Hero({}: Props) {
    return (
        <div>
            <img
                className="heroImage"
                src="https://www.nasa.gov/sites/default/files/thumbnails/image/fd2_opnav_art001e000013_orig.jpg"
            ></img>
        </div>
    )
}

export default Hero
