import React,{useState} from "react";
import SearchInput from "../inputs/SearchInput";
import ButtonDefault from "../buttons/Button";
import {HeaderContainer} from "./styled";
import {useDispatch} from "react-redux";
import {getSearchedArtist} from "../../redux/actions/artists";


const Header = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const sendSearch = () => {
        if(search){
            dispatch(getSearchedArtist(search))
        }
    }
    return (
        <HeaderContainer>
            <SearchInput placeholder='Введите искомого исполнителя' value={search}
                         HandleInput={(e: any) => setSearch(e.target.value)}/>
            <ButtonDefault title='Найти' handleClick={() => sendSearch()}/>
        </HeaderContainer>
    )
}

export default Header;