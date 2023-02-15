import React, {useState} from "react";
import {Stage} from "./Stage";
import {Display} from "./Display";
import {StartButton} from "./StartButton";

/*import {createStage} from "../gameHelper";*/
//Styled component
import {StyledTetris} from "./style/StyledTetris";
import {StyledTetrisWrapper} from "./style/StyledTetrisWrapper";
import {usePlayer} from "../hooks/usePlayer";
import {useStage} from "../hooks/useStage";

//Custom Hooks
//создаём поле

//Components
export const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const player = usePlayer()
    const [stage, setStage] = useStage(player)

    console.log('re-render')

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage}/>

                <aside>
                    {gameOver ?
                        <Display gameover={gameOver} text={"Game Over"}/>
                        :
                        <div>
                            <Display gameover={false} text={"Scores"}/>
                            <Display gameover={true} text={"Rows"}/>
                            <Display gameover={true} text={"Level"}/>
                        </div>}

                    <StartButton callback={''}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}