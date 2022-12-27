import React from "react";
import classnames from "classnames";
import styles from "./Button.module.css"

const Button = ({text, active, setActive, id}) => {
    const handleClick = () => {
        setActive(id);
    } 
    return(
        <div className={classnames(styles.button_block, active ? styles.active : null)} onClick={handleClick}>
            {text}
        </div>
    )
}

export default Button;