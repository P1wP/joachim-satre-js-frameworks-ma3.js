import React from "react";
import Heading from "../Heading";
import HomeContent from "./HomeContent";

export function Home (){
    return(
        <>
        <Heading title="Home" />
        <HomeContent>
            <h3>HomeContent.js</h3>
            <p>Any content inside HomeContent tags</p>
            <br/>
            Renders inside a Div</HomeContent>
        </>
    );
}

export default Home;
