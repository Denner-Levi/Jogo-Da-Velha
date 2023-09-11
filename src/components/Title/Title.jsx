import Styles from './Title.module.css'

function Title ( {children} ) {
    return(
        <h1 className={Styles.title}>{children}</h1>
    )
}

export default Title