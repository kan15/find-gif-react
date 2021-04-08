import React from "react";

export const Search = ({ userWord, setUserWord, showGif }) => {
  const handleChange = (e) => {
    setUserWord(e.target.value);
  };

  const handleSubmit = (e) => {
    showGif();
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What do you want to find ?
        <input type="text" value={userWord} onChange={handleChange}></input>
      </label>
    </form>
  );
};
