import styles from '../styles/Home.module.css'
import { Table,Avatar,Tag,LinkTo } from 'web3uikit'
import GET_LAST_FOR_SALE from "../components/queries/graphQueriesLastForSale"
import { useQuery } from "@apollo/client"
const axios = require('axios');
import { ethers } from "ethers"


export default function TABLE_LAST_FOR_SALE (){
    const { loading, error, data } = useQuery(GET_LAST_FOR_SALE);
    console.log(data)

    const append = ((str1, str2) =>{
        return str1+str2
      })

    return(
        <div>
            <div className='pt-10 pb-3 text-center text-slate-500 text-2xl border-t border-slate-100'>
                <h2>
                    LAST FOR SALES
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
                        data.solds.map(element => 
                        [
                        <LinkTo
                            address={append("https://marketplace.ovr.ai/lands/",element.nftId)}
                            onClick={function noRefCheck(){}}
                            text={element.nftId}
                            type="external"
                        /> ,element.seller,ethers.utils.formatUnits(element.value,"ether")],
                        )
                    }
                    header={[

                    <span>Token</span>,
                    <span>seller</span>,
                    <span>price</span>,
                    ]}
                    isColumnSortable={[
                    false,
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
