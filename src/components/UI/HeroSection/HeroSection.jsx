import React from 'react'
import {Col, Container, Row} from "reactstrap";
import {statistic} from "./statistic";
import './HeroSection.scss';

import coinbase from '../../../assets/img/clients_logo/coinbase.svg'
import blockchain from '../../../assets/img/clients_logo/blockchain.svg'
import binance from '../../../assets/img/clients_logo/binance.svg'
import bitmex from '../../../assets/img/clients_logo/bitmex.svg'

const HeroSection = () => {
    return <section className="hero__section">
        <Container className='mw-100'>
            <Row>
                <Col lg='6' md='6'>
                    <div className='top_container'>
                        <div className='main_title'>
                            <h1>
                                Explore, Buy and Sell the <span className='emphasized_text'>Best NFTs!</span>
                            </h1>
                        </div>
                        <div className='buttons'>
                            <button className="button_explore">
                                Explore
                            </button>
                            <button className="button_create">
                                Create
                            </button>
                        </div>
                        <div className='info_block'>
                            <div className='statistic'>
                                {statistic.map((item, index) => (
                                    <div className='statistic_block' key={`stat item ${index}`}>
                                    <span className='statistic_title'>
                                        {item.title}
                                    </span>
                                        <span className='statistic_amount'>
                                        {item.amount}
                                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6' className='d-flex justify-content-end'>
                    <div className='right_block_blur'></div>
                    <div className='action_cart d-flex flex-column justify-content-between'>
                        <Row className='w-100 mx-auto'>
                            <Col lg='12' className='top_info d-flex justify-content-around align-items-center'>
                                <div className='current_bid mb-0 text-white-50'>
                                    <h4>Current Bid</h4>
                                    <h2 className='mb-0 text-white'>0.89 ETH</h2>
                                </div>
                                <div className='ends_in mb-0 text-white-50'>
                                    <h4>Ends in</h4>
                                    <h2 className='mb-0 text-white'>25 hrs</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className='w-100 mx-auto bg-white'>
                            <Col lg='12' className='bottom_info  d-flex justify-content-between align-items-center text-black'>
                                <div className='artist'>
                                    <h2>Artist</h2>
                                    <h4> @wzard </h4>
                                </div>
                                <button className='button_buy'>
                                    Start Bid
                                </button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <section>
            <Row>
                <Col lg='12'>
                    <div className="clients__logo">
                        <div><img src={coinbase} alt="coinbase"/></div>
                        <div><img src={blockchain} alt="blockchain"/></div>
                        <div><img src={binance} alt="binance"/></div>
                        <div><img src={bitmex} alt="bitmex"/></div>
                    </div>
                </Col>
            </Row>
            </section>
        </Container>
    </section>
}

export default HeroSection