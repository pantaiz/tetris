import React from "react";

import {TETROMINES} from "../tetromines";
import { StylledCell } from "./style/StylledCell";

type CellPropsType={
    type:0
}

export const Cell = (props:CellPropsType) => {
    return (
        <StylledCell  color={TETROMINES[props.type].color} type={props.type}/>//нужно будет заменить 0 на тип рпиходящей фигуры
    )
}