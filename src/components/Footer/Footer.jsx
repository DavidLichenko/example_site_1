import React from 'react'
import './footer.scss';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logoImage from "../../assets/img/logo.svg";
import {Link} from "react-router-dom";

const MY_ACCOUNT = [
    {
        display: 'Author Profile',
        url: '/seller-profile'
    },
    {
        display: 'Create Item',
        url: '/create'
    },
    {
        display: 'Edit Profile',
        url: '/edit-profile'
    },
    {
        display: 'Collection',
        url: '/market'
    },
]
const SUPPORT = [
    {
        display: 'Help & Support',
        url: '#'
    },
    {
        display: 'Item Details',
        url: '#'
    },
    {
        display: 'NFT Blog',
        url: '#'
    },
    {
        display: 'Activity',
        url: '#'
    },

]

const Footer = () => {
    return <footer className="footer">
        <Container className='container_footer'>
            <Row>
                <Col lg='2' md='6' sm='6'>
                    <div className='logo'>
                        <img src={logoImage} alt=""/>
                    </div>
                </Col>
                <Col lg='4' md='3' sm='6'>
                    <p className="desc__footer">
                        Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est.
                    </p>
                    <div className="links">
                        <span>
                            <Link to='#'>
                                <i className="ri-youtube-fill"></i>
                            </Link>
                        </span>
                        <span>
                            <Link to='#'>
                                <i className="ri-twitter-fill"></i>
                            </Link>
                        </span>
                        <span>
                            <Link to='#'>
                                <i className="ri-facebook-fill"></i>
                            </Link>
                        </span>
                        <span>
                            <Link to='#'>
                                <i className="ri-google-fill"></i>
                            </Link>
                        </span>
                    </div>
                    <span className="rights_reserved"><p>All rights reserved@2021</p></span>
                </Col>
                <Col lg='3' md='3' sm='6'>
                    <h5>My Account</h5>
                    <ListGroup className='list__group'>
                        {
                            MY_ACCOUNT.map((item,index)=> (
                                <ListGroupItem key={index} className='list__item'>
                                    <Link to={item.url}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3' md='3' sm='6'>
                    <h5>Help & Another</h5>
                    <ListGroup className='list__group'>
                        {
                            SUPPORT.map((item,index)=> (
                                <ListGroupItem key={index} className='list__item'>
                                    <Link to={item.url}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer