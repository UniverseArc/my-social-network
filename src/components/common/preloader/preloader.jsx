import React from "react";
import preloader from "../../../img/oval.svg"
import classes from "./preloader.module.css"

const Preloader = () => {
    return(
        <div className={classes.preloaderStyles}>
            <img src={preloader} alt="svg"></img>
        </div>
    )
}

export default Preloader