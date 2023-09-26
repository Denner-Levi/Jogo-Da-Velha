import classNames from "classnames"
import Styles from "./gameOption.module.css"
import Icon from '../icon/Icon'



function GameOption ( { status, onclick, iswinner, isDraw } ) {
    return(
        <div className={classNames(Styles.gameoption , {
            [Styles.winner]: iswinner, [Styles.draw]: isDraw
        })} onClick={onclick}>
            {
                status === 1 && <Icon iconName="circle" size="25px" />
            }
            
            {
                status === -1 && <Icon iconName="x" size="25px" />
            }            
        </div>
    )
}

export default GameOption