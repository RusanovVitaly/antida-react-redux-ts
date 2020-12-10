import React,{useEffect} from "react";
import MainLayout from "../layout/MainLayout";
import {useSelector,useDispatch} from "react-redux";
import {rootState} from "../redux/reducers/rootReducer";
import {getTopArtist} from "../redux/actions/artists";
import ArtistCard from "../components/cards/ArtistCard";
import Scrollbar from "react-scrollbars-custom";
import {CardsContainer} from './styled'

const MainPage = () =>{
    const data = useSelector((state:rootState)=>state.dataReducer.data)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTopArtist());
    },[dispatch])

    return(
        <MainLayout>
            <Scrollbar style={{width:'100%',height:window.innerHeight- 60}}>
                <CardsContainer>
                    {data.length > 0?data.map((item:any,key:number)=>(
                        <ArtistCard key={key} title={item.name} image={item.image[1][`#text`]} link={`/artist?id=${item.mbid}&artist=${item.name}`}/>
                    )):<div>К сожалению, ничего не найдено, проверьте правильность ввода и повторите снова!</div>}
                </CardsContainer>
            </Scrollbar>
        </MainLayout>
    )
}

export default MainPage;