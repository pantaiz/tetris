import React from "react";
import {Cell} from "./Cell";
import {StylledStage} from "./style/StylledStage";

export type StagePropsType = {
    stage: any
}

export const Stage = (props: StagePropsType) => {
    return (
        <StylledStage width={props.stage[0].length} height={props.stage.length}>
            {
            props.stage.map((row:Array<any>)=>row.map((cell:any,x:any)=><Cell key={x} type={cell[0]}/>))
            }
        </StylledStage>
    )
}