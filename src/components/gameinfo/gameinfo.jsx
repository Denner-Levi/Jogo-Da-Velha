import Icon from "../icon/Icon";
import Styles from "./gameinfo.module.css"
import Button from "../button/button";


function GameInfo (  {currentPlayer, Winner, onReset}  ) {
    let varcss = "gameinfo";
    if (currentPlayer === 1) varcss = 'gameinfo2';
    if (Winner !== 0) varcss = "gameinfo3";

    return(
        <>
        <div className={Styles.flex}>
        
        <div className={Styles[varcss]}>
        {
            Winner === 0 && 
            <>
            <h4>Próximo a jogar: </h4>
                {currentPlayer === 1 ? (
                    <Icon iconName="circle" />
                ) : currentPlayer === -1 ? (
                    <Icon iconName="x" />
                ) : (
                    <span>Nenhuma ação definida</span>
                )}
            </>
        }
        {
            Winner !== 0 &&
            <>
                <h4>Fim! Campeão: </h4>
                {Winner === 1 ? (
                    <Icon iconName="circle" />
                ) : Winner === -1 ? (
                    <Icon iconName="x" />
                ) : (
                    <span>Nenhuma ação definida</span>
                )}
            </>
        }
        </div>

        <div className={Styles.button}>
        <Button onClick={onReset}>
            Reiniciar
        </Button>
        </div>

        </div>
        </>
    )
}


export default GameInfo