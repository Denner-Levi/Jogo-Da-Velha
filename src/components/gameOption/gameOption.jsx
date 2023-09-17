import Styles from "./gameOption.module.css"
import Icon from '../icon/Icon'



function GameOption ( { status, onclick } ) {
    return(
        <div className={Styles.gameoption} onClick={onclick}>
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