import React from "react";
import Heading from "../Heading";
import NewsList from "./NewsList";

export function News(){
    return(
        <>
            <Heading title="News" />
            <NewsList />
        </>
    );
}

export default News;