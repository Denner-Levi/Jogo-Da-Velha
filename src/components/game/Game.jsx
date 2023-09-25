import Styles from "./game.module.css"
import GameOption from "../gameOption/gameOption"
import { useState, useEffect  } from "react"
import GameInfo from "../gameinfo/gameinfo"


const WinnerTable = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function Game () {
    const [gameState, SetgameState] = useState(Array(9).fill(0));
    const [currentPlayer, SetCurrentPlayer] = useState(1)
    const [Winner, SetWinner] = useState(0)
    const [WinnerLine, setWinnerLine] = useState([])


    const handleCLick = (pos) => {
        if (gameState[pos] === 0 && Winner === 0) {
            let NewGameState = [...gameState]
            NewGameState[pos] = currentPlayer
            SetgameState(NewGameState)
        }
    }


    const verifyGame = () => {
        WinnerTable.forEach( (line) => {
            const values =  line.map((pos) => gameState[pos])
            const sum = values.reduce((sum, value) => sum + value)
            if (sum === 3 || sum === -3) {
            SetWinner(sum / 3)
            setWinnerLine(line)
            }
        } )
    }

    useEffect( () => {
        SetCurrentPlayer(currentPlayer * -1)
        verifyGame()
    }, [gameState] )

    const handleReset = () => {
        SetgameState((Array(9).fill(0)))
        SetWinner(0)
        setWinnerLine([])
    }

    const verifyWinnerLine = (pos) => 
        WinnerLine.find((value) => value === pos) !== undefined
    


    return(
        <div className={Styles.gameContent}>


        <div className={Styles.game}>
            {
                gameState.map((value, pos) => 
                <GameOption
                key={`game-option-pos-${pos}`}
                status={value}
                onclick={() => handleCLick(pos)}
                iswinner={verifyWinnerLine(pos)}
                />)
            }
        </div>
            <GameInfo
            currentPlayer={currentPlayer}
            Winner = {Winner}
            onReset={handleReset}
            />
        </div>

    )
}

export default Game