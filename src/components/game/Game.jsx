import Styles from "./game.module.css"
import GameOption from "../gameOption/gameOption"

function Game () {
    return(
        <div className={Styles.game}>
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
        </div>
    )
}

export default Game