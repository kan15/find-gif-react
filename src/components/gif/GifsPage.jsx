import React, { useState } from "react";
import { Search } from "./../form/Search";
import { fetchUrl } from "../../api/fetchUrl";
import "./GifsPage.css";
import { GifList } from "./GifList";

export const GifsPage = () => {
  const [requestResult, setRequestResult] = useState({
    error: null,
    isLoaded: false,
    gifs: [],
    userWord: "",
  });

  const setUserWord = (value) => {
    setRequestResult((prevState) => ({
      ...prevState,
      userWord: value,
    }));
  };

  const showGif = () => {
    fetch(fetchUrl(requestResult.userWord))
      .then((res) => res.json())
      .then(
        (result) => {
          setRequestResult((request) => {
            return { ...request, isLoaded: true };
          });
          setTimeout(() => {
            setRequestResult((request) => {
              return { ...request, isLoaded: false };
            });
          }, 1000);
          setRequestResult((request) => {
            return { ...request, gifs: result.data, userWord: "" };
          });
        },
        (error) => {
          setRequestResult((request) => {
            return { ...request, isLoaded: true, error: error };
          });
        }
      );
  };

  return (
    <>
      <Search
        userWord={requestResult.userWord}
        onUserWordChange={setUserWord}
        onSearchSubmitted={showGif}
      />
      <GifList
        gifs={requestResult.gifs}
        error={requestResult.error}
        isLoaded={requestResult.isLoaded}
      />
    </>
  );
};
