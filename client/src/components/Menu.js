import React from 'react';
import Love from '../images/love.JPG'


const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "First Post",
            desc: "How to rule the world",
            img: Love
        },
        {
            id: 2,
            title: "Second Post",
            desc: "How to rule the world",
            img: Love
        },
        {
            id: 3,
            title: "Third Post",
            desc: "How to rule the world",
            img: Love
        },
    ]
    return (
        <div className="menu is-flex is-flex-direction-column my-6">
            <h1 className="is-size-3">Other Posts you may like</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <div className="my-5">
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button className="button">Read More</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Menu;