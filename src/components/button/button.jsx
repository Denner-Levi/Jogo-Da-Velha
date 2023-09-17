import Style from "./button.module.css"

function Button ( { children, onClick } ) {
    return(
        <button className={Style.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button