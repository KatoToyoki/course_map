import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSheetPlastic, faFile } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'

export default function Download() {
    return (
        <div className="map_bg">
            <div className="map_container">
                <div className="map_content">
                    <h2 className="blue_word">檔案下載</h2>
                    <br />
                    <Row>
                        <Col sm={12} md={6}>
                            <div className="center">
                                <h5><FontAwesomeIcon icon={faSheetPlastic} size='5x' /><br /><p>申請表單</p></h5>
                            </div>
                            <ul>
                                <li>
                                    <a href="https://www.google.com/">
                                        教育大數據微學程 修畢申請表<br />（內含修業證書、學分審核、學分抵免、修業審查表）
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/">
                                        臺北聯合大學系統 跨校微學程證書申請單
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/">
                                        臺北聯合大學系統 校際選課申請表
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        <Col sm={12} md={6}>
                            <div className="center">
                                <h5><FontAwesomeIcon icon={faFile} size='5x' /><br /><p>其他檔案</p></h5>
                            </div>
                            <ul>
                                <li>
                                    <a href="https://www.google.com/">
                                        國立臺北科技大學學程實施辦法
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/">
                                        教育大數據微學程施行細則
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/">
                                        微學程懶人包
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/">
                                        微學程宣傳海報
                                    </a>
                                </li>
                            </ul>

                        </Col>
                    </Row>


                    &nbsp;

                </div>
            </div>
        </div>
    )
}