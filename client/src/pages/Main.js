import React from 'react';
// import Logo from '../images/getTechy.png';
import Computer from '../images/computer.png';
import getTech from '../images/getTech.png';
import About from '../components/About'
import Cat from '../components/Cat'
import Developer from '../components/Developer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { } from '@fortawesome/free-solid-svg-icons'


const Main = () => {
    return (

        <div className="">
            <div className="section is-small mb-6">
                <div className="">
                    <div className="columns">
                        <div className="logoImg column centered-content has-text-centered">
                            <img src={getTech} alt="logo" />

                        </div>
                        <div className="column has-text-centered">
                            <img src={Computer} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
            <Cat />
            <About />
            <Developer />
        </div >

    );
};

export default Main;