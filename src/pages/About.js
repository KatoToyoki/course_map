import { Col, Row, Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'

import team from '../images/team.png'

export default function About() {
    return (
        <div className="c_container">
            <div className="content">
                <h2 className="blue_word">關於本計畫</h2>
                <br />
                <Row>
                    <Col sm={12} md={3}>
                        <b>指導單位</b>
                    </Col>
                    <Col sm={12} md={9}>
                        教育部 資訊及科技教育司
                        <hr />
                    </Col>

                    <Col sm={12} md={3}>
                        <b>執行單位</b>
                    </Col>
                    <Col sm={12} md={9}>
                        國立臺北科技大學 資訊工程系、資訊財金管理系、師培中心
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
    )
}