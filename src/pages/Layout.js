import { Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBuilding, faSchool, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'

import logo from '../images/logo.png'

export default function Layout() {
    return (
        <div className='flex-wrapper'>
            <Navbar expand="lg" variant='dark' className='nav_container'>
                <Navbar.Brand href="/news" className='center'>
                    <img src={logo} alt="logo" className='nav_logo'></img>
                    &nbsp;
                    教育大數據微學程
                    &nbsp;&nbsp;
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/news" className='white_word'>最新消息</Nav.Link>
                        <Nav.Link href="/introduce" className='white_word'>認識微學程</Nav.Link>
                        <Nav.Link href="/map" className='white_word'>課程資訊</Nav.Link>
                        <Nav.Link href="/qa" className='white_word'>修讀QA</Nav.Link>
                        <Nav.Link href="/about" className='white_word'>關於本計畫</Nav.Link>
                        <Nav.Link href="/result" className='white_word'>計畫成果</Nav.Link>
                        <Nav.Link href="/download" className='white_word'>檔案下載</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
            <footer className='foot'>
                <div className='footer_bg'>
                    <Row>
                        <Col sm={12} md={3} className='center'>
                            <div>
                                <img src={logo} alt="logo" width="100%"></img>
                            </div>
                        </Col>
                        <Col sm={1}></Col>
                        <Col sm={12} md={8}>
                            <Row>
                                <Col sm={8}>
                                    <Row>
                                        <Col xs={1} className="center">
                                            <FontAwesomeIcon icon={faBuilding} />
                                        </Col>
                                        <Col xs={11}>
                                            指導單位：教育部 資訊及科技教育司<br />
                                        </Col>

                                        <Col xs={1} className="center">
                                            <FontAwesomeIcon icon={faSchool} />
                                        </Col>
                                        <Col xs={11}>
                                            執行單位：臺北科技大學<br />
                                        </Col>

                                        <Col xs={1} className="center">
                                            <FontAwesomeIcon icon={faUser} />
                                        </Col>
                                        <Col xs={11}>
                                            聯絡窗口：資訊工程系 蔡宜蕙小姐<br />
                                        </Col>

                                        <Col xs={1} className="center">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </Col>
                                        <Col xs={11}>
                                            聯絡電話：02-27712171分機4204<br />
                                        </Col>

                                        <Col xs={1} className="center">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </Col>
                                        <Col xs={11}>
                                            電子信箱：wert119911@mail.ntut.edu.tw<br />
                                        </Col>
                                    </Row>

                                </Col>
                                <Col sm={4} className='center inside'>
                                    <span className='pointer'>
                                        <a href="https://www.facebook.com/profile.php?id=100089037155805" className='facebook'>
                                            <FontAwesomeIcon icon={faFacebook} size="4x" />
                                        </a>
                                    </span>
                                </Col>
                            </Row>
                            <hr />
                            Copyright ©2023 國立臺北科技大學
                        </Col>
                    </Row>
                </div>
            </footer >
        </div >
    )
}