import React from "react";
import ArtistHeader from "../components/layout/ArtistHeader";


const ArtistLayout =  (props:any) => (
    <React.Fragment>
        <ArtistHeader/>
        {props.children}
    </React.Fragment>
)


export default ArtistLayout;