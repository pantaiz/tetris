import React from "react";
import {StyledStartButton} from "./StartButton.styles";

type StartButtonProps = {
    callback: () => void;
}


export const StartButton: React.FC<StartButtonProps> = ({callback}) => {
    return (
        <StyledStartButton onClick={callback}>Start game</StyledStartButton>
    )
}