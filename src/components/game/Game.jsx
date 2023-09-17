import Styles from "./game.module.css"
import GameOption from "../gameOption/gameOption"
import { useState } from "react"
import Icon from "../icon/Icon";

function Game () {
    let varcss = "gameinfo";
    const [gameState, SetgameState] = useState(Array(9).fill(0));
    const [currentPlayer, SetCurrentPlayer] = useState(1)
    const handleCLick = (pos) => {
        if (gameState[pos] === 0) {
            let NewGameState = [...gameState]
            NewGameState[pos] = currentPlayer
            SetCurrentPlayer(currentPlayer * -1)
            SetgameState(NewGameState)
        }
    }
    if (currentPlayer === 1) {
        varcss = 'gameinfo2';
    }
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