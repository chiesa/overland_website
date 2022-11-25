import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const axios = require('axios');
import TABLE_TOP_SALSES from '../components/topSales'
import TABLE_LAST_FOR_SALE from '../components/lastForSale'
import TABLE_LAST_SALES from '../components/lastSales'

export default function Home() {

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          overland analysis
        </h1>

        <TABLE_TOP_SALSES/>

        <TABLE_LAST_FOR_SALE/>

        <TABLE_LAST_SALES/>

      </main>
    </div>
  )
}
