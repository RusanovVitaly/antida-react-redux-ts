import React from "react";
import {HeaderContainer,HeaderText} from "./styled";
import {Link} from "react-router-dom";


const ArtistHeader = () =>{


    return (
        <HeaderContainer>
            <Link to='/'>
               <HeaderText>Вернуться на главную</HeaderText>
            </Link>
        </HeaderContainer>
    )
}

export default ArtistHeader;