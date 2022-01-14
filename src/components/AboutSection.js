import React from 'react'
import home1 from "../img/home1.png"

function AboutSection() {
    return (
        <div>
            <div>
                <div className="description">
                    <div className="title">
                        <div className="hide">
                            <h2>We work to make</h2>
                        </div>
                        <div className="hide">
                            <h2>Your <span>dreams</span> come</h2>
                        </div>
                        <div className="hide">
                            <h2>true.</h2>
                        </div>
                    </div>
                    <p>Contact us for any photgraphy or videographys ideas that you have. We have professionnals with amazing skills.</p>
                    <button>Contact us</button>
                </div>
                <div className="image">
                    <img src={home1} alt="camera dude"/>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
