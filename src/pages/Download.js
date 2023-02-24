import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSheetPlastic, faFile } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'

export default function Download() {
    return (
        <div className="c_container">
            <div className="content">
                <h2 className="blue_word"><b>檔案下載</b></h2>
                <br />
                <Row>
                    <Col sm={12} md={6}>
                        <div className="center">
                            <h5><FontAwesomeIcon icon={faSheetPlastic} size='5x' /><br /><p>申請表單</p></h5>
                        </div>
                        <ul>
                            <li>
                                教育大數據微學程 修畢申請表<br />（內含修業證書、學分審核、學分抵免、修業審查表）
                            </li>
                            <li>
                                <a href="../images/certificate.pdf" download>
                                    臺北聯合大學系統 跨校微學程證書申請單
                                </a>
                            </li>
                            <li>
                                <a href="../images/application_form.pdf" download>
                                    臺北聯合大學系統 校際選課申請表
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col sm={12} md={6}>
                        <div className="center">
                            <h5><FontAwesomeIcon icon={faFile} size='5x' /><br /><p><b>其他檔案</b></p></h5>
                        </div>
                        <ul>
                            <li>
                                國立臺北科技大學學程實施辦法
                            </li>
                            <li>
                                教育大數據微學程施行細則
                            </li>
                            <li>
                                <a href="../images/all.pdf" download>
                                    微學程懶人包
                                </a>
                            </li>
                            <li>
                                <a href="../images/poster.jpg" download>
                                    微學程宣傳海報
                                </a>
                            </li>
                        </ul>

                    </Col>
                </Row>


                &nbsp;

            </div>
        </div>
    )
}