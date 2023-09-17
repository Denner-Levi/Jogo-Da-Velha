import Title from "../Title/Title"
import Subtitle from "../Subtitle/Subtitle"
import Styles from './Header.module.css'
import Icon from "../icon/Icon"

function Header () {
    return(
        <div className={Styles.header}>
            <Title>Jogo Da Velha</Title>
            <Subtitle>Por: Denner Levi</Subtitle>
            <div className={Styles.iconContent}>
                <Icon iconName="github" link="https://github.com/Denner-Levi" />
            </div>
        </div>
    )
}

export default Header