import {gql} from "@apollo/client"


// utilime 10 vendite
const GET_LAST_SALES = gql
`
    {
        transfers(orderBy:  blockTimestamp, orderDirection: desc ,first: 25) {
            id
            tokenId
            from
            to
            price
          }
    }
`


export default GET_LAST_SALES