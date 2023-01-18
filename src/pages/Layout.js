import { Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'

import logo from '../images/logo.png'

export default function Layout() {
    return (
        <div>
            <Navbar expand="lg" variant='dark' className='nav_container'>

                {/* <Navbar.Brand href="/course_map" className='center'> */}
                <Navbar.Brand href="/course_map" className='center'>
                    <img src={logo} alt="logo" className='nav_logo'></img>
                    &nbsp;
                    教育大數據微學程
                    &nbsp;&nbsp;
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/course_map">回到首頁</Nav.Link> */}
                        <Nav.Link as={Link} to="/home">回到首頁</Nav.Link>
                        <Nav.Link as={Link} to="/map">課程地圖</Nav.Link>
                        <Nav.Link as={Link} to="/school">各校資訊</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
            <footer>
                <div className='footer_bg'>
                    <Row>
                        <Col sm={12} md={6} className='center'>
                            <div>
                                <img src={logo} alt="logo" width="50%"></img>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <Row>
                                <Col sm={9}>
                                    <span>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        &nbsp;&nbsp;
                                        106344 台北市忠孝東路三段一號<br />
                                    </span>

                                    <span>
                                        <FontAwesomeIcon icon={faPhone} />
                                        &nbsp;
                                        (886-2) 2771-2171<br /><br />
                                    </span>
                                </Col>
                                <Col sm={3}>
                                    <span className='pointer center'>
                                        <a href="https://www.facebook.com/profile.php?id=100089037155805" className='facebook'>
                                            <FontAwesomeIcon icon={faFacebook} size="4x" />
                                        </a>
                                    </span>
                                </Col>
                            </Row>
                            <br /><hr />
                            Copyright ©2023 國立臺北科技大學
                        </Col>
                    </Row>
                </div>
            </footer>
        </div >
    )
}