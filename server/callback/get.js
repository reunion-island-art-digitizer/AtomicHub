import axios from 'axios'

export const getmonney = async (req, res) => {
    const login = req.body.login

    const result = await axios({
        method: 'get',
        url: "http://wax.pink.gg/v1/chain/get_currency_balance",
        headers: {
            'authority': 'wax.greymass.com',
            'method': 'GET',
            'scheme': 'https',
            'accept': 'application/json',
        },
        data: {
            account: req.body.login,
            code: 'eosio.token',
            symbol: 'WAX'
        }
    })
    .then((res) => {
        const balance = !!res.data[0] ? res.data[0] : "0.00 WAX"
        const newBalance = balance.replace("WAX", " ")
        const float = newBalance.split(".")
        
        let one = !!float[1][0] ? float[1][0] : 0
        let two = !!float[1][1] ? float[1][1] : 0
        let tree = !!float[1][2] ? float[1][2] : ""

        if(tree >=  3 && !!tree) {
            two = Number(two) + 1
        }

        const result = `${float[0]}.${one}${two}`

        return result
    })
    .catch((e) => {
        console.log(e.message)
        return "0.00"
    })
    res.status(200).json({ result })
}