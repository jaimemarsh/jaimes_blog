import React, { useState } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');
    console.log(value)

    return (
        <div className="container is-max-desktop">
            <div className="columns add">
                <div className="content column">
                    <input className="input mt-6" type="text" placeholder="Title" />
                    <div className="editorContainer">
                        <ReactQuill theme="snow" value={value} onChange={setValue} />
                    </div>
                </div>

                <div className="menu column is-one-fifth">
                    <span className="item">
                        <h1>Publish</h1>
                        <span> <b>Statue: </b> Draft </span>
                    </span>
                    <span className="item">
                        <span> <b>Visibility: </b> Public </span>
                    </span>
                    <input style={{ display: "none" }} id="file" type="file"></input>
                    <label htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button className="button">Save as Draft</button>
                        <button className="button">Update</button>
                    </div>


                    <div className="item">
                        <h1>Category</h1>
                        <input type="radio" name="cat" value="art" id="art"/>
                        <lavel htmlFor="art">Art</lavel>
                        {/* can add more */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Write;