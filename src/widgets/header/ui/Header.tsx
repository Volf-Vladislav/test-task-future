import HeaderProps from '../model/HeaderProps'

import styles from './style/header.module.scss'

const Header = ({ title }: HeaderProps) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{title}</h1>
  </header>
)

export default Header