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
                        <h1 className="title is-size-1 is-size-3-mobile google-font-pd mb-6 has-text-centered google-font-bs">About The Blog</h1>
                        <p className="is-size-4 is-size-5-mobile has-text-justified google-font-ss">
                            My name is Jaime Marsh and I am a Web Developer. I love to be creative in my day to day life and learned to
                            program as a way to create things to help other people. This is a small project that, with more time, could turn
                            into something bigger. To see other projects that I created check out my portfolio <a href="https://jaimemarsh.com"><span>here! </span></a>
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

export default About;