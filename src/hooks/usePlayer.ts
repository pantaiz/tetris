import {useState} from "react";
import {LetterType, randomTetromino} from "../tetromines";

type IntialStateType={
    pos:{
        x:number,
        y:number
    },
    tetromino: Array<Array<0 | String>>,
    colided:boolean
}
//shape:
export const usePlayer = () => {
  const [player,setPlayer]=useState(<IntialStateType>{
      pos:{x:0,
          y:0},
      tetromino:randomTetromino().shape,
      colided:false
  });
  return player
}
////проверить в функции или возвращается объект