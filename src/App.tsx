import React, {useState} from 'react';
// Styles
import {StyledTetrisWrapper, StyledTetris} from './App.styles';
import {Display} from "./components/Display/Display";
import {StartButton} from "./components/StartButton/StartButton";
import {Stage} from "./components/Stage/Stage";
import {createStage, isColliding} from "./gameHelpers";
import {usePlayer} from "./hooks/usePlayer";
import {useStage} from "./hooks/useStage";
import {useInterval} from "./hooks/useInterval";
import {useGameStatus} from "./hooks/useGameStatus";

const App: React.FC = () => {
    const [dropTime, setDropTime] = React.useState<null | number>(null)
    const [gameOver, setGameOver] = React.useState<boolean>(true);

    const gameArea = React.useRef<HTMLDivElement>(null)

    const {player, updatePlayerPos, resetPlayer, playerRotate} = usePlayer();
    const {stage, setStage, rowsClered} = useStage(player, resetPlayer)
    const {score, setScore, rows, setRows, level, setLevel} = useGameStatus(rowsClered)

    const movePlayer = (dir: number) => {
        if (!isColliding(player, stage, {x: dir, y: 0})) {
            updatePlayerPos({x: dir, y: 0, collided: false})
        }
    }

    const keyUp = ({keyCode}: { keyCode: number }): void => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000 / level + 200);
            }
        }

    }
    const handleStartGame = (): void => {
        if (gameArea.current) gameArea.current.focus();
        setStage(createStage())
        setDropTime(1000)
        resetPlayer()
        setScore(0)
        setLevel(1)
        setRows(0)
        setGameOver(false)


    }

    const move = ({keyCode, repeat}: { keyCode: number, repeat: boolean }): void => {
        if (!gameOver){
            if (keyCode === 37) {
                movePlayer(-1)
            } else if (keyCode === 39) {
                movePlayer(1)
            } else if (keyCode === 40) {
                if (repeat) return
                setDropTime(30)
            } else if (keyCode === 38) {
                playerRotate(stage)
            }
        }
    }
    const drop = (): void => {

        if (rows > level * 10) {
            setLevel(prev => prev + 1);
            setDropTime(1000 / level + 200)
        }

        if (!isColliding(player, stage, {x: 0, y: 1})) {

            updatePlayerPos({x: 0, y: 1, collided: false})
        } else {
            if (player.pos.y < 1) {
                console.log("GAME OVER!")
                setGameOver(true)
                setDropTime(null)

            }
            updatePlayerPos({x: 0, y: 0, collided: true})
        }
    }

    useInterval(() => {
        drop();
    }, dropTime)

    return (
        <StyledTetrisWrapper role='button' tabIndex={0} onKeyDown={move} onKeyUp={keyUp} ref={gameArea}>
            <StyledTetris>
                <div className={"display"}>
                    {gameOver ? (
                            <>
                                <Display text={"Game Over!"} gameOver={gameOver}/>
                                <StartButton callback={handleStartGame}/>
                            </>)
                        : (
                            <>
                                <Display text={`Score:${score}`}/>
                                <Display text={`Rows:${rows}`}/>
                                <Display text={`Level:${level}`}/>
                            </>
                        )
                    }
                </div>
                <Stage stage={stage}/>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default App;
