import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RecentPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/posts')
            .then((response) => response.json())
            .then((data) => {
                data.sort((a, b) => new Date(b.date) - new Date(a.date));
                const recentPosts = data.slice(0, 3);
                setPosts(recentPosts);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const split = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const sentences = doc.body.textContent.split('. ');
        // Take the first two sentences
        return sentences.slice(0, 2).join('. ');
    };


    return (
        <div className="section hero">
            <h1 className="title is-size-1 is-size-3-mobile mb-6 has-text-centered google-font-bs mt-6">My Most Recent Posts!</h1>
            <div className="hero-body">
                <div className="columns">
                    {posts.map((post) => (
                        <Link className="link column" to={`/post/${post.id}`}>
                            <h1 className="title google-font-bs is-size-2 has-text-black">{post.title}</h1>
                            <p className="google-font-ss">{split(post.desc)}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecentPosts;
