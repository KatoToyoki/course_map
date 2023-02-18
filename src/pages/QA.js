import { Col, Row, Dropdown } from "react-bootstrap";
import { questions } from "../data/question_data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'

export default function QA() {
    return (
        <div>
            <div className="phone_menu">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="blue">
                        <h3 className="inside">
                            選單
                        </h3>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/qa#common_questions">常見QA</Dropdown.Item>
                        <Dropdown.Item href="/qa#asking_question">我要發問</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div>
                <a href="/qa#common_questions" className="no_decoration white_word">
                    <div className="com_button1">
                        常見QA
                    </div>
                </a>

                <a href="/qa#asking_question" className="no_decoration white_word">
                    <div className="com_button2">
                        我要發問
                    </div>
                </a>
            </div>

            {/* the course anchors (in order not to be covered by the navbar) */}
            <span id="common_questions" />

            <div className="c_container">
                <div className="content">
                    <h2 className="blue_word">修讀QA</h2>
                    <br />
                    <Row>
                        <Col xs={2} className='vertical inside'>
                            <h4>常見QA</h4>
                        </Col>
                        <Col xs={10} className='inside'>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        {questions.map((data) => {
                            return (
                                <Col sm={12} md={6} className="inside">
                                    <h5 className="orange_word">#{data.id}</h5>
                                    <p>
                                        <b>Q：{data.q}</b>
                                    </p>

                                    <p>
                                        <b>A：</b>{data.ans}
                                    </p>
                                </Col>
                            )
                        })}
                    </Row>

                    {/* the course anchors (in order not to be covered by the navbar) */}
                    <span id="common_questions" />

                    <Row id="asking_question">
                        <Col xs={2} className='vertical inside'>
                            <h4>我要發問</h4>
                        </Col>
                        <Col xs={10} className='inside'>
                            <hr />
                        </Col>
                        <Col sm={12} md={6} className='inside'>
                            <p>
                                <h5>
                                    微學程修讀/申請相關
                                </h5>
                                <FontAwesomeIcon icon={faUser} /> &nbsp; 教務處教資中心 李小姐 <br />
                                <FontAwesomeIcon icon={faPhone} /> &nbsp; 02-27712171分機1163 <br />
                                <FontAwesomeIcon icon={faEnvelope} /> &nbsp;  <a href="mailto:hengyu@mail.ntut.edu.tw">hengyu@mail.ntut.edu.tw</a>
                            </p>
                        </Col>

                        <Col sm={12} md={6} className='inside'>
                            <p>
                                <h5>
                                    本計畫課程/活動相關
                                </h5>
                                <FontAwesomeIcon icon={faUser} /> &nbsp; (北科)教育大數據微學程計畫 蔡小姐 <br />
                                <FontAwesomeIcon icon={faPhone} /> &nbsp; 02-27712171分機4204 <br />
                                <FontAwesomeIcon icon={faEnvelope} /> &nbsp;  <a href="mailto:wert119911@mail.ntut.edu.tw">wert119911@mail.ntut.edu.tw</a>
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}