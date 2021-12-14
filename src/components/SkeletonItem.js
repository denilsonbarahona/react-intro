import React from "react";
import "../styles/skeleton.css";


function Skeleton(){
    return (
        <li className="Skeleton">
            <span className="Skeleton-icon"></span>
            <div className="Skeleton-item"></div>            
        </li>)
}

export {Skeleton}
