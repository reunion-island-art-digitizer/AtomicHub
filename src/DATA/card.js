let name = '';
function randomString(i) {
    var rnd = '';
    while (rnd.length < i) {
        rnd += Math.random().toString(36).substring(2);
    }
    name = rnd.substring(0, i)
    return name;
};

let price = 0;
function getRandomFloat(min, max) {
    price = Math.random() * (max - min) + min
    return price;
}

let waxprice = 5.43478261;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export const cardSlider = [
    //#1
    {
        id: "1",
        offerId: 1,
        img: '/image/sale-drill.png',
        imgSize: 'vertical',

        asset: "Standard Drill",
        name: 'Standard Drill',
        number: "1099520501362",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50000, 376725),
        maxMint: '376,725',
        fire: '2,031',
        token: 'None',

        collection: 'alien.worlds',
        creator: "alien.worlds",
        schema: "tool.worlds",
        templateID: 19553,

        price: getRandomFloat(93, 120),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'cardid',
                desc: '2',
            },
            {
                title: 'rarity',
                desc: 'Abundant',
            },
            {
                title: 'shine',
                desc: 'Stone',
            },
            {
                title: 'type',
                desc: 'Extractor',
            },
            {
                title: 'delay',
                desc: '120',
            },
            {
                title: 'difficulty',
                desc: '1',
            },
            {
                title: 'ease',
                desc: '20',
            },
            {
                title: 'luck',
                desc: '7',
            },
        ]
    },
    {
        id: "1",
        offerId: 1,
        img: '/image/sale-drill.png',
        imgSize: 'vertical',

        asset: "Standard Drill",
        name: 'Standard Drill',
        number: "1099520501362",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50000, 376725),
        maxMint: '376,725',
        fire: '2,031',
        token: 'None',

        collection: 'alien.worlds',
        creator: "alien.worlds",
        schema: "tool.worlds",
        templateID: 19553,

        price: getRandomFloat(93, 120),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'cardid',
                desc: '2',
            },
            {
                title: 'rarity',
                desc: 'Abundant',
            },
            {
                title: 'shine',
                desc: 'Stone',
            },
            {
                title: 'type',
                desc: 'Extractor',
            },
            {
                title: 'delay',
                desc: '120',
            },
            {
                title: 'difficulty',
                desc: '1',
            },
            {
                title: 'ease',
                desc: '20',
            },
            {
                title: 'luck',
                desc: '7',
            },
        ]
    },
    {
        id: "1",
        offerId: 1,
        img: '/image/sale-drill.png',
        imgSize: 'vertical',

        asset: "Standard Drill",
        name: 'Standard Drill',
        number: "1099520501362",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50000, 376725),
        maxMint: '376,725',
        fire: '2,031',
        token: 'None',

        collection: 'alien.worlds',
        creator: "alien.worlds",
        schema: "tool.worlds",
        templateID: 19553,

        price: getRandomFloat(93, 120),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'cardid',
                desc: '2',
            },
            {
                title: 'rarity',
                desc: 'Abundant',
            },
            {
                title: 'shine',
                desc: 'Stone',
            },
            {
                title: 'type',
                desc: 'Extractor',
            },
            {
                title: 'delay',
                desc: '120',
            },
            {
                title: 'difficulty',
                desc: '1',
            },
            {
                title: 'ease',
                desc: '20',
            },
            {
                title: 'luck',
                desc: '7',
            },
        ]
    },
    {
        id: "1",
        offerId: 1,
        img: '/image/sale-drill.png',
        imgSize: 'vertical',

        asset: "Standard Drill",
        name: 'Standard Drill',
        number: "1099520501362",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50000, 376725),
        maxMint: '376,725',
        fire: '2,031',
        token: 'None',

        collection: 'alien.worlds',
        creator: "alien.worlds",
        schema: "tool.worlds",
        templateID: 19553,

        price: getRandomFloat(93, 120),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'cardid',
                desc: '2',
            },
            {
                title: 'rarity',
                desc: 'Abundant',
            },
            {
                title: 'shine',
                desc: 'Stone',
            },
            {
                title: 'type',
                desc: 'Extractor',
            },
            {
                title: 'delay',
                desc: '120',
            },
            {
                title: 'difficulty',
                desc: '1',
            },
            {
                title: 'ease',
                desc: '20',
            },
            {
                title: 'luck',
                desc: '7',
            },
        ]
    },
    {
        id: "1",
        offerId: 1,
        img: '/image/sale-drill.png',
        imgSize: 'vertical',

        asset: "Standard Drill",
        name: 'Standard Drill',
        number: "1099520501362",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50000, 376725),
        maxMint: '376,725',
        fire: '2,031',
        token: 'None',

        collection: 'alien.worlds',
        creator: "alien.worlds",
        schema: "tool.worlds",
        templateID: 19553,

        price: getRandomFloat(93, 120),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'cardid',
                desc: '2',
            },
            {
                title: 'rarity',
                desc: 'Abundant',
            },
            {
                title: 'shine',
                desc: 'Stone',
            },
            {
                title: 'type',
                desc: 'Extractor',
            },
            {
                title: 'delay',
                desc: '120',
            },
            {
                title: 'difficulty',
                desc: '1',
            },
            {
                title: 'ease',
                desc: '20',
            },
            {
                title: 'luck',
                desc: '7',
            },
        ]
    },
    {
        id: "1",
        offerId: 1,
        img: '/image/sale-drill.png',
        imgSize: 'vertical',

        asset: "Standard Drill",
        name: 'Standard Drill',
        number: "1099520501362",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50000, 376725),
        maxMint: '376,725',
        fire: '2,031',
        token: 'None',

        collection: 'alien.worlds',
        creator: "alien.worlds",
        schema: "tool.worlds",
        templateID: 19553,

        price: getRandomFloat(93, 120),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'cardid',
                desc: '2',
            },
            {
                title: 'rarity',
                desc: 'Abundant',
            },
            {
                title: 'shine',
                desc: 'Stone',
            },
            {
                title: 'type',
                desc: 'Extractor',
            },
            {
                title: 'delay',
                desc: '120',
            },
            {
                title: 'difficulty',
                desc: '1',
            },
            {
                title: 'ease',
                desc: '20',
            },
            {
                title: 'luck',
                desc: '7',
            },
        ]
    },
    {
        id: "1",
        offerId: 1,
        img: '/image/sale-drill.png',
        imgSize: 'vertical',

        asset: "Standard Drill",
        name: 'Standard Drill',
        number: "1099520501362",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50000, 376725),
        maxMint: '376,725',
        fire: '2,031',
        token: 'None',

        collection: 'alien.worlds',
        creator: "alien.worlds",
        schema: "tool.worlds",
        templateID: 19553,

        price: getRandomFloat(93, 120),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'cardid',
                desc: '2',
            },
            {
                title: 'rarity',
                desc: 'Abundant',
            },
            {
                title: 'shine',
                desc: 'Stone',
            },
            {
                title: 'type',
                desc: 'Extractor',
            },
            {
                title: 'delay',
                desc: '120',
            },
            {
                title: 'difficulty',
                desc: '1',
            },
            {
                title: 'ease',
                desc: '20',
            },
            {
                title: 'luck',
                desc: '7',
            },
        ]
    },
    {
        id: "1",
        offerId: 1,
        img: '/image/sale-drill.png',
        imgSize: 'vertical',

        asset: "Standard Drill",
        name: 'Standard Drill',
        number: "1099520501362",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50000, 376725),
        maxMint: '376,725',
        fire: '2,031',
        token: 'None',

        collection: 'alien.worlds',
        creator: "alien.worlds",
        schema: "tool.worlds",
        templateID: 19553,

        price: getRandomFloat(93, 120),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'cardid',
                desc: '2',
            },
            {
                title: 'rarity',
                desc: 'Abundant',
            },
            {
                title: 'shine',
                desc: 'Stone',
            },
            {
                title: 'type',
                desc: 'Extractor',
            },
            {
                title: 'delay',
                desc: '120',
            },
            {
                title: 'difficulty',
                desc: '1',
            },
            {
                title: 'ease',
                desc: '20',
            },
            {
                title: 'luck',
                desc: '7',
            },
        ]
    },
    //#2
    {
        id: "2",
        offerId: 2,
        img: '/image/sale-wood.png',
        imgSize: '',

        asset: "Wood Pack",
        name: 'Wood Pack',
        number: "1099555999861",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1154),
        maxMint: '1,154',
        fire: '1,119',
        token: 'None',

        collection: 'farmersworld',
        creator: "farmersworld",
        schema: "packs",
        templateID: 203894,

        price: getRandomFloat(2600, 3200),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: 'This pack contains a tool for digging Wood resource, Wood is the main material to craft equipment in the game Farmers World. Tool Odds: 88% Axe, 10% Saw, 2% Chainsaw.',
            },
            {
                title: 'unpack',
                desc: 'https://neftyblocks.com/c/farmersworld',
            },
        ]
    },
    {
        id: "2",
        offerId: 2,
        img: '/image/sale-wood.png',
        imgSize: '',

        asset: "Wood Pack",
        name: 'Wood Pack',
        number: "1099555999861",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1154),
        maxMint: '1,154',
        fire: '1,119',
        token: 'None',

        collection: 'farmersworld',
        creator: "farmersworld",
        schema: "packs",
        templateID: 203894,

        price: getRandomFloat(2600, 3200),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: 'This pack contains a tool for digging Wood resource, Wood is the main material to craft equipment in the game Farmers World. Tool Odds: 88% Axe, 10% Saw, 2% Chainsaw.',
            },
            {
                title: 'unpack',
                desc: 'https://neftyblocks.com/c/farmersworld',
            },
        ]
    },
    {
        id: "2",
        offerId: 2,
        img: '/image/sale-wood.png',
        imgSize: '',

        asset: "Wood Pack",
        name: 'Wood Pack',
        number: "1099555999861",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1154),
        maxMint: '1,154',
        fire: '1,119',
        token: 'None',

        collection: 'farmersworld',
        creator: "farmersworld",
        schema: "packs",
        templateID: 203894,

        price: getRandomFloat(2600, 3200),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: 'This pack contains a tool for digging Wood resource, Wood is the main material to craft equipment in the game Farmers World. Tool Odds: 88% Axe, 10% Saw, 2% Chainsaw.',
            },
            {
                title: 'unpack',
                desc: 'https://neftyblocks.com/c/farmersworld',
            },
        ]
    },
    {
        id: "2",
        offerId: 2,
        img: '/image/sale-wood.png',
        imgSize: '',

        asset: "Wood Pack",
        name: 'Wood Pack',
        number: "1099555999861",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1154),
        maxMint: '1,154',
        fire: '1,119',
        token: 'None',

        collection: 'farmersworld',
        creator: "farmersworld",
        schema: "packs",
        templateID: 203894,

        price: getRandomFloat(2600, 3200),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: 'This pack contains a tool for digging Wood resource, Wood is the main material to craft equipment in the game Farmers World. Tool Odds: 88% Axe, 10% Saw, 2% Chainsaw.',
            },
            {
                title: 'unpack',
                desc: 'https://neftyblocks.com/c/farmersworld',
            },
        ]
    },
    {
        id: "2",
        offerId: 2,
        img: '/image/sale-wood.png',
        imgSize: '',

        asset: "Wood Pack",
        name: 'Wood Pack',
        number: "1099555999861",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1154),
        maxMint: '1,154',
        fire: '1,119',
        token: 'None',

        collection: 'farmersworld',
        creator: "farmersworld",
        schema: "packs",
        templateID: 203894,

        price: getRandomFloat(2600, 3200),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: 'This pack contains a tool for digging Wood resource, Wood is the main material to craft equipment in the game Farmers World. Tool Odds: 88% Axe, 10% Saw, 2% Chainsaw.',
            },
            {
                title: 'unpack',
                desc: 'https://neftyblocks.com/c/farmersworld',
            },
        ]
    },
    //#3
    {
        id: "3",
        offerId: 3,
        img: '/image/sale-plot.png',
        imgSize: '',

        asset: "Land Plot Claim",
        name: 'Land Plot Claim',
        number: "1099518885422",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 2625),
        maxMint: '2,625',
        fire: '1',
        token: 'None',

        collection: 'splintrlands',
        creator: "splintrlands",
        schema: "land.claims",
        templateID: 57491,

        price: getRandomFloat(2100, 2700),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'plots',
                desc: '1',
            },
        ]
    },
    {
        id: "3",
        offerId: 3,
        img: '/image/sale-plot.png',
        imgSize: '',

        asset: "Land Plot Claim",
        name: 'Land Plot Claim',
        number: "1099518885422",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 2625),
        maxMint: '2,625',
        fire: '1',
        token: 'None',

        collection: 'splintrlands',
        creator: "splintrlands",
        schema: "land.claims",
        templateID: 57491,

        price: getRandomFloat(2100, 2700),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'plots',
                desc: '1',
            },
        ]
    },
    {
        id: "3",
        offerId: 3,
        img: '/image/sale-plot.png',
        imgSize: '',

        asset: "Land Plot Claim",
        name: 'Land Plot Claim',
        number: "1099518885422",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 2625),
        maxMint: '2,625',
        fire: '1',
        token: 'None',

        collection: 'splintrlands',
        creator: "splintrlands",
        schema: "land.claims",
        templateID: 57491,

        price: getRandomFloat(2100, 2700),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'plots',
                desc: '1',
            },
        ]
    },
    {
        id: "3",
        offerId: 3,
        img: '/image/sale-plot.png',
        imgSize: '',

        asset: "Land Plot Claim",
        name: 'Land Plot Claim',
        number: "1099518885422",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 2625),
        maxMint: '2,625',
        fire: '1',
        token: 'None',

        collection: 'splintrlands',
        creator: "splintrlands",
        schema: "land.claims",
        templateID: 57491,

        price: getRandomFloat(2100, 2700),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'plots',
                desc: '1',
            },
        ]
    },
    {
        id: "3",
        offerId: 3,
        img: '/image/sale-plot.png',
        imgSize: '',

        asset: "Land Plot Claim",
        name: 'Land Plot Claim',
        number: "1099518885422",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 2625),
        maxMint: '2,625',
        fire: '1',
        token: 'None',

        collection: 'splintrlands',
        creator: "splintrlands",
        schema: "land.claims",
        templateID: 57491,

        price: getRandomFloat(2100, 2700),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'plots',
                desc: '1',
            },
        ]
    },
    {
        id: "3",
        offerId: 3,
        img: '/image/sale-plot.png',
        imgSize: '',

        asset: "Land Plot Claim",
        name: 'Land Plot Claim',
        number: "1099518885422",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 2625),
        maxMint: '2,625',
        fire: '1',
        token: 'None',

        collection: 'splintrlands',
        creator: "splintrlands",
        schema: "land.claims",
        templateID: 57491,

        price: getRandomFloat(2100, 2700),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'plots',
                desc: '1',
            },
        ]
    },
    //#4
    {
        id: "4",
        offerId: 4,
        img: '/image/sale-solder.gif',
        imgSize: 'vertical',

        asset: "Soldier pack",
        name: 'Soldier pack',
        number: "1099541425396",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1000),
        maxMint: '1,000',
        fire: '964',
        token: 'None',

        collection: 'coinpirates1',
        creator: "coinpirates1",
        schema: "soldier",
        templateID: 147983,

        price: getRandomFloat(952, 1214),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'soldier',
                desc: '1',
            },
            {
                title: 'boat',
                desc: '1',
            },
            {
                title: 'shovel',
                desc: '1',
            },
            {
                title: 'paddle',
                desc: '1',
            },
        ]
    },
    {
        id: "4",
        offerId: 4,
        img: '/image/sale-solder.gif',
        imgSize: 'vertical',

        asset: "Soldier pack",
        name: 'Soldier pack',
        number: "1099541425396",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1000),
        maxMint: '1,000',
        fire: '964',
        token: 'None',

        collection: 'coinpirates1',
        creator: "coinpirates1",
        schema: "soldier",
        templateID: 147983,

        price: getRandomFloat(952, 1214),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'soldier',
                desc: '1',
            },
            {
                title: 'boat',
                desc: '1',
            },
            {
                title: 'shovel',
                desc: '1',
            },
            {
                title: 'paddle',
                desc: '1',
            },
        ]
    },
    {
        id: "4",
        offerId: 4,
        img: '/image/sale-solder.gif',
        imgSize: 'vertical',

        asset: "Soldier pack",
        name: 'Soldier pack',
        number: "1099541425396",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1000),
        maxMint: '1,000',
        fire: '964',
        token: 'None',

        collection: 'coinpirates1',
        creator: "coinpirates1",
        schema: "soldier",
        templateID: 147983,

        price: getRandomFloat(952, 1214),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'soldier',
                desc: '1',
            },
            {
                title: 'boat',
                desc: '1',
            },
            {
                title: 'shovel',
                desc: '1',
            },
            {
                title: 'paddle',
                desc: '1',
            },
        ]
    },
    {
        id: "4",
        offerId: 4,
        img: '/image/sale-solder.gif',
        imgSize: 'vertical',

        asset: "Soldier pack",
        name: 'Soldier pack',
        number: "1099541425396",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1000),
        maxMint: '1,000',
        fire: '964',
        token: 'None',

        collection: 'coinpirates1',
        creator: "coinpirates1",
        schema: "soldier",
        templateID: 147983,

        price: getRandomFloat(952, 1214),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'soldier',
                desc: '1',
            },
            {
                title: 'boat',
                desc: '1',
            },
            {
                title: 'shovel',
                desc: '1',
            },
            {
                title: 'paddle',
                desc: '1',
            },
        ]
    },
    {
        id: "4",
        offerId: 4,
        img: '/image/sale-solder.gif',
        imgSize: 'vertical',

        asset: "Soldier pack",
        name: 'Soldier pack',
        number: "1099541425396",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1000),
        maxMint: '1,000',
        fire: '964',
        token: 'None',

        collection: 'coinpirates1',
        creator: "coinpirates1",
        schema: "soldier",
        templateID: 147983,

        price: getRandomFloat(952, 1214),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'soldier',
                desc: '1',
            },
            {
                title: 'boat',
                desc: '1',
            },
            {
                title: 'shovel',
                desc: '1',
            },
            {
                title: 'paddle',
                desc: '1',
            },
        ]
    },
    {
        id: "4",
        offerId: 4,
        img: '/image/sale-solder.gif',
        imgSize: 'vertical',

        asset: "Soldier pack",
        name: 'Soldier pack',
        number: "1099541425396",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1000),
        maxMint: '1,000',
        fire: '964',
        token: 'None',

        collection: 'coinpirates1',
        creator: "coinpirates1",
        schema: "soldier",
        templateID: 147983,

        price: getRandomFloat(952, 1214),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'soldier',
                desc: '1',
            },
            {
                title: 'boat',
                desc: '1',
            },
            {
                title: 'shovel',
                desc: '1',
            },
            {
                title: 'paddle',
                desc: '1',
            },
        ]
    },
    {
        id: "4",
        offerId: 4,
        img: '/image/sale-solder.gif',
        imgSize: 'vertical',

        asset: "Soldier pack",
        name: 'Soldier pack',
        number: "1099541425396",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1000),
        maxMint: '1,000',
        fire: '964',
        token: 'None',

        collection: 'coinpirates1',
        creator: "coinpirates1",
        schema: "soldier",
        templateID: 147983,

        price: getRandomFloat(952, 1214),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'soldier',
                desc: '1',
            },
            {
                title: 'boat',
                desc: '1',
            },
            {
                title: 'shovel',
                desc: '1',
            },
            {
                title: 'paddle',
                desc: '1',
            },
        ]
    },
    {
        id: "4",
        offerId: 4,
        img: '/image/sale-solder.gif',
        imgSize: 'vertical',

        asset: "Soldier pack",
        name: 'Soldier pack',
        number: "1099541425396",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(100, 1000),
        maxMint: '1,000',
        fire: '964',
        token: 'None',

        collection: 'coinpirates1',
        creator: "coinpirates1",
        schema: "soldier",
        templateID: 147983,

        price: getRandomFloat(952, 1214),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'soldier',
                desc: '1',
            },
            {
                title: 'boat',
                desc: '1',
            },
            {
                title: 'shovel',
                desc: '1',
            },
            {
                title: 'paddle',
                desc: '1',
            },
        ]
    },
    //#5
    {
        id: "5",
        offerId: 5,
        img: '/image/sale-green.png',
        imgSize: 'vertical',

        asset: "Premier Pack",
        name: 'Premier Pack',
        number: "1099552574932",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 5000),
        maxMint: '5,000 ',
        fire: '4,743',
        token: 'None',

        collection: 'greenrabbit',
        creator: "greenrabbit",
        schema: "packs",
        templateID: 217331,

        price: getRandomFloat(1760, 1900),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Series',
                desc: '1',
            },
            {
                title: 'Description',
                desc: 'This pack contains 6 digital collectibles with rarities ranging from common to mythic. This pack has a lower chance of high rarity cards.',
            },
            {
                title: 'unbox_url',
                desc: 'https://wax.atomichub.io/unbox/greenrabpack/starter+ premier+figure+bonus',
            },
        ]
    },
    {
        id: "5",
        offerId: 5,
        img: '/image/sale-green.png',
        imgSize: 'vertical',

        asset: "Premier Pack",
        name: 'Premier Pack',
        number: "1099552574932",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 5000),
        maxMint: '5,000 ',
        fire: '4,743',
        token: 'None',

        collection: 'greenrabbit',
        creator: "greenrabbit",
        schema: "packs",
        templateID: 217331,

        price: getRandomFloat(1760, 1900),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Series',
                desc: '1',
            },
            {
                title: 'Description',
                desc: 'This pack contains 6 digital collectibles with rarities ranging from common to mythic. This pack has a lower chance of high rarity cards.',
            },
            {
                title: 'unbox_url',
                desc: 'https://wax.atomichub.io/unbox/greenrabpack/starter+ premier+figure+bonus',
            },
        ]
    },
    {
        id: "5",
        offerId: 5,
        img: '/image/sale-green.png',
        imgSize: 'vertical',

        asset: "Premier Pack",
        name: 'Premier Pack',
        number: "1099552574932",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 5000),
        maxMint: '5,000 ',
        fire: '4,743',
        token: 'None',

        collection: 'greenrabbit',
        creator: "greenrabbit",
        schema: "packs",
        templateID: 217331,

        price: getRandomFloat(1760, 1900),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Series',
                desc: '1',
            },
            {
                title: 'Description',
                desc: 'This pack contains 6 digital collectibles with rarities ranging from common to mythic. This pack has a lower chance of high rarity cards.',
            },
            {
                title: 'unbox_url',
                desc: 'https://wax.atomichub.io/unbox/greenrabpack/starter+ premier+figure+bonus',
            },
        ]
    },
    {
        id: "5",
        offerId: 5,
        img: '/image/sale-green.png',
        imgSize: 'vertical',

        asset: "Premier Pack",
        name: 'Premier Pack',
        number: "1099552574932",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 5000),
        maxMint: '5,000 ',
        fire: '4,743',
        token: 'None',

        collection: 'greenrabbit',
        creator: "greenrabbit",
        schema: "packs",
        templateID: 217331,

        price: getRandomFloat(1760, 1900),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Series',
                desc: '1',
            },
            {
                title: 'Description',
                desc: 'This pack contains 6 digital collectibles with rarities ranging from common to mythic. This pack has a lower chance of high rarity cards.',
            },
            {
                title: 'unbox_url',
                desc: 'https://wax.atomichub.io/unbox/greenrabpack/starter+ premier+figure+bonus',
            },
        ]
    },
    {
        id: "5",
        offerId: 5,
        img: '/image/sale-green.png',
        imgSize: 'vertical',

        asset: "Premier Pack",
        name: 'Premier Pack',
        number: "1099552574932",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 5000),
        maxMint: '5,000 ',
        fire: '4,743',
        token: 'None',

        collection: 'greenrabbit',
        creator: "greenrabbit",
        schema: "packs",
        templateID: 217331,

        price: getRandomFloat(1760, 1900),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Series',
                desc: '1',
            },
            {
                title: 'Description',
                desc: 'This pack contains 6 digital collectibles with rarities ranging from common to mythic. This pack has a lower chance of high rarity cards.',
            },
            {
                title: 'unbox_url',
                desc: 'https://wax.atomichub.io/unbox/greenrabpack/starter+ premier+figure+bonus',
            },
        ]
    },
    {
        id: "5",
        offerId: 5,
        img: '/image/sale-green.png',
        imgSize: 'vertical',

        asset: "Premier Pack",
        name: 'Premier Pack',
        number: "1099552574932",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 5000),
        maxMint: '5,000 ',
        fire: '4,743',
        token: 'None',

        collection: 'greenrabbit',
        creator: "greenrabbit",
        schema: "packs",
        templateID: 217331,

        price: getRandomFloat(1760, 1900),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Series',
                desc: '1',
            },
            {
                title: 'Description',
                desc: 'This pack contains 6 digital collectibles with rarities ranging from common to mythic. This pack has a lower chance of high rarity cards.',
            },
            {
                title: 'unbox_url',
                desc: 'https://wax.atomichub.io/unbox/greenrabpack/starter+ premier+figure+bonus',
            },
        ]
    },
    {
        id: "5",
        offerId: 5,
        img: '/image/sale-green.png',
        imgSize: 'vertical',

        asset: "Premier Pack",
        name: 'Premier Pack',
        number: "1099552574932",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 5000),
        maxMint: '5,000 ',
        fire: '4,743',
        token: 'None',

        collection: 'greenrabbit',
        creator: "greenrabbit",
        schema: "packs",
        templateID: 217331,

        price: getRandomFloat(1760, 1900),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Series',
                desc: '1',
            },
            {
                title: 'Description',
                desc: 'This pack contains 6 digital collectibles with rarities ranging from common to mythic. This pack has a lower chance of high rarity cards.',
            },
            {
                title: 'unbox_url',
                desc: 'https://wax.atomichub.io/unbox/greenrabpack/starter+ premier+figure+bonus',
            },
        ]
    },
    {
        id: "5",
        offerId: 5,
        img: '/image/sale-green.png',
        imgSize: 'vertical',

        asset: "Premier Pack",
        name: 'Premier Pack',
        number: "1099552574932",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(300, 5000),
        maxMint: '5,000 ',
        fire: '4,743',
        token: 'None',

        collection: 'greenrabbit',
        creator: "greenrabbit",
        schema: "packs",
        templateID: 217331,

        price: getRandomFloat(1760, 1900),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Series',
                desc: '1',
            },
            {
                title: 'Description',
                desc: 'This pack contains 6 digital collectibles with rarities ranging from common to mythic. This pack has a lower chance of high rarity cards.',
            },
            {
                title: 'unbox_url',
                desc: 'https://wax.atomichub.io/unbox/greenrabpack/starter+ premier+figure+bonus',
            },
        ]
    },
    //#6
    {
        id: "6",
        offerId: 6,
        img: '/image/proxy.png',
        imgSize: 'vertical',

        asset: "Mini Pack v.3",
        name: 'Mini Pack v.3',
        number: "1099540186203",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(600, 9000),
        maxMint: '9,000 ',
        fire: '8,664',
        token: 'None',

        collection: 'rplanet',
        creator: "rplanet",
        schema: "packs",
        templateID: 141684,

        price: getRandomFloat(899, 1141),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'cards_quantity',
                desc: '6',
            },
            {
                title: 'rarity_amount',
                desc: '[0,1,0,0,0,0]',
            },
            {
                title: 'rarity_percent',
                desc: '[63,22.5,9.5,4,0.8000011920929,0.20000298023224]',
            },
            {
                title: 'items_schema',
                desc: 'rigs3',
            },
            {
                title: 'description',
                desc: '	This pack contains 6 NFT R-Planet Aether mining tools created by Captain Pig. Collect them, trade them, or stake them in the R-Planet game to collect aether. Combined mining power - 1000+ Aether/hour guaranteed.',
            },
        ]
    },
    {
        id: "6",
        offerId: 6,
        img: '/image/proxy.png',
        imgSize: 'vertical',

        asset: "Mini Pack v.3",
        name: 'Mini Pack v.3',
        number: "1099540186203",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(600, 9000),
        maxMint: '9,000 ',
        fire: '8,664',
        token: 'None',

        collection: 'rplanet',
        creator: "rplanet",
        schema: "packs",
        templateID: 141684,

        price: getRandomFloat(899, 1141),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'cards_quantity',
                desc: '6',
            },
            {
                title: 'rarity_amount',
                desc: '[0,1,0,0,0,0]',
            },
            {
                title: 'rarity_percent',
                desc: '[63,22.5,9.5,4,0.8000011920929,0.20000298023224]',
            },
            {
                title: 'items_schema',
                desc: 'rigs3',
            },
            {
                title: 'description',
                desc: '	This pack contains 6 NFT R-Planet Aether mining tools created by Captain Pig. Collect them, trade them, or stake them in the R-Planet game to collect aether. Combined mining power - 1000+ Aether/hour guaranteed.',
            },
        ]
    },
    {
        id: "6",
        offerId: 6,
        img: '/image/proxy.png',
        imgSize: 'vertical',

        asset: "Mini Pack v.3",
        name: 'Mini Pack v.3',
        number: "1099540186203",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(600, 9000),
        maxMint: '9,000 ',
        fire: '8,664',
        token: 'None',

        collection: 'rplanet',
        creator: "rplanet",
        schema: "packs",
        templateID: 141684,

        price: getRandomFloat(899, 1141),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'cards_quantity',
                desc: '6',
            },
            {
                title: 'rarity_amount',
                desc: '[0,1,0,0,0,0]',
            },
            {
                title: 'rarity_percent',
                desc: '[63,22.5,9.5,4,0.8000011920929,0.20000298023224]',
            },
            {
                title: 'items_schema',
                desc: 'rigs3',
            },
            {
                title: 'description',
                desc: '	This pack contains 6 NFT R-Planet Aether mining tools created by Captain Pig. Collect them, trade them, or stake them in the R-Planet game to collect aether. Combined mining power - 1000+ Aether/hour guaranteed.',
            },
        ]
    },
    {
        id: "6",
        offerId: 6,
        img: '/image/proxy.png',
        imgSize: 'vertical',

        asset: "Mini Pack v.3",
        name: 'Mini Pack v.3',
        number: "1099540186203",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(600, 9000),
        maxMint: '9,000 ',
        fire: '8,664',
        token: 'None',

        collection: 'rplanet',
        creator: "rplanet",
        schema: "packs",
        templateID: 141684,

        price: getRandomFloat(899, 1141),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'cards_quantity',
                desc: '6',
            },
            {
                title: 'rarity_amount',
                desc: '[0,1,0,0,0,0]',
            },
            {
                title: 'rarity_percent',
                desc: '[63,22.5,9.5,4,0.8000011920929,0.20000298023224]',
            },
            {
                title: 'items_schema',
                desc: 'rigs3',
            },
            {
                title: 'description',
                desc: '	This pack contains 6 NFT R-Planet Aether mining tools created by Captain Pig. Collect them, trade them, or stake them in the R-Planet game to collect aether. Combined mining power - 1000+ Aether/hour guaranteed.',
            },
        ]
    },
    //#7
    {
        id: "7",
        offerId: 7,
        img: '/image/sale-poseidon.png',
        imgSize: 'vertical',

        asset: "Poseidon",
        name: 'Poseidon',
        number: "1099556741756",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50, 201),
        maxMint: '201 ',
        fire: '0',
        token: 'None',

        collection: 'journeytogod',
        creator: "journeytogod",
        schema: "promo",
        templateID: 232592,

        price: getRandomFloat(899, 1199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'value',
                desc: '20',
            },
            {
                title: 'Text',
                desc: 'Holding this PROMO will give you Whitelist Access to all "Journey To Godhood" Drop Sales in the future.',
            },
        ]
    },
    {
        id: "7",
        offerId: 7,
        img: '/image/sale-poseidon.png',
        imgSize: 'vertical',

        asset: "Poseidon",
        name: 'Poseidon',
        number: "1099556741756",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50, 201),
        maxMint: '201 ',
        fire: '0',
        token: 'None',

        collection: 'journeytogod',
        creator: "journeytogod",
        schema: "promo",
        templateID: 232592,

        price: getRandomFloat(899, 1199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'value',
                desc: '20',
            },
            {
                title: 'Text',
                desc: 'Holding this PROMO will give you Whitelist Access to all "Journey To Godhood" Drop Sales in the future.',
            },
        ]
    },
    {
        id: "7",
        offerId: 7,
        img: '/image/sale-poseidon.png',
        imgSize: 'vertical',

        asset: "Poseidon",
        name: 'Poseidon',
        number: "1099556741756",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50, 201),
        maxMint: '201 ',
        fire: '0',
        token: 'None',

        collection: 'journeytogod',
        creator: "journeytogod",
        schema: "promo",
        templateID: 232592,

        price: getRandomFloat(899, 1199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'value',
                desc: '20',
            },
            {
                title: 'Text',
                desc: 'Holding this PROMO will give you Whitelist Access to all "Journey To Godhood" Drop Sales in the future.',
            },
        ]
    },
    {
        id: "7",
        offerId: 7,
        img: '/image/sale-poseidon.png',
        imgSize: 'vertical',

        asset: "Poseidon",
        name: 'Poseidon',
        number: "1099556741756",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50, 201),
        maxMint: '201 ',
        fire: '0',
        token: 'None',

        collection: 'journeytogod',
        creator: "journeytogod",
        schema: "promo",
        templateID: 232592,

        price: getRandomFloat(899, 1199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'value',
                desc: '20',
            },
            {
                title: 'Text',
                desc: 'Holding this PROMO will give you Whitelist Access to all "Journey To Godhood" Drop Sales in the future.',
            },
        ]
    },
    {
        id: "7",
        offerId: 7,
        img: '/image/sale-poseidon.png',
        imgSize: 'vertical',

        asset: "Poseidon",
        name: 'Poseidon',
        number: "1099556741756",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50, 201),
        maxMint: '201 ',
        fire: '0',
        token: 'None',

        collection: 'journeytogod',
        creator: "journeytogod",
        schema: "promo",
        templateID: 232592,

        price: getRandomFloat(899, 1199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'value',
                desc: '20',
            },
            {
                title: 'Text',
                desc: 'Holding this PROMO will give you Whitelist Access to all "Journey To Godhood" Drop Sales in the future.',
            },
        ]
    },
    {
        id: "7",
        offerId: 7,
        img: '/image/sale-poseidon.png',
        imgSize: 'vertical',

        asset: "Poseidon",
        name: 'Poseidon',
        number: "1099556741756",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50, 201),
        maxMint: '201 ',
        fire: '0',
        token: 'None',

        collection: 'journeytogod',
        creator: "journeytogod",
        schema: "promo",
        templateID: 232592,

        price: getRandomFloat(899, 1199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'value',
                desc: '20',
            },
            {
                title: 'Text',
                desc: 'Holding this PROMO will give you Whitelist Access to all "Journey To Godhood" Drop Sales in the future.',
            },
        ]
    },
    {
        id: "7",
        offerId: 7,
        img: '/image/sale-poseidon.png',
        imgSize: 'vertical',

        asset: "Poseidon",
        name: 'Poseidon',
        number: "1099556741756",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(50, 201),
        maxMint: '201 ',
        fire: '0',
        token: 'None',

        collection: 'journeytogod',
        creator: "journeytogod",
        schema: "promo",
        templateID: 232592,

        price: getRandomFloat(899, 1199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'value',
                desc: '20',
            },
            {
                title: 'Text',
                desc: 'Holding this PROMO will give you Whitelist Access to all "Journey To Godhood" Drop Sales in the future.',
            },
        ]
    },
    //#8
    {
        id: "8",
        offerId: 8,
        img: '/image/sale-train.png',
        imgSize: 'vertical',

        asset: "Conductor Max Pack",
        name: 'Conductor Max Pack',
        number: "1099557714610",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(150, 1200),
        maxMint: '1,200 ',
        fire: '961',
        token: 'None',

        collection: 'centurytrain',
        creator: "centurytrain",
        schema: "pack",
        templateID: 232300,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'card_count',
                desc: '9',
            },
            {
                title: 'card_schema',
                desc: 'conductor',
            },
            {
                title: 'description',
                desc: 'This pack contains 9 Conductor NFTs. Every train has to have a conductor. It’s up to you to decide who to put in charge of your trains!',
            },
        ]
    },
    {
        id: "8",
        offerId: 8,
        img: '/image/sale-train.png',
        imgSize: 'vertical',

        asset: "Conductor Max Pack",
        name: 'Conductor Max Pack',
        number: "1099557714610",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(150, 1200),
        maxMint: '1,200 ',
        fire: '961',
        token: 'None',

        collection: 'centurytrain',
        creator: "centurytrain",
        schema: "pack",
        templateID: 232300,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'card_count',
                desc: '9',
            },
            {
                title: 'card_schema',
                desc: 'conductor',
            },
            {
                title: 'description',
                desc: 'This pack contains 9 Conductor NFTs. Every train has to have a conductor. It’s up to you to decide who to put in charge of your trains!',
            },
        ]
    },
    {
        id: "8",
        offerId: 8,
        img: '/image/sale-train.png',
        imgSize: 'vertical',

        asset: "Conductor Max Pack",
        name: 'Conductor Max Pack',
        number: "1099557714610",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(150, 1200),
        maxMint: '1,200 ',
        fire: '961',
        token: 'None',

        collection: 'centurytrain',
        creator: "centurytrain",
        schema: "pack",
        templateID: 232300,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'card_count',
                desc: '9',
            },
            {
                title: 'card_schema',
                desc: 'conductor',
            },
            {
                title: 'description',
                desc: 'This pack contains 9 Conductor NFTs. Every train has to have a conductor. It’s up to you to decide who to put in charge of your trains!',
            },
        ]
    },
    {
        id: "8",
        offerId: 8,
        img: '/image/sale-train.png',
        imgSize: 'vertical',

        asset: "Conductor Max Pack",
        name: 'Conductor Max Pack',
        number: "1099557714610",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(150, 1200),
        maxMint: '1,200 ',
        fire: '961',
        token: 'None',

        collection: 'centurytrain',
        creator: "centurytrain",
        schema: "pack",
        templateID: 232300,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'card_count',
                desc: '9',
            },
            {
                title: 'card_schema',
                desc: 'conductor',
            },
            {
                title: 'description',
                desc: 'This pack contains 9 Conductor NFTs. Every train has to have a conductor. It’s up to you to decide who to put in charge of your trains!',
            },
        ]
    },
    {
        id: "8",
        offerId: 8,
        img: '/image/sale-train.png',
        imgSize: 'vertical',

        asset: "Conductor Max Pack",
        name: 'Conductor Max Pack',
        number: "1099557714610",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(150, 1200),
        maxMint: '1,200 ',
        fire: '961',
        token: 'None',

        collection: 'centurytrain',
        creator: "centurytrain",
        schema: "pack",
        templateID: 232300,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'card_count',
                desc: '9',
            },
            {
                title: 'card_schema',
                desc: 'conductor',
            },
            {
                title: 'description',
                desc: 'This pack contains 9 Conductor NFTs. Every train has to have a conductor. It’s up to you to decide who to put in charge of your trains!',
            },
        ]
    },
    {
        id: "8",
        offerId: 8,
        img: '/image/sale-train.png',
        imgSize: 'vertical',

        asset: "Conductor Max Pack",
        name: 'Conductor Max Pack',
        number: "1099557714610",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(150, 1200),
        maxMint: '1,200 ',
        fire: '961',
        token: 'None',

        collection: 'centurytrain',
        creator: "centurytrain",
        schema: "pack",
        templateID: 232300,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'card_count',
                desc: '9',
            },
            {
                title: 'card_schema',
                desc: 'conductor',
            },
            {
                title: 'description',
                desc: 'This pack contains 9 Conductor NFTs. Every train has to have a conductor. It’s up to you to decide who to put in charge of your trains!',
            },
        ]
    },
    //#9
    {
        id: "9",
        offerId: 9,
        img: '/image/sale-silver.png',
        imgSize: 'vertical',

        asset: "Silver Pack - Round 02",
        name: 'Silver Pack - Round 02',
        number: "1099557730840",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(210, 1500),
        maxMint: '1,500',
        fire: '775',
        token: 'None',

        collection: 'breederszone',
        creator: "breederszone",
        schema: "packs",
        templateID: 234122,

        price: getRandomFloat(179, 199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: '65% Common, 28% Rare, 6.6%% Epic, 0.4% Legendary',
            },
            {
                title: 'number_of_cards',
                desc: '5',
            },
            {
                title: 'unpack_url',
                desc: 'https://neftyblocks.com/c/breederszone/packs',
            },
        ]
    },
    {
        id: "9",
        offerId: 9,
        img: '/image/sale-silver.png',
        imgSize: 'vertical',

        asset: "Silver Pack - Round 02",
        name: 'Silver Pack - Round 02',
        number: "1099557730840",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(210, 1500),
        maxMint: '1,500',
        fire: '775',
        token: 'None',

        collection: 'breederszone',
        creator: "breederszone",
        schema: "packs",
        templateID: 234122,

        price: getRandomFloat(179, 199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: '65% Common, 28% Rare, 6.6%% Epic, 0.4% Legendary',
            },
            {
                title: 'number_of_cards',
                desc: '5',
            },
            {
                title: 'unpack_url',
                desc: 'https://neftyblocks.com/c/breederszone/packs',
            },
        ]
    },
    {
        id: "9",
        offerId: 9,
        img: '/image/sale-silver.png',
        imgSize: 'vertical',

        asset: "Silver Pack - Round 02",
        name: 'Silver Pack - Round 02',
        number: "1099557730840",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(210, 1500),
        maxMint: '1,500',
        fire: '775',
        token: 'None',

        collection: 'breederszone',
        creator: "breederszone",
        schema: "packs",
        templateID: 234122,

        price: getRandomFloat(179, 199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: '65% Common, 28% Rare, 6.6%% Epic, 0.4% Legendary',
            },
            {
                title: 'number_of_cards',
                desc: '5',
            },
            {
                title: 'unpack_url',
                desc: 'https://neftyblocks.com/c/breederszone/packs',
            },
        ]
    },
    {
        id: "9",
        offerId: 9,
        img: '/image/sale-silver.png',
        imgSize: 'vertical',

        asset: "Silver Pack - Round 02",
        name: 'Silver Pack - Round 02',
        number: "1099557730840",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(210, 1500),
        maxMint: '1,500',
        fire: '775',
        token: 'None',

        collection: 'breederszone',
        creator: "breederszone",
        schema: "packs",
        templateID: 234122,

        price: getRandomFloat(179, 199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: '65% Common, 28% Rare, 6.6%% Epic, 0.4% Legendary',
            },
            {
                title: 'number_of_cards',
                desc: '5',
            },
            {
                title: 'unpack_url',
                desc: 'https://neftyblocks.com/c/breederszone/packs',
            },
        ]
    },
    //#10
    {
        id: "10",
        offerId: 10,
        img: '/image/sale-dark.png',
        imgSize: '',

        asset: "Dark Matter Supply Crate (Mission Two)",
        name: 'Dark Matter Supply Crate (Mission Two)',
        number: "1099549271952",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(140, 940),
        maxMint: '940',
        fire: '802',
        token: 'None',

        collection: 'colonizemars',
        creator: "colonizemars",
        schema: "supplycrates",
        templateID: 206710,

        price: getRandomFloat(5499, 7999),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'mission',
                desc: 'Two',
            },
            {
                title: 'description',
                desc: 'Unopened Dark Matter Supply Crate for Mission Two.',
            },
        ]
    },
    {
        id: "10",
        offerId: 10,
        img: '/image/sale-dark.png',
        imgSize: '',

        asset: "Dark Matter Supply Crate (Mission Two)",
        name: 'Dark Matter Supply Crate (Mission Two)',
        number: "1099549271952",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(140, 940),
        maxMint: '940',
        fire: '802',
        token: 'None',

        collection: 'colonizemars',
        creator: "colonizemars",
        schema: "supplycrates",
        templateID: 206710,

        price: getRandomFloat(5499, 7999),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'mission',
                desc: 'Two',
            },
            {
                title: 'description',
                desc: 'Unopened Dark Matter Supply Crate for Mission Two.',
            },
        ]
    },
    {
        id: "10",
        offerId: 10,
        img: '/image/sale-dark.png',
        imgSize: '',

        asset: "Dark Matter Supply Crate (Mission Two)",
        name: 'Dark Matter Supply Crate (Mission Two)',
        number: "1099549271952",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(140, 940),
        maxMint: '940',
        fire: '802',
        token: 'None',

        collection: 'colonizemars',
        creator: "colonizemars",
        schema: "supplycrates",
        templateID: 206710,

        price: getRandomFloat(5499, 7999),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'mission',
                desc: 'Two',
            },
            {
                title: 'description',
                desc: 'Unopened Dark Matter Supply Crate for Mission Two.',
            },
        ]
    },
    {
        id: "10",
        offerId: 10,
        img: '/image/sale-dark.png',
        imgSize: '',

        asset: "Dark Matter Supply Crate (Mission Two)",
        name: 'Dark Matter Supply Crate (Mission Two)',
        number: "1099549271952",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(140, 940),
        maxMint: '940',
        fire: '802',
        token: 'None',

        collection: 'colonizemars',
        creator: "colonizemars",
        schema: "supplycrates",
        templateID: 206710,

        price: getRandomFloat(5499, 7999),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'mission',
                desc: 'Two',
            },
            {
                title: 'description',
                desc: 'Unopened Dark Matter Supply Crate for Mission Two.',
            },
        ]
    },
    {
        id: "10",
        offerId: 10,
        img: '/image/sale-dark.png',
        imgSize: '',

        asset: "Dark Matter Supply Crate (Mission Two)",
        name: 'Dark Matter Supply Crate (Mission Two)',
        number: "1099549271952",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(140, 940),
        maxMint: '940',
        fire: '802',
        token: 'None',

        collection: 'colonizemars',
        creator: "colonizemars",
        schema: "supplycrates",
        templateID: 206710,

        price: getRandomFloat(5499, 7999),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'mission',
                desc: 'Two',
            },
            {
                title: 'description',
                desc: 'Unopened Dark Matter Supply Crate for Mission Two.',
            },
        ]
    },
    {
        id: "10",
        offerId: 10,
        img: '/image/sale-dark.png',
        imgSize: '',

        asset: "Dark Matter Supply Crate (Mission Two)",
        name: 'Dark Matter Supply Crate (Mission Two)',
        number: "1099549271952",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(140, 940),
        maxMint: '940',
        fire: '802',
        token: 'None',

        collection: 'colonizemars',
        creator: "colonizemars",
        schema: "supplycrates",
        templateID: 206710,

        price: getRandomFloat(5499, 7999),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'mission',
                desc: 'Two',
            },
            {
                title: 'description',
                desc: 'Unopened Dark Matter Supply Crate for Mission Two.',
            },
        ]
    },
    //#11
    {
        id: "11",
        offerId: 11,
        img: '/image/sale-booster.png',
        imgSize: 'vertical',

        asset: "Collector's Booster Pack - 3rd Edition",
        name: "Collector's Booster Pack - 3rd Edition",
        number: "1099547053050",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(1400, 9532),
        maxMint: '9,532',
        fire: '8,853',
        token: 'None',

        collection: 'kogsofficial',
        creator: "kogsofficial",
        schema: "packs",
        templateID: 195797,

        price: getRandomFloat(79, 99),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'unpack_url',
                desc: 'https://wax.atomichub.io/unbox/kogsofficial-3rdedition',
            },
        ]
    },
    {
        id: "11",
        offerId: 11,
        img: '/image/sale-booster.png',
        imgSize: 'vertical',

        asset: "Collector's Booster Pack - 3rd Edition",
        name: "Collector's Booster Pack - 3rd Edition",
        number: "1099547053050",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(1400, 9532),
        maxMint: '9,532',
        fire: '8,853',
        token: 'None',

        collection: 'kogsofficial',
        creator: "kogsofficial",
        schema: "packs",
        templateID: 195797,

        price: getRandomFloat(79, 99),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'unpack_url',
                desc: 'https://wax.atomichub.io/unbox/kogsofficial-3rdedition',
            },
        ]
    },
    {
        id: "11",
        offerId: 11,
        img: '/image/sale-booster.png',
        imgSize: 'vertical',

        asset: "Collector's Booster Pack - 3rd Edition",
        name: "Collector's Booster Pack - 3rd Edition",
        number: "1099547053050",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(1400, 9532),
        maxMint: '9,532',
        fire: '8,853',
        token: 'None',

        collection: 'kogsofficial',
        creator: "kogsofficial",
        schema: "packs",
        templateID: 195797,

        price: getRandomFloat(79, 99),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'unpack_url',
                desc: 'https://wax.atomichub.io/unbox/kogsofficial-3rdedition',
            },
        ]
    },
    {
        id: "11",
        offerId: 11,
        img: '/image/sale-booster.png',
        imgSize: 'vertical',

        asset: "Collector's Booster Pack - 3rd Edition",
        name: "Collector's Booster Pack - 3rd Edition",
        number: "1099547053050",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(1400, 9532),
        maxMint: '9,532',
        fire: '8,853',
        token: 'None',

        collection: 'kogsofficial',
        creator: "kogsofficial",
        schema: "packs",
        templateID: 195797,

        price: getRandomFloat(79, 99),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'unpack_url',
                desc: 'https://wax.atomichub.io/unbox/kogsofficial-3rdedition',
            },
        ]
    },
    {
        id: "11",
        offerId: 11,
        img: '/image/sale-booster.png',
        imgSize: 'vertical',

        asset: "Collector's Booster Pack - 3rd Edition",
        name: "Collector's Booster Pack - 3rd Edition",
        number: "1099547053050",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(1400, 9532),
        maxMint: '9,532',
        fire: '8,853',
        token: 'None',

        collection: 'kogsofficial',
        creator: "kogsofficial",
        schema: "packs",
        templateID: 195797,

        price: getRandomFloat(79, 99),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'unpack_url',
                desc: 'https://wax.atomichub.io/unbox/kogsofficial-3rdedition',
            },
        ]
    },
    {
        id: "11",
        offerId: 11,
        img: '/image/sale-booster.png',
        imgSize: 'vertical',

        asset: "Collector's Booster Pack - 3rd Edition",
        name: "Collector's Booster Pack - 3rd Edition",
        number: "1099547053050",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(1400, 9532),
        maxMint: '9,532',
        fire: '8,853',
        token: 'None',

        collection: 'kogsofficial',
        creator: "kogsofficial",
        schema: "packs",
        templateID: 195797,

        price: getRandomFloat(79, 99),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'unpack_url',
                desc: 'https://wax.atomichub.io/unbox/kogsofficial-3rdedition',
            },
        ]
    },
    //#12
    {
        id: "12",
        offerId: 12,
        img: '/image/sale-nova.png',
        imgSize: 'vertical',

        asset: "Standard Pack - Preseason Sale",
        name: "Standard Pack - Preseason Sale",
        number: "1099545163860",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(1400, 6111),
        maxMint: '6,111',
        fire: '5,770',
        token: 'None',

        collection: 'novarallywax',
        creator: "novarallywax",
        schema: "packs",
        templateID: 167252,

        price: getRandomFloat(639, 699),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Unpack Link',
                desc: 'https://neftyblocks.com/c/novarallywax/packs',
            },
            {
                title: 'Number of Cards',
                desc: '10',
            },
            {
                title: 'Number of Cars',
                desc: '1',
            },
            {
                title: 'Number of Characters',
                desc: '9',
            },
            {
                title: 'Car Slot Odds',
                desc: '[75.00% 17.00% 6.00% 2.00%]',
            },
            {
                title: 'Character Slot Odds',
                desc: '[72.20% 18.00% 7.00% 2.50% 0.30%]',
            },
        ]
    },
    {
        id: "12",
        offerId: 12,
        img: '/image/sale-nova.png',
        imgSize: 'vertical',

        asset: "Standard Pack - Preseason Sale",
        name: "Standard Pack - Preseason Sale",
        number: "1099545163860",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(1400, 6111),
        maxMint: '6,111',
        fire: '5,770',
        token: 'None',

        collection: 'novarallywax',
        creator: "novarallywax",
        schema: "packs",
        templateID: 167252,

        price: getRandomFloat(639, 699),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Unpack Link',
                desc: 'https://neftyblocks.com/c/novarallywax/packs',
            },
            {
                title: 'Number of Cards',
                desc: '10',
            },
            {
                title: 'Number of Cars',
                desc: '1',
            },
            {
                title: 'Number of Characters',
                desc: '9',
            },
            {
                title: 'Car Slot Odds',
                desc: '[75.00% 17.00% 6.00% 2.00%]',
            },
            {
                title: 'Character Slot Odds',
                desc: '[72.20% 18.00% 7.00% 2.50% 0.30%]',
            },
        ]
    },
    {
        id: "12",
        offerId: 12,
        img: '/image/sale-nova.png',
        imgSize: 'vertical',

        asset: "Standard Pack - Preseason Sale",
        name: "Standard Pack - Preseason Sale",
        number: "1099545163860",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(1400, 6111),
        maxMint: '6,111',
        fire: '5,770',
        token: 'None',

        collection: 'novarallywax',
        creator: "novarallywax",
        schema: "packs",
        templateID: 167252,

        price: getRandomFloat(639, 699),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Unpack Link',
                desc: 'https://neftyblocks.com/c/novarallywax/packs',
            },
            {
                title: 'Number of Cards',
                desc: '10',
            },
            {
                title: 'Number of Cars',
                desc: '1',
            },
            {
                title: 'Number of Characters',
                desc: '9',
            },
            {
                title: 'Car Slot Odds',
                desc: '[75.00% 17.00% 6.00% 2.00%]',
            },
            {
                title: 'Character Slot Odds',
                desc: '[72.20% 18.00% 7.00% 2.50% 0.30%]',
            },
        ]
    },
    {
        id: "12",
        offerId: 12,
        img: '/image/sale-nova.png',
        imgSize: 'vertical',

        asset: "Standard Pack - Preseason Sale",
        name: "Standard Pack - Preseason Sale",
        number: "1099545163860",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(1400, 6111),
        maxMint: '6,111',
        fire: '5,770',
        token: 'None',

        collection: 'novarallywax',
        creator: "novarallywax",
        schema: "packs",
        templateID: 167252,

        price: getRandomFloat(639, 699),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Unpack Link',
                desc: 'https://neftyblocks.com/c/novarallywax/packs',
            },
            {
                title: 'Number of Cards',
                desc: '10',
            },
            {
                title: 'Number of Cars',
                desc: '1',
            },
            {
                title: 'Number of Characters',
                desc: '9',
            },
            {
                title: 'Car Slot Odds',
                desc: '[75.00% 17.00% 6.00% 2.00%]',
            },
            {
                title: 'Character Slot Odds',
                desc: '[72.20% 18.00% 7.00% 2.50% 0.30%]',
            },
        ]
    },
    {
        id: "12",
        offerId: 12,
        img: '/image/sale-nova.png',
        imgSize: 'vertical',

        asset: "Standard Pack - Preseason Sale",
        name: "Standard Pack - Preseason Sale",
        number: "1099545163860",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(1400, 6111),
        maxMint: '6,111',
        fire: '5,770',
        token: 'None',

        collection: 'novarallywax',
        creator: "novarallywax",
        schema: "packs",
        templateID: 167252,

        price: getRandomFloat(639, 699),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Unpack Link',
                desc: 'https://neftyblocks.com/c/novarallywax/packs',
            },
            {
                title: 'Number of Cards',
                desc: '10',
            },
            {
                title: 'Number of Cars',
                desc: '1',
            },
            {
                title: 'Number of Characters',
                desc: '9',
            },
            {
                title: 'Car Slot Odds',
                desc: '[75.00% 17.00% 6.00% 2.00%]',
            },
            {
                title: 'Character Slot Odds',
                desc: '[72.20% 18.00% 7.00% 2.50% 0.30%]',
            },
        ]
    },
    {
        id: "12",
        offerId: 12,
        img: '/image/sale-nova.png',
        imgSize: 'vertical',

        asset: "Standard Pack - Preseason Sale",
        name: "Standard Pack - Preseason Sale",
        number: "1099545163860",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(1400, 6111),
        maxMint: '6,111',
        fire: '5,770',
        token: 'None',

        collection: 'novarallywax',
        creator: "novarallywax",
        schema: "packs",
        templateID: 167252,

        price: getRandomFloat(639, 699),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'Unpack Link',
                desc: 'https://neftyblocks.com/c/novarallywax/packs',
            },
            {
                title: 'Number of Cards',
                desc: '10',
            },
            {
                title: 'Number of Cars',
                desc: '1',
            },
            {
                title: 'Number of Characters',
                desc: '9',
            },
            {
                title: 'Car Slot Odds',
                desc: '[75.00% 17.00% 6.00% 2.00%]',
            },
            {
                title: 'Character Slot Odds',
                desc: '[72.20% 18.00% 7.00% 2.50% 0.30%]',
            },
        ]
    },
    //#13
    {
        id: "13",
        offerId: 13,
        img: '/image/sale-gnome.png',
        imgSize: 'vertical',

        asset: "Chroma Pack - 7 Cards",
        name: "Chroma Pack - 7 Cards",
        number: "1099541236070",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(200, 2200),
        maxMint: '2,200',
        fire: '1,746',
        token: 'None',

        collection: 'gnomeseries1',
        creator: "gnomeseries1",
        schema: "gnomepack",
        templateID: 146997,

        price: getRandomFloat(54, 66),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'pack_num',
                desc: '11',
            },
        ]
    },
    {
        id: "13",
        offerId: 13,
        img: '/image/sale-gnome.png',
        imgSize: 'vertical',

        asset: "Chroma Pack - 7 Cards",
        name: "Chroma Pack - 7 Cards",
        number: "1099541236070",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(200, 2200),
        maxMint: '2,200',
        fire: '1,746',
        token: 'None',

        collection: 'gnomeseries1',
        creator: "gnomeseries1",
        schema: "gnomepack",
        templateID: 146997,

        price: getRandomFloat(54, 66),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'pack_num',
                desc: '11',
            },
        ]
    },
    {
        id: "13",
        offerId: 13,
        img: '/image/sale-gnome.png',
        imgSize: 'vertical',

        asset: "Chroma Pack - 7 Cards",
        name: "Chroma Pack - 7 Cards",
        number: "1099541236070",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(200, 2200),
        maxMint: '2,200',
        fire: '1,746',
        token: 'None',

        collection: 'gnomeseries1',
        creator: "gnomeseries1",
        schema: "gnomepack",
        templateID: 146997,

        price: getRandomFloat(54, 66),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'pack_num',
                desc: '11',
            },
        ]
    },
    {
        id: "13",
        offerId: 13,
        img: '/image/sale-gnome.png',
        imgSize: 'vertical',

        asset: "Chroma Pack - 7 Cards",
        name: "Chroma Pack - 7 Cards",
        number: "1099541236070",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(200, 2200),
        maxMint: '2,200',
        fire: '1,746',
        token: 'None',

        collection: 'gnomeseries1',
        creator: "gnomeseries1",
        schema: "gnomepack",
        templateID: 146997,

        price: getRandomFloat(54, 66),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'pack_num',
                desc: '11',
            },
        ]
    },
    {
        id: "13",
        offerId: 13,
        img: '/image/sale-gnome.png',
        imgSize: 'vertical',

        asset: "Chroma Pack - 7 Cards",
        name: "Chroma Pack - 7 Cards",
        number: "1099541236070",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(200, 2200),
        maxMint: '2,200',
        fire: '1,746',
        token: 'None',

        collection: 'gnomeseries1',
        creator: "gnomeseries1",
        schema: "gnomepack",
        templateID: 146997,

        price: getRandomFloat(54, 66),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'pack_num',
                desc: '11',
            },
        ]
    },
    {
        id: "13",
        offerId: 13,
        img: '/image/sale-gnome.png',
        imgSize: 'vertical',

        asset: "Chroma Pack - 7 Cards",
        name: "Chroma Pack - 7 Cards",
        number: "1099541236070",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(200, 2200),
        maxMint: '2,200',
        fire: '1,746',
        token: 'None',

        collection: 'gnomeseries1',
        creator: "gnomeseries1",
        schema: "gnomepack",
        templateID: 146997,

        price: getRandomFloat(54, 66),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'pack_num',
                desc: '11',
            },
        ]
    },
    //#14
    {
        id: "14",
        offerId: 14,
        img: '/image/sale-hangar.png',
        imgSize: 'vertical',

        asset: "HANGAR L1",
        name: "HANGAR L1",
        number: "1099548150917",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(18, 285),
        maxMint: '285',
        fire: '0',
        token: 'None',

        collection: 'alienshipsio',
        creator: "alienshipsio",
        schema: "hangars",
        templateID: 201009,

        price: getRandomFloat(699, 899),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: []
    },
    {
        id: "14",
        offerId: 14,
        img: '/image/sale-hangar.png',
        imgSize: 'vertical',

        asset: "HANGAR L1",
        name: "HANGAR L1",
        number: "1099548150917",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(18, 285),
        maxMint: '285',
        fire: '0',
        token: 'None',

        collection: 'alienshipsio',
        creator: "alienshipsio",
        schema: "hangars",
        templateID: 201009,

        price: getRandomFloat(699, 899),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: []
    },
    {
        id: "14",
        offerId: 14,
        img: '/image/sale-hangar.png',
        imgSize: 'vertical',

        asset: "HANGAR L1",
        name: "HANGAR L1",
        number: "1099548150917",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(18, 285),
        maxMint: '285',
        fire: '0',
        token: 'None',

        collection: 'alienshipsio',
        creator: "alienshipsio",
        schema: "hangars",
        templateID: 201009,

        price: getRandomFloat(699, 899),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: []
    },
    {
        id: "14",
        offerId: 14,
        img: '/image/sale-hangar.png',
        imgSize: 'vertical',

        asset: "HANGAR L1",
        name: "HANGAR L1",
        number: "1099548150917",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(18, 285),
        maxMint: '285',
        fire: '0',
        token: 'None',

        collection: 'alienshipsio',
        creator: "alienshipsio",
        schema: "hangars",
        templateID: 201009,

        price: getRandomFloat(699, 899),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: []
    },
    {
        id: "14",
        offerId: 14,
        img: '/image/sale-hangar.png',
        imgSize: 'vertical',

        asset: "HANGAR L1",
        name: "HANGAR L1",
        number: "1099548150917",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(18, 285),
        maxMint: '285',
        fire: '0',
        token: 'None',

        collection: 'alienshipsio',
        creator: "alienshipsio",
        schema: "hangars",
        templateID: 201009,

        price: getRandomFloat(699, 899),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: []
    },
    {
        id: "14",
        offerId: 14,
        img: '/image/sale-hangar.png',
        imgSize: 'vertical',

        asset: "HANGAR L1",
        name: "HANGAR L1",
        number: "1099548150917",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(18, 285),
        maxMint: '285',
        fire: '0',
        token: 'None',

        collection: 'alienshipsio',
        creator: "alienshipsio",
        schema: "hangars",
        templateID: 201009,

        price: getRandomFloat(699, 899),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: []
    },
    //#15
    {
        id: "15",
        offerId: 15,
        img: '/image/sale-magma.png',
        imgSize: 'vertical',

        asset: "Magma Pack s.1",
        name: "Magma Pack s.1",
        number: "1099549280394",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(68, 1500),
        maxMint: '1500',
        fire: '1,414',
        token: 'None',

        collection: 'powerpacksio',
        creator: "powerpacksio",
        schema: "packs",
        templateID: 166026,

        price: getRandomFloat(249, 300),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "When you open it, you get 2 NFT.",
            },
            {
                title: 'contains',
                desc: "	«1 NFT» • 25 power: 79.50% • 50 power: 16.00% • 250 power: 3.20% • 500 power: 1.30% ; «1 NFT» • Water Pack s.1: 39.76% • Gladiator (part): 39.62% • Chance: 16.00% • Banker: 3.20% • Duplicate: 1.30% • Elder: 0.12%",
            },
            {
                title: 'website_url',
                desc: "https://powerpacks.io/",
            },
            {
                title: 'series',
                desc: "#1",
            },
        ]
    },
    {
        id: "15",
        offerId: 15,
        img: '/image/sale-magma.png',
        imgSize: 'vertical',

        asset: "Magma Pack s.1",
        name: "Magma Pack s.1",
        number: "1099549280394",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(68, 1500),
        maxMint: '1500',
        fire: '1,414',
        token: 'None',

        collection: 'powerpacksio',
        creator: "powerpacksio",
        schema: "packs",
        templateID: 166026,

        price: getRandomFloat(249, 300),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "When you open it, you get 2 NFT.",
            },
            {
                title: 'contains',
                desc: "	«1 NFT» • 25 power: 79.50% • 50 power: 16.00% • 250 power: 3.20% • 500 power: 1.30% ; «1 NFT» • Water Pack s.1: 39.76% • Gladiator (part): 39.62% • Chance: 16.00% • Banker: 3.20% • Duplicate: 1.30% • Elder: 0.12%",
            },
            {
                title: 'website_url',
                desc: "https://powerpacks.io/",
            },
            {
                title: 'series',
                desc: "#1",
            },
        ]
    },
    {
        id: "15",
        offerId: 15,
        img: '/image/sale-magma.png',
        imgSize: 'vertical',

        asset: "Magma Pack s.1",
        name: "Magma Pack s.1",
        number: "1099549280394",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(68, 1500),
        maxMint: '1500',
        fire: '1,414',
        token: 'None',

        collection: 'powerpacksio',
        creator: "powerpacksio",
        schema: "packs",
        templateID: 166026,

        price: getRandomFloat(249, 300),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "When you open it, you get 2 NFT.",
            },
            {
                title: 'contains',
                desc: "	«1 NFT» • 25 power: 79.50% • 50 power: 16.00% • 250 power: 3.20% • 500 power: 1.30% ; «1 NFT» • Water Pack s.1: 39.76% • Gladiator (part): 39.62% • Chance: 16.00% • Banker: 3.20% • Duplicate: 1.30% • Elder: 0.12%",
            },
            {
                title: 'website_url',
                desc: "https://powerpacks.io/",
            },
            {
                title: 'series',
                desc: "#1",
            },
        ]
    },
    {
        id: "15",
        offerId: 15,
        img: '/image/sale-magma.png',
        imgSize: 'vertical',

        asset: "Magma Pack s.1",
        name: "Magma Pack s.1",
        number: "1099549280394",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(68, 1500),
        maxMint: '1500',
        fire: '1,414',
        token: 'None',

        collection: 'powerpacksio',
        creator: "powerpacksio",
        schema: "packs",
        templateID: 166026,

        price: getRandomFloat(249, 300),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "When you open it, you get 2 NFT.",
            },
            {
                title: 'contains',
                desc: "	«1 NFT» • 25 power: 79.50% • 50 power: 16.00% • 250 power: 3.20% • 500 power: 1.30% ; «1 NFT» • Water Pack s.1: 39.76% • Gladiator (part): 39.62% • Chance: 16.00% • Banker: 3.20% • Duplicate: 1.30% • Elder: 0.12%",
            },
            {
                title: 'website_url',
                desc: "https://powerpacks.io/",
            },
            {
                title: 'series',
                desc: "#1",
            },
        ]
    },
    {
        id: "15",
        offerId: 15,
        img: '/image/sale-magma.png',
        imgSize: 'vertical',

        asset: "Magma Pack s.1",
        name: "Magma Pack s.1",
        number: "1099549280394",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(68, 1500),
        maxMint: '1500',
        fire: '1,414',
        token: 'None',

        collection: 'powerpacksio',
        creator: "powerpacksio",
        schema: "packs",
        templateID: 166026,

        price: getRandomFloat(249, 300),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "When you open it, you get 2 NFT.",
            },
            {
                title: 'contains',
                desc: "	«1 NFT» • 25 power: 79.50% • 50 power: 16.00% • 250 power: 3.20% • 500 power: 1.30% ; «1 NFT» • Water Pack s.1: 39.76% • Gladiator (part): 39.62% • Chance: 16.00% • Banker: 3.20% • Duplicate: 1.30% • Elder: 0.12%",
            },
            {
                title: 'website_url',
                desc: "https://powerpacks.io/",
            },
            {
                title: 'series',
                desc: "#1",
            },
        ]
    },
    {
        id: "15",
        offerId: 15,
        img: '/image/sale-magma.png',
        imgSize: 'vertical',

        asset: "Magma Pack s.1",
        name: "Magma Pack s.1",
        number: "1099549280394",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(68, 1500),
        maxMint: '1500',
        fire: '1,414',
        token: 'None',

        collection: 'powerpacksio',
        creator: "powerpacksio",
        schema: "packs",
        templateID: 166026,

        price: getRandomFloat(249, 300),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "When you open it, you get 2 NFT.",
            },
            {
                title: 'contains',
                desc: "	«1 NFT» • 25 power: 79.50% • 50 power: 16.00% • 250 power: 3.20% • 500 power: 1.30% ; «1 NFT» • Water Pack s.1: 39.76% • Gladiator (part): 39.62% • Chance: 16.00% • Banker: 3.20% • Duplicate: 1.30% • Elder: 0.12%",
            },
            {
                title: 'website_url',
                desc: "https://powerpacks.io/",
            },
            {
                title: 'series',
                desc: "#1",
            },
        ]
    },
    {
        id: "15",
        offerId: 15,
        img: '/image/sale-magma.png',
        imgSize: 'vertical',

        asset: "Magma Pack s.1",
        name: "Magma Pack s.1",
        number: "1099549280394",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(68, 1500),
        maxMint: '1500',
        fire: '1,414',
        token: 'None',

        collection: 'powerpacksio',
        creator: "powerpacksio",
        schema: "packs",
        templateID: 166026,

        price: getRandomFloat(249, 300),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "When you open it, you get 2 NFT.",
            },
            {
                title: 'contains',
                desc: "	«1 NFT» • 25 power: 79.50% • 50 power: 16.00% • 250 power: 3.20% • 500 power: 1.30% ; «1 NFT» • Water Pack s.1: 39.76% • Gladiator (part): 39.62% • Chance: 16.00% • Banker: 3.20% • Duplicate: 1.30% • Elder: 0.12%",
            },
            {
                title: 'website_url',
                desc: "https://powerpacks.io/",
            },
            {
                title: 'series',
                desc: "#1",
            },
        ]
    },
    {
        id: "15",
        offerId: 15,
        img: '/image/sale-magma.png',
        imgSize: 'vertical',

        asset: "Magma Pack s.1",
        name: "Magma Pack s.1",
        number: "1099549280394",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(68, 1500),
        maxMint: '1500',
        fire: '1,414',
        token: 'None',

        collection: 'powerpacksio',
        creator: "powerpacksio",
        schema: "packs",
        templateID: 166026,

        price: getRandomFloat(249, 300),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "When you open it, you get 2 NFT.",
            },
            {
                title: 'contains',
                desc: "	«1 NFT» • 25 power: 79.50% • 50 power: 16.00% • 250 power: 3.20% • 500 power: 1.30% ; «1 NFT» • Water Pack s.1: 39.76% • Gladiator (part): 39.62% • Chance: 16.00% • Banker: 3.20% • Duplicate: 1.30% • Elder: 0.12%",
            },
            {
                title: 'website_url',
                desc: "https://powerpacks.io/",
            },
            {
                title: 'series',
                desc: "#1",
            },
        ]
    },
    //#16
    {
        id: "16",
        offerId: 16,
        img: '/image/sale-uplift.gif',
        imgSize: 'vertical',

        asset: "Premium Mining Pack V1 - 25 + Land Slot = Expires 07/07/2021",
        name: "Premium Mining Pack V1 - 25 + Land Slot = Expires 07/07/2021",
        number: "1099547910171",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(2500, 7747),
        maxMint: '7,747',
        fire: '7,616',
        token: 'None',

        collection: 'upliftworld',
        creator: "upliftworld",
        schema: "packs",
        templateID: 197567,

        price: getRandomFloat(1299, 1399),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'category',
                desc: "Mining Packs",
            },
            {
                title: 'type',
                desc: "Miner",
            },
            {
                title: 'series',
                desc: "Genesis",
            },
            {
                title: 'about',
                desc: "Upliftium is the in-game medium of exchange in the Uplift World. This pack contains 25 miner slots with a chance for different rarities and charge levels. The pack has a land slot with a chance to drop an Uplift World Land Key! About the Land Slot: Drops a token if you have pulled a land. Otherwise, you will get an Art Card collectible. How to use the token? - Keep this in your wallet for the snapshot on 07/07/2021 at 8pm EST and you will get a random land plot airdropped to your wallet! BE AWARE: You are only eligible for the Land Key drop If you hold the token in your wallet once the snapshot is taken. This token serves no further function after the date of the snapshot. You will get no land out of expired tokens! IMPORTANT: This means no packs you open after the 07/07/2021 at 8pm EST will drop land, even if you pull a token.",
            },
            {
                title: 'unbox',
                desc: "https://theuplift.world/unbox/",
            },
        ]
    },
    {
        id: "16",
        offerId: 16,
        img: '/image/sale-uplift.gif',
        imgSize: 'vertical',

        asset: "Premium Mining Pack V1 - 25 + Land Slot = Expires 07/07/2021",
        name: "Premium Mining Pack V1 - 25 + Land Slot = Expires 07/07/2021",
        number: "1099547910171",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(2500, 7747),
        maxMint: '7,747',
        fire: '7,616',
        token: 'None',

        collection: 'upliftworld',
        creator: "upliftworld",
        schema: "packs",
        templateID: 197567,

        price: getRandomFloat(1299, 1399),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'category',
                desc: "Mining Packs",
            },
            {
                title: 'type',
                desc: "Miner",
            },
            {
                title: 'series',
                desc: "Genesis",
            },
            {
                title: 'about',
                desc: "Upliftium is the in-game medium of exchange in the Uplift World. This pack contains 25 miner slots with a chance for different rarities and charge levels. The pack has a land slot with a chance to drop an Uplift World Land Key! About the Land Slot: Drops a token if you have pulled a land. Otherwise, you will get an Art Card collectible. How to use the token? - Keep this in your wallet for the snapshot on 07/07/2021 at 8pm EST and you will get a random land plot airdropped to your wallet! BE AWARE: You are only eligible for the Land Key drop If you hold the token in your wallet once the snapshot is taken. This token serves no further function after the date of the snapshot. You will get no land out of expired tokens! IMPORTANT: This means no packs you open after the 07/07/2021 at 8pm EST will drop land, even if you pull a token.",
            },
            {
                title: 'unbox',
                desc: "https://theuplift.world/unbox/",
            },
        ]
    },
    {
        id: "16",
        offerId: 16,
        img: '/image/sale-uplift.gif',
        imgSize: 'vertical',

        asset: "Premium Mining Pack V1 - 25 + Land Slot = Expires 07/07/2021",
        name: "Premium Mining Pack V1 - 25 + Land Slot = Expires 07/07/2021",
        number: "1099547910171",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(2500, 7747),
        maxMint: '7,747',
        fire: '7,616',
        token: 'None',

        collection: 'upliftworld',
        creator: "upliftworld",
        schema: "packs",
        templateID: 197567,

        price: getRandomFloat(1299, 1399),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'category',
                desc: "Mining Packs",
            },
            {
                title: 'type',
                desc: "Miner",
            },
            {
                title: 'series',
                desc: "Genesis",
            },
            {
                title: 'about',
                desc: "Upliftium is the in-game medium of exchange in the Uplift World. This pack contains 25 miner slots with a chance for different rarities and charge levels. The pack has a land slot with a chance to drop an Uplift World Land Key! About the Land Slot: Drops a token if you have pulled a land. Otherwise, you will get an Art Card collectible. How to use the token? - Keep this in your wallet for the snapshot on 07/07/2021 at 8pm EST and you will get a random land plot airdropped to your wallet! BE AWARE: You are only eligible for the Land Key drop If you hold the token in your wallet once the snapshot is taken. This token serves no further function after the date of the snapshot. You will get no land out of expired tokens! IMPORTANT: This means no packs you open after the 07/07/2021 at 8pm EST will drop land, even if you pull a token.",
            },
            {
                title: 'unbox',
                desc: "https://theuplift.world/unbox/",
            },
        ]
    },
    {
        id: "16",
        offerId: 16,
        img: '/image/sale-uplift.gif',
        imgSize: 'vertical',

        asset: "Premium Mining Pack V1 - 25 + Land Slot = Expires 07/07/2021",
        name: "Premium Mining Pack V1 - 25 + Land Slot = Expires 07/07/2021",
        number: "1099547910171",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(2500, 7747),
        maxMint: '7,747',
        fire: '7,616',
        token: 'None',

        collection: 'upliftworld',
        creator: "upliftworld",
        schema: "packs",
        templateID: 197567,

        price: getRandomFloat(1299, 1399),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'category',
                desc: "Mining Packs",
            },
            {
                title: 'type',
                desc: "Miner",
            },
            {
                title: 'series',
                desc: "Genesis",
            },
            {
                title: 'about',
                desc: "Upliftium is the in-game medium of exchange in the Uplift World. This pack contains 25 miner slots with a chance for different rarities and charge levels. The pack has a land slot with a chance to drop an Uplift World Land Key! About the Land Slot: Drops a token if you have pulled a land. Otherwise, you will get an Art Card collectible. How to use the token? - Keep this in your wallet for the snapshot on 07/07/2021 at 8pm EST and you will get a random land plot airdropped to your wallet! BE AWARE: You are only eligible for the Land Key drop If you hold the token in your wallet once the snapshot is taken. This token serves no further function after the date of the snapshot. You will get no land out of expired tokens! IMPORTANT: This means no packs you open after the 07/07/2021 at 8pm EST will drop land, even if you pull a token.",
            },
            {
                title: 'unbox',
                desc: "https://theuplift.world/unbox/",
            },
        ]
    },
    {
        id: "16",
        offerId: 16,
        img: '/image/sale-uplift.gif',
        imgSize: 'vertical',

        asset: "Premium Mining Pack V1 - 25 + Land Slot = Expires 07/07/2021",
        name: "Premium Mining Pack V1 - 25 + Land Slot = Expires 07/07/2021",
        number: "1099547910171",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(2500, 7747),
        maxMint: '7,747',
        fire: '7,616',
        token: 'None',

        collection: 'upliftworld',
        creator: "upliftworld",
        schema: "packs",
        templateID: 197567,

        price: getRandomFloat(1299, 1399),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'category',
                desc: "Mining Packs",
            },
            {
                title: 'type',
                desc: "Miner",
            },
            {
                title: 'series',
                desc: "Genesis",
            },
            {
                title: 'about',
                desc: "Upliftium is the in-game medium of exchange in the Uplift World. This pack contains 25 miner slots with a chance for different rarities and charge levels. The pack has a land slot with a chance to drop an Uplift World Land Key! About the Land Slot: Drops a token if you have pulled a land. Otherwise, you will get an Art Card collectible. How to use the token? - Keep this in your wallet for the snapshot on 07/07/2021 at 8pm EST and you will get a random land plot airdropped to your wallet! BE AWARE: You are only eligible for the Land Key drop If you hold the token in your wallet once the snapshot is taken. This token serves no further function after the date of the snapshot. You will get no land out of expired tokens! IMPORTANT: This means no packs you open after the 07/07/2021 at 8pm EST will drop land, even if you pull a token.",
            },
            {
                title: 'unbox',
                desc: "https://theuplift.world/unbox/",
            },
        ]
    },
    {
        id: "16",
        offerId: 16,
        img: '/image/sale-uplift.gif',
        imgSize: 'vertical',

        asset: "Premium Mining Pack V1 - 25 + Land Slot = Expires 07/07/2021",
        name: "Premium Mining Pack V1 - 25 + Land Slot = Expires 07/07/2021",
        number: "1099547910171",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(2500, 7747),
        maxMint: '7,747',
        fire: '7,616',
        token: 'None',

        collection: 'upliftworld',
        creator: "upliftworld",
        schema: "packs",
        templateID: 197567,

        price: getRandomFloat(1299, 1399),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'category',
                desc: "Mining Packs",
            },
            {
                title: 'type',
                desc: "Miner",
            },
            {
                title: 'series',
                desc: "Genesis",
            },
            {
                title: 'about',
                desc: "Upliftium is the in-game medium of exchange in the Uplift World. This pack contains 25 miner slots with a chance for different rarities and charge levels. The pack has a land slot with a chance to drop an Uplift World Land Key! About the Land Slot: Drops a token if you have pulled a land. Otherwise, you will get an Art Card collectible. How to use the token? - Keep this in your wallet for the snapshot on 07/07/2021 at 8pm EST and you will get a random land plot airdropped to your wallet! BE AWARE: You are only eligible for the Land Key drop If you hold the token in your wallet once the snapshot is taken. This token serves no further function after the date of the snapshot. You will get no land out of expired tokens! IMPORTANT: This means no packs you open after the 07/07/2021 at 8pm EST will drop land, even if you pull a token.",
            },
            {
                title: 'unbox',
                desc: "https://theuplift.world/unbox/",
            },
        ]
    },
    //#17
    {
        id: "17",
        offerId: 17,
        img: '/image/sale-monst.png',
        imgSize: '',

        asset: "Monster Pack",
        name: "Monster Pack",
        number: "1099532199136",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(3040, 10000),
        maxMint: '10,000',
        fire: '9,678',
        token: 'None',

        collection: 'darkcountryh',
        creator: "darkcountryh",
        schema: "cardpack",
        templateID: 115987,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contains 40 cards from Standard Dark Country set. Chances are following: Common 60%, Rare 32%, Epic 6%, Legendary 2%",
            },
        ]
    },
    {
        id: "17",
        offerId: 17,
        img: '/image/sale-monst.png',
        imgSize: '',

        asset: "Monster Pack",
        name: "Monster Pack",
        number: "1099532199136",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(3040, 10000),
        maxMint: '10,000',
        fire: '9,678',
        token: 'None',

        collection: 'darkcountryh',
        creator: "darkcountryh",
        schema: "cardpack",
        templateID: 115987,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contains 40 cards from Standard Dark Country set. Chances are following: Common 60%, Rare 32%, Epic 6%, Legendary 2%",
            },
        ]
    },
    {
        id: "17",
        offerId: 17,
        img: '/image/sale-monst.png',
        imgSize: '',

        asset: "Monster Pack",
        name: "Monster Pack",
        number: "1099532199136",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(3040, 10000),
        maxMint: '10,000',
        fire: '9,678',
        token: 'None',

        collection: 'darkcountryh',
        creator: "darkcountryh",
        schema: "cardpack",
        templateID: 115987,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contains 40 cards from Standard Dark Country set. Chances are following: Common 60%, Rare 32%, Epic 6%, Legendary 2%",
            },
        ]
    },
    {
        id: "17",
        offerId: 17,
        img: '/image/sale-monst.png',
        imgSize: '',

        asset: "Monster Pack",
        name: "Monster Pack",
        number: "1099532199136",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(3040, 10000),
        maxMint: '10,000',
        fire: '9,678',
        token: 'None',

        collection: 'darkcountryh',
        creator: "darkcountryh",
        schema: "cardpack",
        templateID: 115987,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contains 40 cards from Standard Dark Country set. Chances are following: Common 60%, Rare 32%, Epic 6%, Legendary 2%",
            },
        ]
    },
    {
        id: "17",
        offerId: 17,
        img: '/image/sale-monst.png',
        imgSize: '',

        asset: "Monster Pack",
        name: "Monster Pack",
        number: "1099532199136",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(3040, 10000),
        maxMint: '10,000',
        fire: '9,678',
        token: 'None',

        collection: 'darkcountryh',
        creator: "darkcountryh",
        schema: "cardpack",
        templateID: 115987,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contains 40 cards from Standard Dark Country set. Chances are following: Common 60%, Rare 32%, Epic 6%, Legendary 2%",
            },
        ]
    },
    {
        id: "17",
        offerId: 17,
        img: '/image/sale-monst.png',
        imgSize: '',

        asset: "Monster Pack",
        name: "Monster Pack",
        number: "1099532199136",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(3040, 10000),
        maxMint: '10,000',
        fire: '9,678',
        token: 'None',

        collection: 'darkcountryh',
        creator: "darkcountryh",
        schema: "cardpack",
        templateID: 115987,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contains 40 cards from Standard Dark Country set. Chances are following: Common 60%, Rare 32%, Epic 6%, Legendary 2%",
            },
        ]
    },
    {
        id: "17",
        offerId: 17,
        img: '/image/sale-monst.png',
        imgSize: '',

        asset: "Monster Pack",
        name: "Monster Pack",
        number: "1099532199136",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(3040, 10000),
        maxMint: '10,000',
        fire: '9,678',
        token: 'None',

        collection: 'darkcountryh',
        creator: "darkcountryh",
        schema: "cardpack",
        templateID: 115987,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contains 40 cards from Standard Dark Country set. Chances are following: Common 60%, Rare 32%, Epic 6%, Legendary 2%",
            },
        ]
    },
    {
        id: "17",
        offerId: 17,
        img: '/image/sale-monst.png',
        imgSize: '',

        asset: "Monster Pack",
        name: "Monster Pack",
        number: "1099532199136",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(3040, 10000),
        maxMint: '10,000',
        fire: '9,678',
        token: 'None',

        collection: 'darkcountryh',
        creator: "darkcountryh",
        schema: "cardpack",
        templateID: 115987,

        price: getRandomFloat(499, 599),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contains 40 cards from Standard Dark Country set. Chances are following: Common 60%, Rare 32%, Epic 6%, Legendary 2%",
            },
        ]
    },
    //#18
    {
        id: "18",
        offerId: 18,
        img: '/image/sale-waxarena.png',
        imgSize: '',

        asset: "WAX Arena Contender Box #2 - LARGE BOX (30 cards)",
        name: "WAX Arena Contender Box #2 - LARGE BOX (30 cards)",
        number: "1099557377380",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(690, 2800),
        maxMint: '2,800',
        fire: '2,417',
        token: 'None',

        collection: 'waxarenagame',
        creator: "waxarenagame",
        schema: "pack",
        templateID: 237914,

        price: getRandomFloat(288, 349),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contender Box #2 containing 30 cards, three cards from each collection, with 4 possible rarities. Collections: Ultra Rare, Exit Limbo, Gods and Legends, NOA Collectibles, Ishiki Arata, Corporate World, destiNATIONS, Tales of the Crypto, LuminayaNFT and The Midnight Travelers. More info: www.waxarena.io",
            },
            {
                title: 'unpack',
                desc: "https://neftyblocks.com/c/waxarenagame/packs",
            },
            {
                title: 'size',
                desc: "large",
            },
        ]
    },
    {
        id: "18",
        offerId: 18,
        img: '/image/sale-waxarena.png',
        imgSize: '',

        asset: "WAX Arena Contender Box #2 - LARGE BOX (30 cards)",
        name: "WAX Arena Contender Box #2 - LARGE BOX (30 cards)",
        number: "1099557377380",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(690, 2800),
        maxMint: '2,800',
        fire: '2,417',
        token: 'None',

        collection: 'waxarenagame',
        creator: "waxarenagame",
        schema: "pack",
        templateID: 237914,

        price: getRandomFloat(288, 349),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contender Box #2 containing 30 cards, three cards from each collection, with 4 possible rarities. Collections: Ultra Rare, Exit Limbo, Gods and Legends, NOA Collectibles, Ishiki Arata, Corporate World, destiNATIONS, Tales of the Crypto, LuminayaNFT and The Midnight Travelers. More info: www.waxarena.io",
            },
            {
                title: 'unpack',
                desc: "https://neftyblocks.com/c/waxarenagame/packs",
            },
            {
                title: 'size',
                desc: "large",
            },
        ]
    },
    {
        id: "18",
        offerId: 18,
        img: '/image/sale-waxarena.png',
        imgSize: '',

        asset: "WAX Arena Contender Box #2 - LARGE BOX (30 cards)",
        name: "WAX Arena Contender Box #2 - LARGE BOX (30 cards)",
        number: "1099557377380",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(690, 2800),
        maxMint: '2,800',
        fire: '2,417',
        token: 'None',

        collection: 'waxarenagame',
        creator: "waxarenagame",
        schema: "pack",
        templateID: 237914,

        price: getRandomFloat(288, 349),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contender Box #2 containing 30 cards, three cards from each collection, with 4 possible rarities. Collections: Ultra Rare, Exit Limbo, Gods and Legends, NOA Collectibles, Ishiki Arata, Corporate World, destiNATIONS, Tales of the Crypto, LuminayaNFT and The Midnight Travelers. More info: www.waxarena.io",
            },
            {
                title: 'unpack',
                desc: "https://neftyblocks.com/c/waxarenagame/packs",
            },
            {
                title: 'size',
                desc: "large",
            },
        ]
    },
    {
        id: "18",
        offerId: 18,
        img: '/image/sale-waxarena.png',
        imgSize: '',

        asset: "WAX Arena Contender Box #2 - LARGE BOX (30 cards)",
        name: "WAX Arena Contender Box #2 - LARGE BOX (30 cards)",
        number: "1099557377380",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(690, 2800),
        maxMint: '2,800',
        fire: '2,417',
        token: 'None',

        collection: 'waxarenagame',
        creator: "waxarenagame",
        schema: "pack",
        templateID: 237914,

        price: getRandomFloat(288, 349),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contender Box #2 containing 30 cards, three cards from each collection, with 4 possible rarities. Collections: Ultra Rare, Exit Limbo, Gods and Legends, NOA Collectibles, Ishiki Arata, Corporate World, destiNATIONS, Tales of the Crypto, LuminayaNFT and The Midnight Travelers. More info: www.waxarena.io",
            },
            {
                title: 'unpack',
                desc: "https://neftyblocks.com/c/waxarenagame/packs",
            },
            {
                title: 'size',
                desc: "large",
            },
        ]
    },
    {
        id: "18",
        offerId: 18,
        img: '/image/sale-waxarena.png',
        imgSize: '',

        asset: "WAX Arena Contender Box #2 - LARGE BOX (30 cards)",
        name: "WAX Arena Contender Box #2 - LARGE BOX (30 cards)",
        number: "1099557377380",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(690, 2800),
        maxMint: '2,800',
        fire: '2,417',
        token: 'None',

        collection: 'waxarenagame',
        creator: "waxarenagame",
        schema: "pack",
        templateID: 237914,

        price: getRandomFloat(288, 349),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contender Box #2 containing 30 cards, three cards from each collection, with 4 possible rarities. Collections: Ultra Rare, Exit Limbo, Gods and Legends, NOA Collectibles, Ishiki Arata, Corporate World, destiNATIONS, Tales of the Crypto, LuminayaNFT and The Midnight Travelers. More info: www.waxarena.io",
            },
            {
                title: 'unpack',
                desc: "https://neftyblocks.com/c/waxarenagame/packs",
            },
            {
                title: 'size',
                desc: "large",
            },
        ]
    },
    {
        id: "18",
        offerId: 18,
        img: '/image/sale-waxarena.png',
        imgSize: '',

        asset: "WAX Arena Contender Box #2 - LARGE BOX (30 cards)",
        name: "WAX Arena Contender Box #2 - LARGE BOX (30 cards)",
        number: "1099557377380",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(690, 2800),
        maxMint: '2,800',
        fire: '2,417',
        token: 'None',

        collection: 'waxarenagame',
        creator: "waxarenagame",
        schema: "pack",
        templateID: 237914,

        price: getRandomFloat(288, 349),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'description',
                desc: "Contender Box #2 containing 30 cards, three cards from each collection, with 4 possible rarities. Collections: Ultra Rare, Exit Limbo, Gods and Legends, NOA Collectibles, Ishiki Arata, Corporate World, destiNATIONS, Tales of the Crypto, LuminayaNFT and The Midnight Travelers. More info: www.waxarena.io",
            },
            {
                title: 'unpack',
                desc: "https://neftyblocks.com/c/waxarenagame/packs",
            },
            {
                title: 'size',
                desc: "large",
            },
        ]
    },
    //#19
    {
        id: "19",
        offerId: 19,
        img: '/image/sale-1mb.png',
        imgSize: '',

        asset: "1MB Block (M7)",
        name: "1MB Block (M7)",
        number: "1099550778194",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(450, 2042),
        maxMint: '2,042',
        fire: '1,443',
        token: 'None',

        collection: 'bitcoinorign',
        creator: "bitcoinorign",
        schema: "blocks",
        templateID: 232043,

        price: getRandomFloat(148, 199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'series',
                desc: "Through the Looking Glass",
            },
            {
                title: 'moment',
                desc: "7 - Bitcoin Magazine",
            },
            {
                title: 'description',
                desc: "Unopened Origin Block.",
            },
        ]
    },
    {
        id: "19",
        offerId: 19,
        img: '/image/sale-1mb.png',
        imgSize: '',

        asset: "1MB Block (M7)",
        name: "1MB Block (M7)",
        number: "1099550778194",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(450, 2042),
        maxMint: '2,042',
        fire: '1,443',
        token: 'None',

        collection: 'bitcoinorign',
        creator: "bitcoinorign",
        schema: "blocks",
        templateID: 232043,

        price: getRandomFloat(148, 199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'series',
                desc: "Through the Looking Glass",
            },
            {
                title: 'moment',
                desc: "7 - Bitcoin Magazine",
            },
            {
                title: 'description',
                desc: "Unopened Origin Block.",
            },
        ]
    },
    {
        id: "19",
        offerId: 19,
        img: '/image/sale-1mb.png',
        imgSize: '',

        asset: "1MB Block (M7)",
        name: "1MB Block (M7)",
        number: "1099550778194",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(450, 2042),
        maxMint: '2,042',
        fire: '1,443',
        token: 'None',

        collection: 'bitcoinorign',
        creator: "bitcoinorign",
        schema: "blocks",
        templateID: 232043,

        price: getRandomFloat(148, 199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'series',
                desc: "Through the Looking Glass",
            },
            {
                title: 'moment',
                desc: "7 - Bitcoin Magazine",
            },
            {
                title: 'description',
                desc: "Unopened Origin Block.",
            },
        ]
    },
    {
        id: "19",
        offerId: 19,
        img: '/image/sale-1mb.png',
        imgSize: '',

        asset: "1MB Block (M7)",
        name: "1MB Block (M7)",
        number: "1099550778194",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(450, 2042),
        maxMint: '2,042',
        fire: '1,443',
        token: 'None',

        collection: 'bitcoinorign',
        creator: "bitcoinorign",
        schema: "blocks",
        templateID: 232043,

        price: getRandomFloat(148, 199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'series',
                desc: "Through the Looking Glass",
            },
            {
                title: 'moment',
                desc: "7 - Bitcoin Magazine",
            },
            {
                title: 'description',
                desc: "Unopened Origin Block.",
            },
        ]
    },
    {
        id: "19",
        offerId: 19,
        img: '/image/sale-1mb.png',
        imgSize: '',

        asset: "1MB Block (M7)",
        name: "1MB Block (M7)",
        number: "1099550778194",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(450, 2042),
        maxMint: '2,042',
        fire: '1,443',
        token: 'None',

        collection: 'bitcoinorign',
        creator: "bitcoinorign",
        schema: "blocks",
        templateID: 232043,

        price: getRandomFloat(148, 199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'series',
                desc: "Through the Looking Glass",
            },
            {
                title: 'moment',
                desc: "7 - Bitcoin Magazine",
            },
            {
                title: 'description',
                desc: "Unopened Origin Block.",
            },
        ]
    },
    {
        id: "19",
        offerId: 19,
        img: '/image/sale-1mb.png',
        imgSize: '',

        asset: "1MB Block (M7)",
        name: "1MB Block (M7)",
        number: "1099550778194",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(450, 2042),
        maxMint: '2,042',
        fire: '1,443',
        token: 'None',

        collection: 'bitcoinorign',
        creator: "bitcoinorign",
        schema: "blocks",
        templateID: 232043,

        price: getRandomFloat(148, 199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'series',
                desc: "Through the Looking Glass",
            },
            {
                title: 'moment',
                desc: "7 - Bitcoin Magazine",
            },
            {
                title: 'description',
                desc: "Unopened Origin Block.",
            },
        ]
    },
    {
        id: "19",
        offerId: 19,
        img: '/image/sale-1mb.png',
        imgSize: '',

        asset: "1MB Block (M7)",
        name: "1MB Block (M7)",
        number: "1099550778194",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(450, 2042),
        maxMint: '2,042',
        fire: '1,443',
        token: 'None',

        collection: 'bitcoinorign',
        creator: "bitcoinorign",
        schema: "blocks",
        templateID: 232043,

        price: getRandomFloat(148, 199),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
            {
                title: 'series',
                desc: "Through the Looking Glass",
            },
            {
                title: 'moment',
                desc: "7 - Bitcoin Magazine",
            },
            {
                title: 'description',
                desc: "Unopened Origin Block.",
            },
        ]
    },
    //#20
    {
        id: "20",
        offerId: 20,
        img: '/image/sale-cap.png',
        imgSize: 'vertical',

        asset: "Captain pack",
        name: "Captain pack",
        number: "1099550778194",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(77, 386),
        maxMint: '386',
        fire: '290',
        token: 'None',

        collection: 'nftdraft2121',
        creator: "nftdraft2121",
        schema: "packs",
        templateID: 201523,

        price: getRandomFloat(125, 149),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
        ]
    },
    {
        id: "20",
        offerId: 20,
        img: '/image/sale-cap.png',
        imgSize: 'vertical',

        asset: "Captain pack",
        name: "Captain pack",
        number: "1099550778194",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(77, 386),
        maxMint: '386',
        fire: '290',
        token: 'None',

        collection: 'nftdraft2121',
        creator: "nftdraft2121",
        schema: "packs",
        templateID: 201523,

        price: getRandomFloat(125, 149),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
        ]
    },
    {
        id: "20",
        offerId: 20,
        img: '/image/sale-cap.png',
        imgSize: 'vertical',

        asset: "Captain pack",
        name: "Captain pack",
        number: "1099550778194",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(77, 386),
        maxMint: '386',
        fire: '290',
        token: 'None',

        collection: 'nftdraft2121',
        creator: "nftdraft2121",
        schema: "packs",
        templateID: 201523,

        price: getRandomFloat(125, 149),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
        ]
    },
    {
        id: "20",
        offerId: 20,
        img: '/image/sale-cap.png',
        imgSize: 'vertical',

        asset: "Captain pack",
        name: "Captain pack",
        number: "1099550778194",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(77, 386),
        maxMint: '386',
        fire: '290',
        token: 'None',

        collection: 'nftdraft2121',
        creator: "nftdraft2121",
        schema: "packs",
        templateID: 201523,

        price: getRandomFloat(125, 149),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
        ]
    },
    {
        id: "20",
        offerId: 20,
        img: '/image/sale-cap.png',
        imgSize: 'vertical',

        asset: "Captain pack",
        name: "Captain pack",
        number: "1099550778194",

        owner: randomString(5) + '.wam',
        seller: name + '.wam',

        mint: getRandomInt(77, 386),
        maxMint: '386',
        fire: '290',
        token: 'None',

        collection: 'nftdraft2121',
        creator: "nftdraft2121",
        schema: "packs",
        templateID: 201523,

        price: getRandomFloat(125, 149),
        dollar: (price/waxprice).toFixed(2),
        dollars: (price/waxprice).toFixed(2),
        attr: [
        ]
    },
]

export const FetchSlider = (slider, creator) => {
    const result = []

    slider.forEach(v => {
        if(v.creator === creator) {
            result.push(v)
        }
    })

    result.sort((a, b) => {
        if (Number(a.price) > Number(b.price)) {
            return 1;
        } else if (Number(b.price) > Number(a.price)) {
            return -1;
        } else {
            return 0;
        }
    })

    return result
}