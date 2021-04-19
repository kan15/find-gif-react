const GIPHY_URL = "https://api.giphy.com/v1/stickers/search?";
const API_KEY = "E26iZ0BIEszi7RA4GeEmXzJPRpkSeQ6m";

const fetchUrl = (userWord) => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    q: userWord,
    limit: 5,
  });
  const url = GIPHY_URL + searchParams.toString();
  return url;
};

export const getResult = (userWord) => {
  return fetch(fetchUrl(userWord)).then((res) => res.json());
};
