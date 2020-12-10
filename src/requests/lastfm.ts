import axios from 'axios';

//static data
const BASE_URL: string = 'http://ws.audioscrobbler.com';
const API_KEY: string = 'df420ec3ed2951c5c581cb2d48493568';

//testing data
const TOP_PER_PAGE: number = 24;

export const fetchTopArtists = () => {
    return axios.get(`${BASE_URL}/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=${TOP_PER_PAGE}`)
        .then(result => {
            return result.data.artists.artist
        })
        .catch(error => {
            console.log(error)
        })
}

export const searchArtist = (name: string) => {
    return axios.get(`${BASE_URL}/2.0/?method=artist.search&artist=${name}&api_key=${API_KEY}&format=json`)
        .then(result => {
            return result.data.results.artistmatches.artist
        })
        .catch(error => {
            console.log(error)
        })
}
export const fetchArtistAlbums = (mbid: string | null) => {
    return axios.get(`${BASE_URL}/2.0/?method=artist.gettopalbums&mbid=${mbid}&api_key=${API_KEY}&format=json`)
        .then(res => {
            return res.data.topalbums.album
        })
}
export const fetchArtistAlbumsByName = (artist: string | null) => {
    return axios.get(`${BASE_URL}/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${API_KEY}&format=json`)
        .then(res => {
            return res.data.topalbums.album
        })
}
