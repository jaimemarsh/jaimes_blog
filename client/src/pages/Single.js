import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Menu from '../components/Menu'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/AuthContext.js'

const Single = () => {

    const [post, setPost] = useState({})

    const location = useLocation()

    const postId = location.pathname.split("/")[2]

    const { currentUser } = useContext(AuthContext)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/${postId}`)
                setPost(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [postId]);
    return (
        <div className="container is-max-widescreen">
            <div className="columns">
                <div className="column single">
                    <h1 className="title">Single Post</h1>

                    <div className="content">
                        <img src={post?.img} alt="Love" />
                    </div>
                    <div className="is-flex is-flex-direction-row">
                        <div className="user image is-64x64">
                            <img className="image is-rounded" src={post.userImg} alt="User" />
                        </div>
                        <div className="info mx-3">
                            <span>{post.username}</span>
                            <p>Posted {moment(post.date).fromNow()}</p>
                        </div>

                        {currentUser.username === post.username && (
                            <div>
                                <div className="edit mx-3">
                                    <Link to={`/write?edit=2`}><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>

                                </div>
                                <div className="deleted mx-3"><FontAwesomeIcon icon={faTrashCan} size="lg" /></div>
                            </div>
                        )}
                    </div>

                    <h1>{post.title}</h1>
                    <p className="has-text-justified">{post.desc}
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