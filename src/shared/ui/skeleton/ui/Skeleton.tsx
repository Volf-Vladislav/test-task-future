import React from "react"

import SkeletonProps from "../model/SkeletonProps"

import styles from "./style/skeleton.module.scss"



const Skeleton: React.FC<SkeletonProps> = ({ width = "100%", height = "20px", borderRadius = "4px", className }) => {
    return <div className={`${styles.skeleton} ${className}`} style={{ width, height, borderRadius }} />
}

export default Skeleton
