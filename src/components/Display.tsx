import React from "react";
import {StylledDisplay} from "./style/StylledDislplay";
type DisplayPropsType={
    gameover:boolean,
    text:any
}

export const Display = (props:DisplayPropsType) => {
    return (
    <StylledDisplay gameover={props.gameover}>{props.text}</StylledDisplay>
    )
}