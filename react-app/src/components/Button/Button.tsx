import React, { Children } from 'react'
import styles from './Button.module.css'

interface Props{
    children : string;
    color? : 'primary' | 'secondary' | 'dark' | 'danger';
    onClick : () => void;
}
const Button1 = ({ children, onClick, color='primary' } : Props) => {
  return (
    <button className={'btn btn-'+color} onClick={ onClick }>{ children }</button>
  );
}

const Button2 = ({ children, onClick, color='primary' } : Props) => {
  return (
    <button className={[styles.btn, styles['btn-'+color]].join(' ')} onClick={ onClick }>{ children }</button>
  );
}

export default Button2;
