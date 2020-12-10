import React from "react";
import {CardContainer,CardImage,CardTitle,CardSubtitle} from "./styled";



interface IAlbumCard{
    title: string,
    image: string,
    subtitle?:string,
}


const AlbumCard = ({title, image, subtitle}: IAlbumCard) => (
    <CardContainer subtitle={!!subtitle}>
            <CardImage src={image}/>
            <CardTitle >{title}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
    </CardContainer>
)

export default AlbumCard;