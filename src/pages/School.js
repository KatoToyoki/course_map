import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowDown } from "@fortawesome/free-solid-svg-icons";
import { school } from "../data/college_data";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/map.css'
import '../css/school.css'

export default function School() {
    return (
        <div className="map_bg">
            <div className="map_container">
                <div className="map_content">
                    <h1>
                        修讀資訊
                    </h1>
                    <p className="yellow_word"><b>點擊學校查看更多詳細資訊</b></p>
                    <br />

                    <Row>
                        <Col sm={12} md={6} className='center map_inside'>
                            <div className="yellow_border square">
                                <div className="center">
                                    <h3 className="yellow_word">事前申請</h3>
                                </div>
                                <hr />

                                <a href={"school/" + school[0]["abbreviation"]} className='map_a'>
                                    <div className="d-grid">
                                        <Button className="blue" size='lg'>
                                            臺北醫學大學
                                        </Button>
                                    </div>
                                </a>
                                <br />
                                <a href={"school/" + school[1]["abbreviation"]} className='map_a'>
                                    <div className="d-grid">
                                        <Button className="blue" size='lg'>
                                            臺灣海洋大學
                                        </Button>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col sm={12} md={6} className='center map_inside'>
                            <div className="yellow_border square">
                                <div className="center">
                                    <h3 className="yellow_word">事後認證</h3>
                                </div>
                                <hr />

                                <a href={"school/" + school[2]["abbreviation"]} className='map_a'>
                                    <div className="d-grid">
                                        <Button className="blue" size='lg'>
                                            臺北大學
                                        </Button>
                                    </div>
                                </a>
                                <br />
                                <a href={"school/" + school[3]["abbreviation"]} className='map_a'>
                                    <div className="d-grid">
                                        <Button className="blue" size='lg'>
                                            臺北科技大學
                                        </Button>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col sm={12}><br /></Col>
                        <Col sm={12} className='center'>
                            <FontAwesomeIcon icon={faLongArrowDown} size='3x' className="yellow_word" />
                        </Col>
                        <Col sm={12}><br /></Col>

                        <Col sm={12} className='center'>
                            <p>
                                依各校之校際選課相關規定辦理選課
                            </p>
                        </Col>

                        <Col sm={12}><br /></Col>
                        <Col sm={12} className='center'>
                            <FontAwesomeIcon icon={faLongArrowDown} size='3x' className="yellow_word" />
                        </Col>
                        <Col sm={12}><br /></Col>

                        <Col sm={12}>
                            <div className="center">
                                <p>
                                    檢具<span className="yellow_word"><b>北聯大證書申請表</b></span>+歷年成績單，向學生所屬學校提出申請，
                                    再轉交由<span className="yellow_word"><b>學程所屬學校</b></span>審核及核發學分學程證明。
                                </p>
                            </div>

                            <h5>一、單一學校學程：</h5>
                            <p>
                                <b>由開設學程之學校核發證書</b><br />
                                【申請範例】<br />
                                <span className="yellow_word"><b></b></span>
                                <span className="yellow_word"><b>臺北醫學大學</b></span>學生至<span className="yellow_word"><b>臺北大學</b></span>修讀巨量資料探勘學士學分學程，
                                學分修畢後備妥申請單及成績單向臺北醫學大學提出申請，
                                再由臺北醫學大學註冊組轉交臺北大學審核，
                                審核通過後由臺北大學註冊組以電話通知學生領取學程證書。
                            </p>
                            <hr />
                            <h5>二、跨校合開學程：</h5>
                            <p>
                                <b>（一）開設跨校學分學程學校之學生：由學生所屬學校核發證書</b><br />
                                【申請範例】<br />
                                <span className="yellow_word"><b>臺北科技大學</b></span>學生修讀 <span className="yellow_word"><b>「臺北科技大學」</b></span>與<span className="yellow_word"><b>臺北醫學大學」合開</b></span>「之輔助科技跨域微學程，
                                學分修畢後備妥申請單及相關文件依臺北科技大學(學生所屬學校)校內申請流程及規定辦理。
                                <br /><br />
                                <b>(二)非開設跨校學分學程學校之學生：核發臺北聯合大學系統證書</b><br />
                                【申請範例】<br />
                                <span className="yellow_word"><b>臺北大學</b></span>學生修讀 <span className="yellow_word"><b>「臺北科技大學」</b></span>與<span className="yellow_word"><b>「臺北醫學大學」合開</b></span>之輔助科技跨域微學程 ，
                                學分修畢後備妥申請單及成績單向臺北大學申請，審核過後由該年度輪值學校核發證書並通知學生領取。
                            </p>
                        </Col>

                        <Col sm={12}><hr /></Col>
                        <Col sm={12}>
                            <h5>北聯大跨校合開微學程/學分學程資訊</h5>
                            <div className="map_inside">
                                <a href={"https://ustp.ntpu.edu.tw/storage/shares/%E5%BE%AE%E5%AD%B8%E7%A8%8B/1111/%E4%BA%8C%E3%80%81111-1%E5%8C%97%E8%81%AF%E5%A4%A7%E8%B7%A8%E6%A0%A1%E5%90%88%E9%96%8B%E5%AD%B8%E7%A8%8B%E8%B3%87%E8%A8%8A-(%E7%94%9F%E9%86%AB)%E8%BC%94%E5%8A%A9%E7%A7%91%E6%8A%80%E8%B7%A8%E5%9F%9F%E5%BE%AE%E5%AD%B8%E7%A8%8B.pdf"}>
                                    <Button className="blue">
                                        (生醫)輔助科技跨域微學程
                                    </Button>
                                </a>
                            </div>

                            <div className="map_inside">
                                <a href={"https://ustp.ntpu.edu.tw/storage/shares/%E5%BE%AE%E5%AD%B8%E7%A8%8B/1111/%E4%BA%8C%E3%80%81111-1%E5%8C%97%E8%81%AF%E5%A4%A7%E8%B7%A8%E6%A0%A1%E5%90%88%E9%96%8B%E5%AD%B8%E7%A8%8B%E8%B3%87%E8%A8%8A-%E5%89%B5%E6%96%B0%E5%89%B5%E6%A5%AD(%E5%89%B5%E6%96%B0%E7%94%A2%E6%A5%AD%E7%AE%A1%E7%90%86)%E5%AD%B8%E5%88%86%E5%AD%B8%E7%A8%8B.pdf"}>
                                    <Button className="blue">
                                        創新創業(創新產業管理)學分學程
                                    </Button>
                                </a>
                            </div>

                            <div className="map_inside">
                                <a href={"https://ustp.ntpu.edu.tw/storage/shares/%E5%BE%AE%E5%AD%B8%E7%A8%8B/1111/%E4%BA%8C%E3%80%81111-1%E5%8C%97%E8%81%AF%E5%A4%A7%E8%B7%A8%E6%A0%A1%E5%90%88%E9%96%8B%E5%AD%B8%E7%A8%8B%E8%B3%87%E8%A8%8A-%E9%86%AB%E7%99%82%E7%A7%91%E6%8A%80%E6%9A%A8%E6%B3%95%E5%BE%8B%E5%AD%B8%E5%88%86%E5%AD%B8%E7%A8%8B.pdf"}>
                                    <Button className="blue">
                                        醫療科技暨法律學分學程
                                    </Button>
                                </a>
                            </div>

                            <br />

                            <h5>相關法規</h5>
                            <div className="map_inside">
                                <a href={"https://ustp.ntpu.edu.tw/storage/shares/%E5%BE%AE%E5%AD%B8%E7%A8%8B/%E5%8C%97%E8%81%AF%E5%A4%A7%E5%AD%B8%E5%88%86%E5%AD%B8%E7%A8%8B%E6%9A%A8%E5%BE%AE%E5%AD%B8%E7%A8%8B%E6%B3%95%E8%A6%8F20180903.pdf"}>
                                    <Button className="blue">
                                        臺北聯合大學系統法規
                                    </Button>
                                </a>
                            </div>

                            <br />

                            <h5>表單下載</h5>
                            <div className="map_inside">
                                <a href={"https://ustp.ntpu.edu.tw/storage/shares/%E5%BE%AE%E5%AD%B8%E7%A8%8B/%E8%87%BA%E5%8C%97%E8%81%AF%E5%90%88%E5%A4%A7%E5%AD%B8%E7%B3%BB%E7%B5%B1%E5%AD%B8%E5%88%86%E5%AD%B8%E7%A8%8B%E8%AD%89%E6%98%8E%E6%9B%B8%E7%94%B3%E8%AB%8B%E8%A1%A8.pdf"}>
                                    <Button className="blue">
                                        北聯大證書申請表
                                    </Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div >
            </div >
        </div >
    )
}