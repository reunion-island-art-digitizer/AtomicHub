import React from 'react'
import classes from './footer.module.sass'

import { Text } from '../../component/ui/text'

export const Footer = () => {

    return (
        <div className={classes.footer}>
            <div className={classes.content}>
                <div className={classes.cont}>
                    <img src="/image/atomicassets.png" alt="" className={classes.img}/>
                    <Text weight={400}>
                        AtomicAssets is a standard for Non Fungible Tokens (NFTs) on the eosio blockchain technology.
                    </Text>
                    <Text weight={400}>
                        Anyone can utilize the AtomicAsset standard to tokenize and create digital assets and buy, sell & auction assets utilizing the AtomicMarket marketplace standard.
                    </Text>
                </div>
                <div className={classes.cont2}>
                    <div className={classes.link_cont}>
                        <div className={classes.link_title}>
                            <Text decor>
                                Explore
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                Explore & Search
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                Buy & Sell
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                View Stats
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                Trade
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                Create NFTs
                            </Text>
                        </div>
                    </div>
                    <div className={classes.link_cont}>
                        <div className={classes.link_title}>
                            <Text decor>
                                Developers
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                NFT Standard
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                Docs
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                Dev Group
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                Asset API
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                Market API
                            </Text>
                        </div>
                    </div>
                    <div className={classes.link_cont}>
                        <div className={classes.link_title}>
                            <Text decor>
                                Contact
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                FAQ
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                Support
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                Email
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                Telegram
                            </Text>
                        </div>
                        <div className={classes.link_a}>
                            <Text width={"100%"}>
                                Career
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.content2}>
                <div className={classes.content2_cont}>
                    <Text width={"100%"} weight={400} center>
                        All rights reserved © 2021&nbsp;
                        <Text decor weight={400}>
                            pink.gg
                        </Text>
                    </Text>
                </div>
                
                    <div  className={classes.content2_cont2}>
                        <Text decor weight={400}>
                            Imprint
                        </Text>
                    </div>
                    <div  className={classes.content2_cont2}>
                        <Text decor weight={400}>
                            Privacy Policy
                        </Text>
                    </div>
                    <div  className={classes.content2_cont2}>
                        <Text decor weight={400}>
                            Terms of Service
                        </Text>
                    </div>
                
            </div>
        </div>
    )
}