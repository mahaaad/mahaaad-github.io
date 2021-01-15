import React from "react"
import ReactTooltip from 'react-tooltip';

function Links(props){
    return (
        <a href={props.link} target="_blank" style={{float: "right", marginTop: "0.7vw"}}>
            <img data-tip={props.tooltip} className = "links" src={props.imgUrl}/>
            <ReactTooltip backgroundColor="#00000030"/>
        </a>
    )
}

export default Links