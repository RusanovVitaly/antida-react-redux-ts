import React from "react";
import Header from "../components/layout/Header";


const MainLayout =  (props:any) => (
    <React.Fragment>
        <Header/>
        {props.children}
    </React.Fragment>
)

export default MainLayout;