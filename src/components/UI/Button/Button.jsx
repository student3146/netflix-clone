import React from 'react';
import styles from './Button.module.scss'

function Button({children, cb}) {
    return (
        <button onClick={cb} className={styles.button}>
            {children}
        </button>
    );
}

export default Button;