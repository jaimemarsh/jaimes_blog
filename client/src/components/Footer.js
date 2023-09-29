import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <>
            <div className="">
            <footer class="footer">
            {/* <div class="has-text-centered is-size-3 is-size-4-mobile google-font-ss">Interested in working together?
                    Contact Me!</div> */}
            <div class="has-text-centered">
                <address class="is-size-3 is-size-4-mobile defaultFont">
                    <span> <a href="jaimemarsh.com">Portfolio</a></span>
                    <span><a href="https://github.com/jaimemarsh">GitHub</a></span>
                    <span><a href="https://www.linkedin.com/in/jaime-marsh-843871262/">Linkedin</a></span>
                </address>
            </div>
        </footer>
            </div>
        </>
    );
};

export default Footer;