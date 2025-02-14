import { ToastContainer } from 'react-toastify'

import ContentLayoutProps from '../model/ContentLayoutProps'

import Header from '@widgets/header'

import styles from './style/contentLayout.module.scss'

const ContentLayout = ({ children }: ContentLayoutProps) => {
    return (
        <>
            <Header />
            <div className={styles.container}>{children}</div>
            <ToastContainer />
        </>
    )
}

export default ContentLayout