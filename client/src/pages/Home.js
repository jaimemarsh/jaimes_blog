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
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [cat]);

    // const posts = [
    //     {
    //         id: 1,
    //         title: "First Post",
    //         desc: "How to rule the world",
    //         img: Love
    //     },
    //     {
    //         id: 2,
    //         title: "Second Post",
    //         desc: "How to rule the world",
    //         img: Love
    //     },
    //     {
    //         id: 3,
    //         title: "Third Post",
    //         desc: "How to rule the world",
    //         img: Love
    //     },
    // ]

    return (
        <>
            <h1 className="home title"> Home</h1>
            <div className="container is-max-desktop">
                <div className="posts">
                    {posts.map(post => (
                        <div className="post" key={post.id}>
                            <div className="img">
                                <img src={post.img} alt="" />
                            </div>
                            <div className="content">
                                <Link className="link" to={`/post/${post.id}`}>
                                    <h1>{post.title}</h1>
                                    <p>{post.desc}</p>
                                    <button>Read More</button>
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