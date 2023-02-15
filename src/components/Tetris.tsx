import React from "react";
import {Stage} from "./Stage";
import {Display} from "./Display";
import {StartButton} from "./StartButton";

import {createStage} from "../gameHelper";
import {StyledTetris} from "./style/StyledTetris";
import {StyledTetrisWrapper} from "./style/StyledTetrisWrapper";
//создаём поле

//Components
export const Tetris = () => {


    return (
            <StyledTetrisWrapper>
                <StyledTetris>
                    <Stage stage={createStage()}/>

                    <aside>
                        <div>
                            <Display gameover={false} text={"Scores"}/>
                            <Display gameover={true} text={"Rows"}/>
                            <Display gameover={true} text={"Level"}/>
                        </div>
                        <StartButton callback={''}/>
                    </aside>
                </StyledTetris>
            </StyledTetrisWrapper>
    )
}