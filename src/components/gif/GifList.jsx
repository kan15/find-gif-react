import React from "react";
import { GifItem } from "./GifItem";
import { Spinner } from "./../spinner/Spinner";

export const GifList = ({ gifs, error, isLoaded }) => {
  console.log(error);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoaded) {
    return <Spinner />;
  } else {
    return (
      <div className="list-gifs">
        {gifs.map((gif) => {
          return <GifItem key={gif.id} gif={gif} />;
        })}
      </div>
    );
  }
};
