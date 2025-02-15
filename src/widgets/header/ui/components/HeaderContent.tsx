import HeaderContentProps from "@widgets/header/model/HeaderContentProps"

import Input from "@shared/ui/input"

import styles from '../style/header.module.scss'

const HeaderContent = ({ username, setUsername }: HeaderContentProps) => {
    return (
        <header className={styles.header}>
        <div className={styles.search}>
            <p>Поиск</p>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} width='220px' />
        </div>
        </header>
    )
}
 
export default HeaderContent
