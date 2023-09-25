import axios from "axios";

/* 
const authHeader = () => {
    return { Authorization: '', };
} */

const API_URL = "https://kitsu.io/api/edge/"

export const getAnime = async (sortGenres: string, searchText:string) => {
    try {
        console.log('searchText', searchText)
        const filterParam = searchText !=='' ? (sortGenres !== 'All' ? "anime?filter[text]=" + searchText + "?filter[categories]=" + sortGenres : 'anime?filter[text]=' + searchText) :'anime';
        const result = await axios.get(API_URL + filterParam);
        return result.data.data;

    } catch (e) {
        throw e;
    }
};

export const getAnimeGenres = async () => {
    try {
        const result = await axios.get(API_URL + 'genres');
        return result.data.data;

    } catch (e) {
        throw e;
    }
};

export const getAnimeEpisode = async (sortGenres: string) => {
    try {
        const filterParam = sortGenres !== 'All' ? "trending/anime?filter[categories]=" + sortGenres : 'trending/anime?page[limit]=100&page[offset]=0';
        const result = await axios.get(API_URL + filterParam);
        console.log('result',result.data)
        return result.data.data;  //arr.slice(Math.max(arr.length - 5, 0))

    } catch (e) {

        throw e;
    }
};