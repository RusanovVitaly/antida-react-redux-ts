import React, {Key, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getArtistAlbums, getArtistAlbumsByName} from "../redux/actions/artists";
import {rootState} from "../redux/reducers/rootReducer";
import AlbumCard from "../components/cards/AlbumCard";
import Scrollbar from "react-scrollbars-custom";
import ArtistLayout from "../layout/ArtistLayout";
import {CardsContainer} from './styled'


const ArtistPage = () => {
    const albums = useSelector((state: rootState) => state.dataReducer.albums)
    const dispatch = useDispatch();

    const getAlbums = () => {
        const url = window.location.search;
        let search = new URLSearchParams(url);
        if (search.has('id' || search.has('artist'))) {
            let mbid: string | null = search.get('id')
            let artist: string | null = search.get('artist');
            if (!mbid && !artist) {
                window.location.href = '/';
            }
            if (mbid) dispatch(getArtistAlbums(mbid));
            if (artist) dispatch(getArtistAlbumsByName(artist))
        }
    }
    useEffect(() => {
        getAlbums();
    }, [])

    return (
        <ArtistLayout>
            <Scrollbar style={{width: '100%', height: window.innerHeight - 60}}>
                <CardsContainer>
                    {albums.map((item: any, key: Key) => {
                        if (item.name !== "(null)") {
                            return (
                                <AlbumCard key={key}
                                           image={item.image[2][`#text`] ? item.image[2][`#text`] : '../images/no-image.png'}
                                           title={item.name}
                                           subtitle={`Прослушано: ${item.playcount}`}/>
                            )
                        }
                    })}
                </CardsContainer>
            </Scrollbar>
        </ArtistLayout>
    )
}

export default ArtistPage;