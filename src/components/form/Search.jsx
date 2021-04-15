import React from "react";

export const Search = ({ userWord, onUserWordChange, onSearchSubmitted }) => {
  const handleChange = (e) => {
    onUserWordChange(e.target.value);
  };

  const handleSubmit = (e) => {
    onSearchSubmitted();
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
