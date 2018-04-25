import React from 'react'
import styles from './header.module.css'

const Header = ({ title, ...rest }) => (
  <div {...rest} className={styles['main-header']}>
    <h1 className={styles['main-header-title']}>{title}</h1>
  </div>
)

export default Header
