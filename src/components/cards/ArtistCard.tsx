import React from "react";
import {CardContainer,CardImage,CardTitle} from "./styled";
import {Link} from "react-router-dom";

interface IArtistCard {
    title: string,
    image: string,
    subtitle?:string,
    link: string
}

const ArtistCard = ({title, image, subtitle, link}: IArtistCard) => (
    <CardContainer subtitle={!!subtitle}>
        <Link to={link}>
            <CardImage src={image}/>
            <CardTitle>{title}</CardTitle>
        </Link>
    </CardContainer>
)

export default ArtistCard;