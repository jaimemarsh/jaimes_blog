import React from 'react';
import jaimeImg from '../images/jaimeImg.png';
import gitHub from '../images/gitHub.png'
import linkedIn from '../images/linkedIn.png'
import port from '../images/port.png'



const Developer = () => {

    return (
        <div className="section hero">
            <div className="hero-body">
                <div className="columns">
                    <div className="column ml-6">
                        <div className="image-grid is-hidden-mobile">
                            <a href="https://github.com/jaimemarsh" ><img className="github zoom " src={gitHub} alt="" /></a>
                            <img className="jaiimg" src={jaimeImg} alt="" />
                            <a href="https://www.linkedin.com/in/jaime-marsh/"><img className="linkedIn zoom" src={linkedIn} alt="" /></a>
                            <a href="https://jaimemarsh.com"> <img className="portfolio zoom" src={port} alt="" /></a>
                        </div>
                    </div>
                    <div className="column has-text-left">
                        <h1 className="title is-size-1 is-size-3-mobile google-font-pd mb-6 has-text-centered google-font-bs mt-6">About The Developer</h1>
                        <p className="is-size-4 is-size-5-mobile has-text-justified google-font-ss">
                            <span className="google-font-bs is-size-3 is-size-4-mobile"><strong>Hi! My name is Jaime Marsh,</strong></span> and I am a Web Developer. I love to be creative
                            in my day-to-day life, and programming has become my favorite way for me to share that
                            creativity with you. This blog is an exciting place where I can share my thoughts,
                            document errors and their solutions, track my progress in securing new job opportunities,
                            and be completely honest about my experiences as a creator.
                            To see other projects that I created check out my portfolio <a href="https://jaimemarsh.com"><span>here! </span></a>
                            If you’d like to work with me on more creative things, message me on LinkedIn <a href="https://www.linkedin.com/in/jaime-marsh/"><span>here! </span></a>
                            <br></br>
                            {/* <strong><Link to="/About"> <u>Click Here for frequently asked questions</u></Link></strong> */}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Developer;