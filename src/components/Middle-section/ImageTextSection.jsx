import React from "react";
import "./ImageTextSection.css";

const ImageTextSection = ({
    image,
    title,
    heading,
    text,
    buttonText,
    variant = "default",
    imagePosition = "left"
}) => {
    return (
        <div className={`image-text-wrapper ${variant}`}>
            <div className={`image-text-container ${imagePosition}`}>
                <figure className="image-side square-box">
                    <img src={image} alt={title} />
                    <h1 className="image-title">{title}</h1>
                </figure>
                <div className="text-side square-box">
                    <div className="text-content">
                        <h2>{heading}</h2>
                        <p>{text}</p>
                        <button>{buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageTextSection;