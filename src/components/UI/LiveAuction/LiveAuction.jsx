import React from 'react';

import { Container, Row, Col } from "reactstrap";

import { Navigation } from 'swiper'

import 'swiper/scss/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Link } from "react-router-dom";

import crt0 from '../../../assets/img/carts/crt0.png'

import crt1 from '../../../assets/img/carts/crt1.svg'

import crt2 from '../../../assets/img/carts/crt2.svg'

import author0 from '../../../assets/img/author/ProfImage1.svg'


import './live-auction.scss';

const LiveAuction = () => {
    return <section>
        <Container>
            <Row className='d-flex align-items-center justify-content-center pt-lg-5'>
                <Row>
                    <Col lg='12'>
                        <div className="live__auction__top d-flex justify-content-center">
                            <h3>Live Auctions</h3>
                        </div>
                    </Col>
                </Row>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={50}
                    slidesPerView={3}>

                    <SwiperSlide><Col lg='4' className='auction_card d-flex align-items-center'>
                        <div className="live_auction_cards d-flex flex-column">
                            <div className="card__body">
                                <Col lg='12'>
                                    <img src={crt0} alt=""/>
                                </Col>
                                <Col lg='12'>
                                    <div className="author__row d-flex align-items-center">
                                        <div className="card_author d-flex">
                                            <div className='d-flex flex-row'>
                                                <img src={author0} alt=""/>
                                                <div className='mx-lg-3'>
                                                    <h3>Virtual Art</h3>
                                                    <h5>by @wzard</h5>
                                                </div>
                                            </div>
                                            <div className="likes d-flex align-items-center">
                                                <span>
                                                    <Link to='#'>
                                                        <i className="ri-heart-fill"></i>
                                                    </Link>
                                                </span>
                                                <span>92</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg='12'>
                                    <div className="costs__row d-flex align-items-center justify-content-between">
                                        <h5>Current Bid</h5>
                                        <h3>4.89 ETH</h3>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col></SwiperSlide>
                    <SwiperSlide><Col lg='4' className='auction_card d-flex align-items-center'>
                        <div className="live_auction_cards d-flex flex-column">
                            <div className="card__body">
                                <Col lg='12'>
                                    <img src={crt1} alt=""/>
                                </Col>
                                <Col lg='12'>
                                    <div className="author__row d-flex align-items-center">
                                        <div className="card_author d-flex">
                                            <div className='d-flex flex-row'>
                                                <img src={author0} alt=""/>
                                                <div className='mx-lg-3'>
                                                    <h3>Virtual Art</h3>
                                                    <h5>by @wzard</h5>
                                                </div>
                                            </div>
                                            <div className="likes d-flex align-items-center">
                                                <span>
                                                    <Link to='#'>
                                                        <i className="ri-heart-fill"></i>
                                                    </Link>
                                                </span>
                                                <span>92</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg='12'>
                                    <div className="costs__row d-flex align-items-center justify-content-between">
                                        <h5>Current Bid</h5>
                                        <h3>4.89 ETH</h3>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col></SwiperSlide>
                    <SwiperSlide><Col lg='4' className='auction_card d-flex align-items-center'>
                        <div className="live_auction_cards d-flex flex-column">
                            <div className="card__body">
                                <Col lg='12'>
                                    <img src={crt2} alt=""/>
                                </Col>
                                <Col lg='12'>
                                    <div className="author__row d-flex align-items-center">
                                        <div className="card_author d-flex">
                                            <div className='d-flex flex-row'>
                                                <img src={author0} alt=""/>
                                                <div className='mx-lg-3'>
                                                    <h3>Virtual Art</h3>
                                                    <h5>by @wzard</h5>
                                                </div>
                                            </div>
                                            <div className="likes d-flex align-items-center">
                                                <span>
                                                    <Link to='#'>
                                                        <i className="ri-heart-fill"></i>
                                                    </Link>
                                                </span>
                                                <span>92</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg='12'>
                                    <div className="costs__row d-flex align-items-center justify-content-between">
                                        <h5>Current Bid</h5>
                                        <h3>4.89 ETH</h3>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col></SwiperSlide>
                    <SwiperSlide><Col lg='4' className='auction_card d-flex align-items-center'>
                        <div className="live_auction_cards d-flex flex-column">
                            <div className="card__body">
                                <Col lg='12'>
                                    <img src={crt0} alt=""/>
                                </Col>
                                <Col lg='12'>
                                    <div className="author__row d-flex align-items-center">
                                        <div className="card_author d-flex">
                                            <div className='d-flex flex-row'>
                                                <img src={author0} alt=""/>
                                                <div className='mx-lg-3'>
                                                    <h3>Virtual Art</h3>
                                                    <h5>by @wzard</h5>
                                                </div>
                                            </div>
                                            <div className="likes d-flex align-items-center">
                                                <span>
                                                    <Link to='#'>
                                                        <i className="ri-heart-fill"></i>
                                                    </Link>
                                                </span>
                                                <span>92</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg='12'>
                                    <div className="costs__row d-flex align-items-center justify-content-between">
                                        <h5>Current Bid</h5>
                                        <h3>4.89 ETH</h3>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col></SwiperSlide>
                    <SwiperSlide><Col lg='4' className='auction_card d-flex align-items-center'>
                        <div className="live_auction_cards d-flex flex-column">
                            <div className="card__body">
                                <Col lg='12'>
                                    <img src={crt1} alt=""/>
                                </Col>
                                <Col lg='12'>
                                    <div className="author__row d-flex align-items-center">
                                        <div className="card_author d-flex">
                                            <div className='d-flex flex-row'>
                                                <img src={author0} alt=""/>
                                                <div className='mx-lg-3'>
                                                    <h3>Virtual Art</h3>
                                                    <h5>by @wzard</h5>
                                                </div>
                                            </div>
                                            <div className="likes d-flex align-items-center">
                                                <span>
                                                    <Link to='#'>
                                                        <i className="ri-heart-fill"></i>
                                                    </Link>
                                                </span>
                                                <span>92</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg='12'>
                                    <div className="costs__row d-flex align-items-center justify-content-between">
                                        <h5>Current Bid</h5>
                                        <h3>4.89 ETH</h3>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col></SwiperSlide>
                    <SwiperSlide><Col lg='4' className='auction_card d-flex align-items-center'>
                        <div className="live_auction_cards d-flex flex-column">
                            <div className="card__body">
                                <Col lg='12'>
                                    <img src={crt2} alt=""/>
                                </Col>
                                <Col lg='12'>
                                    <div className="author__row d-flex align-items-center">
                                        <div className="card_author d-flex">
                                            <div className='d-flex flex-row'>
                                                <img src={author0} alt=""/>
                                                <div className='mx-lg-3'>
                                                    <h3>Virtual Art</h3>
                                                    <h5>by @wzard</h5>
                                                </div>
                                            </div>
                                            <div className="likes d-flex align-items-center">
                                                <span>
                                                    <Link to='#'>
                                                        <i className="ri-heart-fill"></i>
                                                    </Link>
                                                </span>
                                                <span>92</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg='12'>
                                    <div className="costs__row d-flex align-items-center justify-content-between">
                                        <h5>Current Bid</h5>
                                        <h3>4.89 ETH</h3>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Col></SwiperSlide>
                </Swiper>

            </Row>
            <section>
                <Row className='view__all d-flex align-items-center justify-content-center'>
                    <button>
                        View All
                    </button>
                </Row>
            </section>
        </Container>
    </section>
}

export default LiveAuction