import Title from "../Title/Title"
import Subtitle from "../Subtitle/Subtitle"
import Styles from './Header.module.css'

function Header () {
    return(
        <div className={Styles.header}>
            <Title>Jogo Da Velha</Title>
            <Subtitle>Por: Denner Levi</Subtitle>
        </div>
    )
}

export default Header