import React from "react";
import {StyledDisplay} from "./Display.styles";
import {TETROMINOS} from "../../setup";

type DisplayProps = {
    gameOver?: boolean;
    text: string
}

export const Display: React.FC<DisplayProps> = ({gameOver, text}) => {
    return (
        <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
    )
}