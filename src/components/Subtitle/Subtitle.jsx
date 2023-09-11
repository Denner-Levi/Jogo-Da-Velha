import Styles from './Subtitle.module.css'


function Subtitle ( {children} ) {
    return(
        <h6 className={Styles.sub}> {children} </h6>
    )
}

export default Subtitle