import React, { useState } from "react";
import { Search } from "./../form/Search";
import { getResult } from "../../api/getResult";
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

  const showHideSpinner = (value) => {
    setRequestResult((prevState) => ({
      ...prevState,
      isLoaded: value
    }));
  }

  const showGif = () => {
      getResult(requestResult.userWord)
      .then(
        (result) => {
          setRequestResult((request) => {
            return { ...request, gifs: result.data, isLoaded: false, userWord: "" };
          });
        },
        (error) => {
          setRequestResult((request) => {
            return { ...request, isLoaded: true, error: error};
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
        showHideSpinner={showHideSpinner}
      />
      <GifList
        gifs={requestResult.gifs}
        error={requestResult.error}
        isLoaded={requestResult.isLoaded}
      />
    </>
  );
};
