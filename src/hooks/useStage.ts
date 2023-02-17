import React from "react";
import {createStage} from "../gameHelpers";


import type {PLAYER} from "./usePlayer";

export type STAGECELL = [string | number, string];
export type STAGE = STAGECELL[][]


export const useStage = (player: PLAYER, resetPlayer: () => void) => {
    const [stage, setStage] = React.useState(createStage);
    const [rowsClered, setRowsClered] = React.useState(0);



    React.useEffect(() => {
        if (!player.pos) return;

        setRowsClered(0)

        const sweepRows = (newStage: STAGE): STAGE => {
            return newStage.reduce((ack, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsClered(prev => prev + 1)
                    ack.unshift(new Array(newStage[0].length).fill([0,'clear'] as STAGECELL))
                    return ack
                }
                ack.push(row)
                return ack
            },[] as STAGE)
        }


        const updateStage = (prevStage: STAGE): STAGE => {
            //First Flush the stage
            //if its says 'clear' bot don't h its means that its players move and should be clearave a 0
            const newStage = prevStage.map(
                row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)) as STAGECELL[]
            );

            //Then draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [value, `${player.collided ? 'merged' : 'clear'}`];
                    }
                })
            });
            if (player.collided) {
                resetPlayer()
                return sweepRows(newStage)
            }

            return newStage
        }
        setStage(prev => updateStage(prev))
    }, [player.collided, player.pos?.x, player.pos?.y, player.tetromino])
    return {stage, setStage,rowsClered}
}