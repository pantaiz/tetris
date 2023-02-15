import React, {useState} from "react";

//Components
import {Stage} from "./Stage";
import {Display} from "./Display";
import {StartButton} from "./StartButton";

import {createStage} from "../gameHelper";
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

    const [playe,updatePlayerProps,resetPleyer] = usePlayer()
    const [stage, setStage] = useStage(player)

    console.log('re-render')


    const movePlayer = () => {
        updatePlayerPos({x:dir,y:0})
    }
    const startGame=()=>{
        setStage(createStage());
        resetPlayer()
    }
    const drop=()=>{
        updatePlayerPos({x: 0, Y: 1,collided:false})
    }
    const dropPlayer=()=>{
        drop()
    }

    const move=(e:any)=>{
        if (!gameOver){
            if(e.keyCode===37){
                movePlayer(-1);
            }else if(e.keyCode===39){
                movePlayer(1);
            }else if(e.keyCode===39){
                dropPlayer();
            }
        }
    }

    return (
        <StyledTetrisWrapper role={"button"} tabIndex='0' onKeyDown={e=>move(e)}>
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

                    <StartButton onClick={startGame}  {/*callback={''}*/}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}