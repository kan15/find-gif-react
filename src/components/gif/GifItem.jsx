import React from "react";
import "./GifItem.css";

export const GifItem = ({ gif }) => {
  return (
    <div className="gif-wrap">
      <img src={`${gif.images.original.url}`} alt={`${gif.title}`} />
    </div>
  );
};
