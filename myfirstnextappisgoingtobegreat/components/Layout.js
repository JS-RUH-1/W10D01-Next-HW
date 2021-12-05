import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Layout.module.css'


export default function Layout({children}) {
    return (
        <div className={styles.Layout}>
        <Header/> 

            {children}
            <Footer/>
        </div>
    )
}
