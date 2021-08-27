import React from 'react'
import { useSelector } from 'react-redux'
import { Modal } from '../../modal'
import { TitleH1 } from '../../ui/title'
import { Text } from '../../ui/text'
import { Span } from '../../ui/span'

import classes from './wax.module.sass'

export const BuyWax = (props) => {
    const name = useSelector(state => state.app.user.login)

    return (
        <Modal close={() => props.close()} max={300}>
            <div className={classes.conteiner}>
                <div className={classes.title}>
                    <TitleH1 center load>
                        How to buy WAX
                    </TitleH1>
                    <div style={{paddingLeft: 10}}>
                       
                    </div>
                </div>
                <div className={classes.link}>
                    <Text font={20} weight={400}>
                        Your Address:
                    </Text>
                    <Text font={20} weight={700}>
                        {name}
                    </Text>
                </div>
                <div className={classes.menu} style={{borderBottom: true ? "4px solid #ea923e" : "4px solid #14192e"}}>
                    <Text>
                        Cloud Wallet
                    </Text>
                </div>
                <div className={classes.menu}>
                    <Text color={"#bfbebe"}>
                        Exchange
                    </Text>
                </div>
                <div style={{padding: "0px 16px"}}>
                    <Text color={"#bfbebe"} weight={400} flex>
                        You can buy WAX tokens&nbsp;(<Span weight={700} color={"white"}>WAXP</Span>)&nbsp;
                        directly from within the&nbsp;
                        <Span color={"#ea923e"}>
                            WAX Cloud Wallet 
                        </Span>&nbsp;
                        using a credit card or other crypto.
                    </Text>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 15}}>
                    <img alt="" src="https://ipfs.atomichub.io/ipfs/QmS5DhzhPejn2mNLzvPFbCN954hAXczCCCrMWpJdTnLsEy" style={{width: 236, height: 203}}/>
                </div>
                <ul  style={{marginTop: 15}}>
                    <li>
                    <Text weight={400} flex>
                        Open the&nbsp;
                        <Span color={"#ea923e"}>
                            WAX Cloud Wallet.
                        </Span>
                    </Text>
                    </li>
                    <li>
                        <Text weight={400} flex>
                            Click &nbsp;
                            <Span color={"white"}  weight={700}>
                                "Buy WAXP"
                            </Span>on the right hand side. On mobile, click the WAX logo in the top right corner.
                        </Text>
                    </li>
                    <li>
                        <Text weight={400} flex>
                            Choose one of the 3rd party payment options.
                        </Text>
                        <ul>
                            <li>
                            <Text weight={400} flex>
                                Pay with Fiat (e.g. credit card): Simplex / Moonpay&nbsp;
                                <Span color={"white"}  weight={700}>
                                    Simplex / Moonpay
                                </Span>
                            </Text>
                            </li>
                            <li>
                            <Text weight={400} flex>
                                Pay with Crypto:&nbsp;
                                <Span color={"white"}  weight={700}>
                                    ChangeNow
                                </Span>
                            </Text> 
                            </li>
                        </ul>
                    </li>
                    <li>
                    <Text weight={400} flex>
                        If you’re asked which account the tokens should be sent to, enter your own account name &nbsp;
                        <Span color={"white"}  weight={700}>
                        (za2vs.wam)
                        </Span>.&nbsp; You might also be asked what to put in the transfer memo, what you enter there is not important.
                    </Text>
                    </li>
                </ul>
            </div>
        </Modal>
    )
}