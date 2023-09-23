import React, { useState } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import moment from "moment";

const Write = () => {
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState("");


    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file)
            const res = await axios.post("/upload", formData)
            console.log(res.data)
        } catch(err) {
            console.log(err)
        }
    }
    const handleClick = async e => {
        e.preventDefault();
        upload()
    }

    return (
        <div className="container is-max-desktop">
            <div className="columns add">
                <div className="content column">
                    <input className="input mt-6" type="text" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)} />
                    <div className="editorContainer">
                        <ReactQuill
                            theme="snow"
                            value={value}
                            onChange={setValue} />
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
                    <input style={{ display: "none" }} id="file" type="file" onChange={e => setFile(e.target.files[0])}></input>
                    <label htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button className="button">Save as Draft</button>
                        <button className="button" type="button" onClick={handleClick}>Publish</button>
                    </div>


                    <div className="item">
                        <h1>Category</h1>
                        <div className="cat">
                            <input type="radio" checked={cat === "art"} name="cat" value="art" id="art" onChange={e => setCat(e.target.value)} />
                            <label htmlFor="art">Art</label>
                        </div>
                        <div className="cat">
                            <input type="radio" checked={cat === "science"} name="cat" value="science" id="science" onChange={e => setCat(e.target.value)} />
                            <label htmlFor="science">Science</label>
                        </div>
                        <div className="cat">
                            <input type="radio" checked={cat === "technology"} name="cat" value="technology" id="technology" onChange={e => setCat(e.target.value)} />
                            <label htmlFor="technology">Technology</label>
                        </div>
                        <div className="cat">
                            <input type="radio" checked={cat === "cinema"} name="cat" value="cinema" id="cinema" onChange={e => setCat(e.target.value)} />
                            <label htmlFor="cinema">Cinema</label>
                        </div>
                        <div className="cat">
                            <input type="radio" checked={cat === "design"} name="cat" value="design" id="design" onChange={e => setCat(e.target.value)} />
                            <label htmlFor="design">Design</label>
                        </div>
                        <div className="cat">
                            <input type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={e => setCat(e.target.value)} />
                            <label htmlFor="food">Food</label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Write;