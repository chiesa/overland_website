import styles from '../styles/Home.module.css'
import { Table,Avatar,Tag,LinkTo } from 'web3uikit'
import GET_LAST_SALES from "../components/queries/graphQueriesLastSales"
import { useQuery } from "@apollo/client"
const axios = require('axios');
import { ethers } from "ethers"


export default function TABLE_LAST_SALSES (){
    const { loading, error, data } = useQuery(GET_LAST_SALES);
    console.log(data)

    const append = ((str1, str2) =>{
        return str1+str2
      })

    return(
        <div>
            <div className='content-center'>
                <h2 className={styles.title}>
                LAST SALES
                </h2>
            </div>
            
            {
                loading || !data ? (
                <div>Loading...</div>
                ) : (
                <Table
                    columnsConfig=" 3fr 2fr 2fr 2fr "
                    data=
                    {
                        data.transfers.map(element => 
                        [
                        <LinkTo
                            address={append("https://marketplace.ovr.ai/lands/",element.tokenId)}
                            onClick={function noRefCheck(){}}
                            text={element.tokenId}
                            type="external"
                        /> ,element.from,element.to,ethers.utils.formatUnits(element.price,"ether")],
                        )
                    }
                    header={[

                    <span>Token</span>,
                    <span>seller</span>,
                    <span>buyer</span>,
                    <span>price</span>,
                    ]}
                    isColumnSortable={[
                    false,
                    true,
                    true,
                    false
                    ]}
                    maxPages={5}
                    onPageNumberChanged={function noRefCheck(){}}
                    onRowClick={function noRefCheck(){}}
                    pageSize={5}
                    />
                )
            }
        </div>
    )      
}
