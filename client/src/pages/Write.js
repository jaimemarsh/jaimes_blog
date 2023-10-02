import React, { useState } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons'

const Write = () => {

    const state = useLocation().state
    const [value, setValue] = useState(state?.title || "");
    const [title, setTitle] = useState(state?.desc || "");
    const [file] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");


    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file)
            const res = await axios.post("/upload", formData)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const imgUrl = await upload();
            if (state) {
                await axios.put(`/posts/${state.id}`, {
                    title,
                    desc: value,
                    cat,
                    img: file ? imgUrl : "",
                });
            } else {
                const formattedDate = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                await axios.post(`/posts/`, {
                    title,
                    desc: value,
                    cat,
                    img: file ? imgUrl : "",
                    date: formattedDate,
                });
            }
        } catch (err) {
            console.error("An error occurred:", err);
        }
    };


    return (
        <div className="container is-max-desktop">
            <div className="section is-size-3">
                <h1 className="google-font-bs">Hey! Remember to Write FOR YOU first! </h1>
                <h1 className="google-font-bs">You're doing amazing<FontAwesomeIcon className="ml-4" icon={faFaceSmileBeam} /></h1>
            </div>
            <div className="columns add">
                <div className="content column">
                    <input className="input mb-6 google-font-bs" type="text" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)} />
                    <div className="editorContainer ">
                        <ReactQuill
                            theme="snow"
                            value={value}
                            onChange={setValue} />
                    </div>
                    <button className="button my-3" type="button" onClick={handleClick}>Publish</button>
                </div>

                {/* <div className="menu column is-one-fifth">
                    {/* <span className="item"> */}
                {/* <h1>Publish</h1> */}
                {/* <span> <b>Statue: </b> Draft </span> */}
                {/* </span>
                    <span className="item">
                        <span> <b>Visibility: </b> Public </span>
                    </span> */}
                {/* <input style={{ display: "none" }} id="file" type="file" onChange={e => setFile(e.target.files[0])}></input>
                    <label htmlFor="file">Upload Image</label> */}
                {/* <div> */}
                {/* <button className="button">Save as Draft</button> */}
                {/* </div>  */}


                <div className="item">
                    <h1 className="google-font-bs">Category</h1>
                    <div className="cat">
                        <input type="radio" checked={cat === "website"} name="cat" value="website" id="website" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="website">Website Development</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "errors"} name="cat" value="errors" id="errors" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="errors">Fixing Errors</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "education"} name="cat" value="education" id="education" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="education">Education</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "skills"} name="cat" value="skills" id="skills" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="skills">Life Skills</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "thoughts"} name="cat" value="thoughts" id="thoughts" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="thoughts">My Thoughts</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "tbd"} name="cat" value="tbd" id="tbd" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="tbd">tbd</label>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Write;