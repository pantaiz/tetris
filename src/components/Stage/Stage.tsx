import React from "react";
import {StyledStage} from "./Stage.styles";
import {TETROMINOS} from "../../setup";
import Cell from "../Cell/Cell";


type STAGECELL = [keyof typeof TETROMINOS, string]
export type STAGE = STAGECELL[][]

type StageProps = {
    stage: STAGE
}

export const Stage: React.FC<StageProps> = ({stage}) => {
    return (
        <StyledStage>
            {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
        </StyledStage>
    )
}