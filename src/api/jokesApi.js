import { BASE_URL } from "./apiConfig.js"

const getSearchingJoke = async (searchingValue) => {
    const responseSearchingJoke = await fetch(`${BASE_URL}/search?query=${searchingValue}`);

    const searchingJoke = await responseSearchingJoke.json();

    if(!searchingJoke) return false;

    return searchingJoke;
}

export {
    getSearchingJoke
}