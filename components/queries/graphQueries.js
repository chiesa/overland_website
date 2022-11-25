import {gql} from "@apollo/client"


// le terre vendute a prezzi piu' alti
const GET_TOP_SALES = gql
`
    {
        transfers(orderBy:  price, orderDirection: desc ,first: 25) {
            id
            tokenId
            from
            to
            price
          }
    }
`

export default GET_TOP_SALES