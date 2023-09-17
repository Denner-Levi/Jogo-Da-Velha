import Styles from "./game.module.css"
import GameOption from "../gameOption/gameOption"
import { useState } from "react"

function Game () {
    const [gameState, SetgameState] = useState(Array(9).fill(0));
    return(
        <div className={Styles.game}>
            {
                gameState.map((value, pos) => 
                <GameOption 
                
                key={`game-option-pos-${pos}`}
                status={value}

                />)
            }

        </div>
    )
}

export default Game