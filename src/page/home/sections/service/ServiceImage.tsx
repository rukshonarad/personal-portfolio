import React from "react";
import forward from "./forward.png";
import upload from "./upload.png";
import designe from "./designe.png";
import infinite from "./infinite.png";
import "./ImageWrapper.css";
const ImageWrapper = () => {
    return (
        <div className="image-wrapper">
            <div className="image-container">
                <img src={forward} alt="Forward" />
                <p>Forward</p>
            </div>
            <div className="image-container">
                <img src={upload} alt="Upload" />
                <p>Upload</p>
            </div>
            <div className="image-container">
                <img src={designe} alt="Designe" />
                <p>Designe</p>
            </div>
            <div className="image-container">
                <img src={infinite} alt="Infinite" />
                <p>Infinite</p>
            </div>
        </div>
    );
};

export default ImageWrapper;
