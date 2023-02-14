import React from "react";
type DisplayPropsType={
    gameover:any,
    text:any
}
export const Display = (props:DisplayPropsType) => {
    return (
    <div>{props.text}</div>
    )
}