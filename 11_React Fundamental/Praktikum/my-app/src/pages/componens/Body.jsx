import React from 'react'
import styles from './ToDoList.module.css'

export default function Body({list}) {
    return (
        <div className={styles.liststring}>
            <p style={list.completed ? {textDecoration : 'line-through'}:{}} className={styles.app}>{list.title}</p>
        </div>
    )
}