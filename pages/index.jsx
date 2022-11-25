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
        <div className='px-4 py-4'>
          
          <h1 className="p-5 border-b-2 text-center text-4xl text-blue-900 uppercase">
            overland analysis
          </h1>
        
          <TABLE_TOP_SALSES/>

          <TABLE_LAST_FOR_SALE/>

          <TABLE_LAST_SALES/>
        </div>
      </main>
    </div>
  )
}
