import React from "react";

import {TETROMINES} from "../tetromines";
import { StylledCell } from "./style/StylledCell";

type CellPropsType={
    type:string
}

export const Cell = (props:CellPropsType) => {
    return (
        <StylledCell  color={TETROMINES[0].color} type={props.type}/>//нужно будет заменить 0 на тип рпиходящей фигуры
    )
}