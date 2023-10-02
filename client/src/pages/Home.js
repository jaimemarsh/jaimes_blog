import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';
import axios from 'axios'

const Home = () => {
    const [posts, setPosts] = useState([])

    const cat = useLocation().search


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${cat}`)
                const reversedPosts = res.data.reverse();
                setPosts(reversedPosts)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [cat]);

    const getText =(html)=>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }


    const split = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const sentences = doc.body.textContent.split('. ');
        // Take the first two sentences
        return sentences.slice(0, 2).join('. ');
    };

    return (
        <>
            <h1 className="home title google-font-bs p-5">All Posts</h1>
            <div className="container is-max-desktop">
                <div className="posts">
                    {posts.map(post => (
                        <div className="post" key={post.id}>
                            <div className="img">
                                <img src={post.img} alt="" />
                                {/* <img src={`../upload/${post.img}`} alt="" /> */}
                            </div>
                            <div className="content">
                                <Link className="link" to={`/post/${post.id}`}>
                                    <h1 className="google-font-bs"> {getText(post.title)}</h1>
                                    <p className="google-font-ss">{split(post.desc)}</p>
                                    <button className="button is-danger google-font-ss">Read More</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Home;