import React from 'react';
// import Logo from '../images/getTechy.png';
import Computer from '../images/computer.png';
import getTech from '../images/getTech.png';
import getTechy from '../images/getTechy.png';
import About from '../components/About'
import Cat from '../components/Cat'
import Developer from '../components/Developer';
import Recent from '../components/RecentPosts'


const Main = () => {
    return (

        <div className="">
            <div className="section">
                <div className="">
                    <div className="columns">
                    {/* <h1 className="is-hidden-tablet title is-size-1 is-size-3-mobile google-font-pd mb-6 has-text-centered google-font-bs mt-6">Hi! Welcome to:</h1> */}
                        <div className="devImg column centered-content has-text-centered is-hidden-mobile">
                            <img src={getTech} alt="logo" />
                        </div>
                        <div className="devImg column has-text-centered is-hidden-mobile">
                            <img src={Computer} alt="logo" />
                        </div>
                        <div className="mobileImg is-hidden-tablet">
                            <img src={getTechy} alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <Cat />
            <Recent />
            <About />
            <Developer />
        </div >

    );
};

export default Main;