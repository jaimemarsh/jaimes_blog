import React from 'react';
import Love from '../images/love.JPG'
import User from '../images/user.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom';


const Single = () => {
    return (
        <div className="container is-max-widescreen">
            <div className="columns">
                <div className="column single">
                    <h1 className="title">Single Post</h1>

                    <div className="content">
                        <img src={Love} alt="Love" />
                    </div>
                    <div className="is-flex is-flex-direction-row">
                        <div className="user image is-64x64">
                            <img className="image is-rounded" src={User} alt="User" />
                        </div>
                        <div className="info mx-3">
                            <span>Jaime</span>
                            <p>posted two days ago</p>
                        </div>
                        <div className="edit mx-3">
                            <Link to={`/write?edit=2`}><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>

                        </div>
                        <div className="deleted mx-3"><FontAwesomeIcon icon={faTrashCan} size="lg" /></div>
                    </div>

                    <h1>Why Do You Need a Website</h1>
                    <p className="has-text-justified">Nowadays it s expected that if you have a business, you have a website. What does a well done website really do for your website, and does it really make a difference?
                        Accessibility
                        A website for your business is essentially a store front that’s open 24’7 and accessible to everyone, everywhere.
                        Online Presence
                        Being online helps your company
                        Credibility
                        Marketing and Branding
                        Bigger Reach
                        Online sales
                        Data Collection
                        How to articles
                        Showcasing products (current and future)
                        Phone number and address easy access
                        How are people gonna find you without one
                        Facebook business are gross


                    </p>
                </div>
                <div className="column is-one-fifth">
                    <Menu />
                </div>

            </div>


        </div>
    );
};

export default Single;