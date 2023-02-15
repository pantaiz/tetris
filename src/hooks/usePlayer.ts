import {useCallback, useState} from "react";
import {LetterType, randomTetromino} from "../tetromines";
import {STAGE_WIDTH} from "../gameHelper";

type IntialStateType={
    pos:{
        x:number,
        y:number
    },
    tetromino: Array<Array<0 | String>>,
    colided:boolean
}


export const usePlayer = () => {
  const [player,setPlayer]=useState(<IntialStateType>{
      pos:{x:0,
          y:0},
      tetromino:randomTetromino().shape,
      colided:false
  });

  type upDatePlayerPos={
      x:number,
      y:number,
      collided:boolean
  }
  const upDatePlayerPos = ({x,y,collided}:upDatePlayerPos) => {
      setPlayer(prev=>({
          ...prev,
          pos:{x:(prev.pos.x+=x),y:(prev.pos.y+y)},
          collided}))

  }

  const resetPlayer = useCallback(()=>{
      setPlayer({

          pos:{x:STAGE_WIDTH/2-2,y:0},
          tetromino:randomTetromino().shape,
          colided:false
      })
  },[])
  }
  return [player,upDatePlayerPos,resetPlayer]
}