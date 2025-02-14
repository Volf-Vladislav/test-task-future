import CardProps from '../model/CardProps'

import styles from './style/card.module.scss'

const Card = ({ children, height, width }: CardProps) => {
    return <div className={styles.card} style={{ width, height }}>{children}</div>
}

export default Card
