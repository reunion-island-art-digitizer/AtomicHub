export const drops = [
    {
        id: "1099544256375",
        number: "#263",
        linkid: '12345',
        img: '/image/proxy.png',
        imgSize: 'vertical',
        collection: 'cryptopuppie',
        name: 'Mini Pack v.3',
        seller: "kingabsolute",
        mint: 9001,
        available: 10,
        price: "173.51069982",
        dollar: "382.91",
        desc: 'This pack contains 6 NFT R-Planet Aether mining tools created by Captain Pig.',
        attr: [],
        rarityDesc: [
            {
                label: "Common",
                per: 63
            },
            {
                label: "Uncommon",
                per: 22.5
            },
            {
                label: "Rare",
                per: 9.5
            },
            {
                label: "Epic",
                per: 4
            },
            {
                label: "Legendary",
                per: 0.8
            },
            {
                label: "Mythic",
                per: 0.2
            }
        ]
    },
    {
        id: "1099544256375",
        number: "#263",
        linkid: '54321',
        img: '/image/proxy.png',
        imgSize: 'vertical',
        collection: 'cryptopuppie',
        name: 'Mini Pack v.3',
        seller: "kingabsolute",
        mint: 9001,
        available: 10,
        price: "173.51069982",
        dollar: "382.91",
        desc: 'This pack contains 6 NFT R-Planet Aether mining tools created by Captain Pig.',
        attr: [],
        rarity: [
            {
                label: "Common",
                per: 63
            },
            {
                label: "Uncommon",
                per: 22.5
            },
            {
                label: "Rare",
                per: 9.5
            },
            {
                label: "Epic",
                per: 4
            },
            {
                label: "Legendary",
                per: 0.8
            },
            {
                label: "Mythic",
                per: 0.2
            }
        ]
    },
]

export const FetchFake = (data, id) => {
    let res = null

    data.forEach(v => {
        if(v.linkid === id) {
            res = v
        }
    })

    return res
}