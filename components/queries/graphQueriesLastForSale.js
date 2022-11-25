import {gql} from "@apollo/client"

// utilime 10 vendite
const GET_LAST_FOR_SALE = gql
`
    {
        solds(first: 15) {
            id
            nftId
            seller
            value
        }
    }
`

export default GET_LAST_FOR_SALE