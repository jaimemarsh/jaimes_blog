import React from 'react';
// import jaimeImg from '../images/jaimeImg.JPG';
// import Cat from '../components/Cat'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { } from '@fortawesome/free-solid-svg-icons'


const About = () => {
    return (
        <div className="section hero is-warning">
            <div className="hero-body">
                <div className="columns">
                    {/* <div className="column ml-6">
                        <img src={jaimeImg} alt="" />
                    </div> */}
                    <div className="column has-text-left">
                        <h1 className="title is-size-1 is-size-3-mobile google-font-pd mb-6 has-text-centered google-font-bs">Why I Started a Blog </h1>
                        <p className="is-size-4 is-size-5-mobile has-text-justified google-font-ss">
                            I wanted to write a blog to share my experiences as a new developer. When people are new to something,
                            they often hesitate to share their ideas for fear of saying something wrong. This fear can result in the
                            loss of many valuable ideas that are needed but are later forgotten. When I look back, I can’t believe how
                            much I’ve learned. I believe that writing about those early
                            experiences and continuing to share my journey will provide valuable perspectives to other creators and
                            myself alike. Remembering our progress is an exciting thing that often slips our minds. I'm eager to share
                            all of my errors, mistakes, thoughts, and successes as I continue to grow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;