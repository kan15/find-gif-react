import React, { useState } from "react";
import { Search } from "./../form/Search";
import { fetchUrl } from "./../../api/fetchUrl";
import "./GifsPage.css";
import { GifList } from "./GifList";

export const GifsPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [userWord, setUserWord] = useState("");

  const showGif = () => {
    fetch(fetchUrl.getFetchPostsUrl(userWord))
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTimeout(() => setIsLoaded(false), 1000);
          setGifs(result.data);
          setUserWord('');
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  return (
    <div>
      <Search userWord={userWord} setUserWord={setUserWord} showGif={showGif} />
      <GifList gifs={gifs} error={error} isLoaded={isLoaded} />
    </div>
  );
};
