import React from "react";
import { GifItem } from "./GifItem";
import { Spinner } from "./../spinner/Spinner";

export const GifList = ({ gifs, error, isLoading }) => {
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoading) {
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
