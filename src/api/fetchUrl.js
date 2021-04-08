export const fetchUrl = (() => {
  const GIPHY_URL = 'https://api.giphy.com/v1/stickers/search?'; 
  const API_KEY = 'E26iZ0BIEszi7RA4GeEmXzJPRpkSeQ6m';
  
  const getFetchPostsUrl = (userWord) => {
    const searchParams = new URLSearchParams();
    searchParams.append('api_key', API_KEY);
    searchParams.append('q', userWord);
    searchParams.append('limit', 5);
    const url = GIPHY_URL + searchParams;
    return url;
  }
  
  return {getFetchPostsUrl};
})();
