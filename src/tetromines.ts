type TetrominesType = {
    0: ZeroType
    I: LetterType
    J: LetterType
    L: LetterType
    O: LetterType
    S: LetterType
    T: LetterType
    Z: LetterType
}
type ZeroType = {
    shape: Array<Array<0>>
    color: string
}
export type LetterType = {
    shape: Array<Array<0 | String>>
    color: string
}



export const TETROMINES: TetrominesType = {
    0: {shape: [[0]], color: '0,0,0'},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '80,227,230',
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
        ],
        color: '36,95,223',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
        ],
        color: '223,173,36',
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: '223,217,36',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0],
        ],
        color: '48,211,56',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0],
        ],
        color: '132,61,198',
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0],
        ],
        color: '227,78,78',
    },
}

export const randomTetromino = () => {
    const tetromino = "IJLOSTZ";
    let randTetromino = tetromino[Math.floor(Math.random() * tetromino.length)];
    let randTetrominoObject:LetterType=TETROMINES[0]
    switch (randTetromino) {
        case 'I':
        case 'J':
        case 'L':
        case 'O':
        case 'S':
        case 'T':
        case 'Z':
            randTetrominoObject = TETROMINES[randTetromino]
    }
    return randTetrominoObject
}

console.log(randomTetromino())
console.log(randomTetromino())
console.log(randomTetromino())
console.log(randomTetromino())
console.log(randomTetromino())
