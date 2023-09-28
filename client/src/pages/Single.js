import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Menu from '../components/Menu'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/AuthContext.js'

const Single = () => {

    const [post, setPost] = useState({})

    const location = useLocation()
    const navigate = useNavigate()

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

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${postId}`)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className="container is-max-widescreen">
            <div className="columns">
                <div className="column single">
                    <h1 className="title">Single Post</h1>

                    <div className="content">
                        <img src={post?.img} alt="Love" />
                    </div>
                    <div className="is-flex is-flex-direction-row">

                        {post.userImg &&
                            <div className="user image is-64x64">
                                <img className="image is-rounded" src={post.userImg} alt="User" />
                            </div>
                        }

                        <div className="info mx-3">
                            <span>{post.username}</span>
                            <p>Posted {moment(post.date).fromNow()}</p>
                        </div>
                        {currentUser.username === post.username && (
                            // EDIT
                            <div>
                                <div className="edit mx-3">
                                    <Link to={`/write?edit=2`} state={post}><FontAwesomeIcon icon={faPenToSquare} size="lg" /></Link>
                                </div>
                                {/* DELETE */}
                                <div onClick={handleDelete} className="deleted mx-3"><FontAwesomeIcon icon={faTrashCan} size="lg" /></div>
                            </div>
                        )}
                    </div>

                    <h1>{getText(post.title)}</h1>
                    <p className="has-text-justified">{getText(post.desc)}
                    </p>
                </div>
                <div className="column is-one-fifth">
                    <Menu cat={post.cat} />
                </div>

            </div>


        </div>
    );
};

export default Single;