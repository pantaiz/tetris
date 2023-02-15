import React from "react";
import {StyledStartButton} from "./style/StylledStartButton";

type StartButtonPropsType={
    callback:any
}

export const StartButton = (props:StartButtonPropsType) => {
    return (
    <StyledStartButton onClick={props.callback}>Start Game</StyledStartButton>
    )
}