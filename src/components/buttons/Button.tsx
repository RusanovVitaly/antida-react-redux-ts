import React from "react";
import {ButtonStyled} from "./styled";


interface IButton {
    title:string,
    handleClick:Function
}

const ButtonDefault = ({title,handleClick}:IButton) =>(
    <ButtonStyled onClick={()=>handleClick()}>{title}</ButtonStyled>
)

export default ButtonDefault;