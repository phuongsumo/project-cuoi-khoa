import React, { useEffect } from "react"
import BodyNews from "./bodyNews/BodyNews";
const News = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <BodyNews />
        </>
    )
}
export default News