import React, { useState } from "react";
import { Search } from "./../form/Search";
import { getResult } from "../../api/getResult";
import "./GifsPage.css";
import { GifList } from "./GifList";

export const GifsPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [userWord, setUserWord] = useState("");

  const showGif = () => {
    getResult(userWord).then(
      (result) => {
        setGifs(result.data);
        setIsLoading(false);
        setUserWord("");
      },
      (error) => {
        setError(error);
        setGifs([]);
        setIsLoading(false);
        setUserWord("");
      }
    );
  };

  return (
    <>
      <Search
        userWord={userWord}
        onUserWordChange={setUserWord}
        onSearchSubmitted={() => {
          setIsLoading(true);
          showGif();
        }}
      />
      <GifList 
        gifs={gifs} 
        error={error} 
        isLoading={isLoading} 
      />
    </>
  );
};
