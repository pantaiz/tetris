import React, {useState,useEffect} from "react";
import {createStage} from "../gameHelper";

export const useStage = (player,resetPlayer) => {
    const [stage, setStage] = useState(createStage());
        useEffect(()=>{
            const updateStage = prevStage=> {
                //first
                const newStage=prevStage.map(row=>
                    row.map(cell=> (cell[1]==='clear'?[0,'clear']:cell))
                );
              player.tetromino.forEach((row,y)=>{
                  row.forEach((value,x)=>{
                      if (value!=0){
                          newStage[y+player.pos.y][x+player.pos.x]= [
                              value,
                              `${player.colided?'merger':'clear'}`,
                          ]
                      }

                  })
              });
              return newStage
            };
            setStage(prev=>updateStage(prev) )
        },[player.colided])


    return[stage, setStage]
}