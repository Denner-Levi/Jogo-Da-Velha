import Styles from "./game.module.css"
import GameOption from "../gameOption/gameOption"
import { useState, useEffect  } from "react"
import Icon from "../icon/Icon";


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
    let varcss = "gameinfo";
    const [gameState, SetgameState] = useState(Array(9).fill(0));
    const [currentPlayer, SetCurrentPlayer] = useState(1)
    const [Winner, SetWinner] = useState(0)


    const handleCLick = (pos) => {
        if (gameState[pos] === 0 && Winner === 0) {
            let NewGameState = [...gameState]
            NewGameState[pos] = currentPlayer
            SetgameState(NewGameState)
        }
    }
    if (currentPlayer === 1) {
        varcss = 'gameinfo2';
    }

    const verifyGame = () => {
        WinnerTable.forEach( (line) => {
            const values =  line.map((pos) => gameState[pos])
            const sum = values.reduce((sum, value) => sum + value)
            if (sum === 3 || sum === -3) {
            SetWinner(sum / 3)
            }
        } )
    }

    useEffect( () => {
        SetCurrentPlayer(currentPlayer * -1)
        verifyGame()
    }, [gameState] )


    return(
        <div className={Styles.gameContent}>


        <div className={Styles.game}>
            {
                gameState.map((value, pos) => 
                <GameOption
                key={`game-option-pos-${pos}`}
                status={value}
                onclick={() => handleCLick(pos)}
                />)
            }
        </div>
        <div className={Styles[varcss]}>
            <h4>Próximo a jogar: </h4>

            {currentPlayer === 1 ? (
                <Icon iconName="circle" />
            ) : currentPlayer === -1 ? (
            <Icon iconName="x" />
            ) : (
            <span>Nenhuma ação definida</span>
            )}
        </div>

        </div>

    )
}

export default Game