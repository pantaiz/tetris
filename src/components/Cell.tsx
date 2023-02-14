import React from "react";

import {TETROMINES} from "../tetromines";
import { StylledCell } from "./style/StylledCell";

type CellPropsType={
    type:string
}

export const Cell = (props:CellPropsType) => {
    return (
        <StylledCell  color={TETROMINES["L"].color} /*form={'L'}*/>
            Cell
        </StylledCell>
    )
}