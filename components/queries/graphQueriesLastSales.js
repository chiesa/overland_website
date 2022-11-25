import {gql} from "@apollo/client"


// utilime 10 vendite
const GET_LAST_SALES = gql
`
    {
        transfers(first: 10) {
            id
            tokenId
            from
            to
            price
          }
    }
`


export default GET_LAST_SALES