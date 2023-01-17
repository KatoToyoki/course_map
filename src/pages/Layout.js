import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import '../css/style.css'

import logo from '../images/logo.png'

export default function Layout() {
    return (
        <div>
            <Navbar expand="lg" variant='dark' className='nav_container'>

                <Navbar.Brand href="/course_map" className='center'>
                    <img src={logo} alt="logo" className='nav_logo'></img>
                    &nbsp;
                    教育大數據微學程
                    &nbsp;&nbsp;
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/course_map">回到首頁</Nav.Link>

                        <Nav.Link href="/course_map/map">課程地圖</Nav.Link>

                        <NavDropdown title="各校資訊" id="basic-nav-dropdown" className='white_word'>
                            <NavDropdown.Item href="/course_map/school">臺北科技大學</NavDropdown.Item>
                            <NavDropdown.Item href="/school/NTPU">臺北大學</NavDropdown.Item>
                            <NavDropdown.Item href="/school/NTOU">臺灣海洋大學</NavDropdown.Item>
                            <NavDropdown.Item href="/action/TMU">臺北醫學大學</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            <Outlet />
        </div >
    )
}