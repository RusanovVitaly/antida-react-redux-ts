import {Dispatch} from "redux";
import {fetchTopArtists, searchArtist, fetchArtistAlbums, fetchArtistAlbumsByName} from "../../requests/lastfm";
import {SET_ARTISTS,SET_ALBUMS} from '../types'



function setArtists(payload:any){
    return{
        type:SET_ARTISTS,
        payload
    }
}
function setAlbums(payload:any){
    return{
        type:SET_ALBUMS,
        payload
    }
}
export function getTopArtist(){
    return (dispatch:Dispatch)=>{
        fetchTopArtists()
            .then(artists=>{
                dispatch(setArtists(artists))
            })
    }
}
export function getSearchedArtist(name:string){
    return(dispatch:Dispatch)=>{
        searchArtist(name)
            .then(artists=>{
                dispatch(setArtists(artists))
            })
    }
}
export function getArtistAlbums(mbid:string|null){
    return(dispatch:Dispatch)=>{
        fetchArtistAlbums(mbid)
            .then(res=>{
                dispatch(setAlbums(res))
            })
    }
}
export function getArtistAlbumsByName(name:string|null){
    return(dispatch:Dispatch)=>{
        fetchArtistAlbumsByName(name)
            .then(res=>{
                dispatch(setAlbums(res))
            })
    }
}