import { Col, Row, Button } from "react-bootstrap";
import { school } from "../data/college_data";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/map.css'
import '../css/school.css'

export default function School() {
    const abbreviation = (window.location.href).slice(-3),
        college = findData(abbreviation);

    function findData(abbreviation) {
        for (var i = 0; i < school.length; i++) {
            if (school[i].abbreviation.slice(-3) === abbreviation) {
                return school[i];
            }
        }
    }

    return (
        < div className="course_container" >
            <div className="course_bg">
                <Row>
                    <Col sm={12}>
                        <h2>{college.school_name}</h2>
                        <h6>{college.abbreviation}</h6>
                        <hr />
                    </Col>

                    <Col sm={4}>
                        學程資訊
                    </Col>
                    <Col sm={8} className='center'>
                        <a href={college.course_information}>
                            <Button className="light_blue">點我前往查看</Button>
                        </a>
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4}>
                        相關法規
                    </Col>
                    <Col sm={8} className='center'>
                        <a href={college.statute}>
                            <Button className="light_blue">點我前往查看</Button>
                        </a>
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4}>
                        聯絡窗口
                    </Col>
                    <Col sm={8}>
                        {college.contact.map((info) => {
                            return (
                                <Row>
                                    <Col sm={6}>
                                        {info.department}
                                    </Col>
                                    <Col sm={6}>
                                        {info.phone}
                                    </Col>
                                </Row>
                            );
                        })}
                    </Col>
                    <Col sm={12}><br /></Col>

                    <Col sm={12}>
                        <br />
                    </Col>
                    <Col sm={12} className='center'>
                        <a href={"/school"}>
                            <Button className="blue">
                                上一頁
                            </Button>
                        </a>
                    </Col>
                </Row>
            </div>
        </div>
    )
}