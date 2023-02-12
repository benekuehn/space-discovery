import React from 'react'
import './missions.css'

type Props = {}

function Missions({}: Props) {
    return (
        <section>
            <h1>SpaceX missions</h1>
            <div className="missionWrapper">
                <div className="missionCard">
                    <img src="http://www.nasa.gov/sites/default/files/thumbnails/image/crew-1_ceitpt2-20200612-dsc05519_2_.jpg" />
                    <div className="text">
                        <h3>Crew-1 Mission</h3>
                        <p>23/12/2022</p>
                    </div>
                </div>
                <div className="missionCard">
                    <img src="http://www.nasa.gov/sites/default/files/thumbnails/image/crew-1_ceitpt2-20200612-dsc05519_2_.jpg" />
                    <div className="text">
                        <h3>Crew-1 Mission</h3>
                        <p>23/12/2022</p>
                    </div>
                </div>
                <div className="missionCard">
                    <img src="http://www.nasa.gov/sites/default/files/thumbnails/image/crew-1_ceitpt2-20200612-dsc05519_2_.jpg" />
                    <div className="text">
                        <h3>Crew-1 Mission</h3>
                        <p>23/12/2022</p>
                    </div>
                </div>
                <div className="missionCard">
                    <img src="http://www.nasa.gov/sites/default/files/thumbnails/image/crew-1_ceitpt2-20200612-dsc05519_2_.jpg" />
                    <div className="text">
                        <h3>Crew-1 Mission</h3>
                        <p>23/12/2022</p>
                    </div>
                </div>
                <div className="missionCard">
                    <img src="http://www.nasa.gov/sites/default/files/thumbnails/image/crew-1_ceitpt2-20200612-dsc05519_2_.jpg" />
                    <div className="text">
                        <h3>Crew-1 Mission</h3>
                        <p>23/12/2022</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Missions
