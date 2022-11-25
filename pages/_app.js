import '../styles/globals.css'
import Head from 'next/head'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import {MoralisProvider} from "react-moralis" 
import Header from '../components/header'
import { NotificationProvider } from "web3uikit"



const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.thegraph.com/subgraphs/name/chiesa/test",
})

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Head>
        <title>overland analysis</title>
        <meta name="description" content="overland analysis market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <MoralisProvider initializeOnMount={false}>
        <ApolloProvider client={client}>
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </ApolloProvider>
      </MoralisProvider>
    </div>
  )
}

export default MyApp
