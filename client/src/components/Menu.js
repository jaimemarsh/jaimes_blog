import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Menu = ({cat}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`)
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [cat]);

 
    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    
    return (
        <div className="menu is-flex is-flex-direction-column my-6">
            <h1 className="is-size-3">Other Posts you may like</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <div className="my-5">
                    {/* <img src={`../upload/${post?.img}`} alt="" /> */}
                    <h2>{getText(post.title)}</h2>
                    <button className="button">Read More</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Menu;