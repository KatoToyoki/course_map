import { Col, Row, Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'

import team from '../images/team.png'

export default function About() {
    return (
        <div className="map_bg">
            <div className="map_container">
                <div className="map_content">
                    <h2 className="blue_word">關於本計畫</h2>
                    <br />
                    <Row>
                        <Col sm={12} md={3}>
                            <b>指導單位</b>
                        </Col>
                        <Col sm={12} md={9}>
                            教育部 資訊及科技教育司
                        </Col>
                        <Col sm={12} md={3} />
                        <Col sm={12} md={9}>
                            <hr />
                        </Col>

                        <Col sm={12} md={3}>
                            <b>執行單位</b>
                        </Col>
                        <Col sm={12} md={9}>
                            國立臺北科技大學 資訊工程系、資訊財金管理系、師培中心
                        </Col>
                        <Col sm={12} md={3} />
                        <Col sm={12} md={9}>
                            <hr />
                        </Col>

                        <Col sm={12} md={3}>
                            <b>計畫目標</b>
                        </Col>
                        <Col sm={12} md={9}>
                            <p>
                                當學生面對教育議題時，可以透過學習數據分析與資料探勘的基礎技術，
                                在教育領域進行數據蒐集、整理、分析及預測模型建構，並依數據特性進行研究、
                                評估及系統設計開發，期能培育跨域教育資訊人才，促進教育領域更加精進的發展，
                                提供更優質的學習環境。
                            </p>
                        </Col>
                        <Col sm={12} md={3} />
                        <Col sm={12} md={9}>
                            <hr />
                        </Col>

                        <Col sm={12} md={3}>
                            <b>聯絡窗口</b>
                        </Col>
                        <Col sm={12} md={9}>
                            <p>
                                (北科)教育大數據微學程計畫 蔡宜蕙小姐<br />
                                電話：02-27712171分機4204<br />
                                E-mail：<a href="mailto:wert119911@mail.ntut.edu.tw">wert119911@mail.ntut.edu.tw</a>
                            </p>
                        </Col>
                        <Col sm={12} md={3} />
                        <Col sm={12} md={9}>
                            <hr />
                        </Col>
                        <Col sm={12} md={3}>
                            <b>團隊架構</b>
                        </Col>
                        <Col sm={12} md={9}>
                            <img src={team} alt="team" width="100%" />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}