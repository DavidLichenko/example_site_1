import React from "react";
import './Header.scss';
import logoImage from '../../assets/img/logo.svg';
import {menu} from "./menu";
import {Link, NavLink} from 'react-router-dom'
import {Col, Container, Row} from "reactstrap";

const Header = () => {
    return <header className='header'>
        <Container className='mw-100'>
            <Row>
                <Col lg='4' md='4'>
                    <div className='logo'>
                        <img src={logoImage} alt=""/>
                    </div>
                </Col>
                <Col lg='4' md='4' className='d-flex'>
                    <div className='menu_wrapper'>
                        <ul>
                            {menu.map((item,index) => (
                                <li key={`menu item ${index}`}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
                <Col lg='4' md='4' className='d-flex align-items-end justify-content-end'>
                    <div className='auth_buttons'>
                        <Link to='/wallet'>
                            <button className="sign-up">
                                Connect Wallet
                            </button>
                        </Link>
                    </div>
                </Col>
                <span className="mobile__menu">
                <i className="ri-menu-line"></i>
            </span>
            </Row>
        </Container>
    </header>
}

export default Header;