import { Col, Row, Button } from "react-bootstrap";
import { category } from '../data/map_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMousePointer, faEye, faScroll, faGear, faGem } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/map.css'

export default function Map() {
    return (
        <div className="c_container">
            <div className="content">
                <h2 className="blue_word">
                    課程資訊
                </h2>
                <p>通過本微學程，最低應修10學分</p>

                <h5 className="orange_word"><b>核心能力</b></h5>
                <p>
                    教育大數據微學程主要會以四大核心能力作為培育重點，
                    同學們可以透過知識地圖看到該課程重點培育知能，選擇適合自己的課程。
                </p>

                <div className="">
                    <b className="con_color"><FontAwesomeIcon icon={faEye} /> &nbsp;認知知能</b>
                    ：能瞭解教育大數據之基礎概念與在數位學習上的應用。
                </div>
                <br />
                <div className="">
                    <b className="kno_color"><FontAwesomeIcon icon={faScroll} /> &nbsp;知識知能</b>
                    ：能瞭解教育面或大數據分析面之理論知識與背景知識。
                </div>
                <br />
                <div className="">
                    <b className="tec_color"><FontAwesomeIcon icon={faGear} /> &nbsp;技術知能</b>
                    ：能撰寫程式語言或應用軟體進行教育大數據分析。
                </div>
                <br />
                <div className="">
                    <b className="val_color"><FontAwesomeIcon icon={faGem} /> &nbsp;價值知能</b>
                    ：能使用數據分析方法模型解決教育相關問題、創造價值。
                </div>

                <br />
                <h2 className="blue_word">
                    課程地圖
                </h2>
                <div>
                    {category.map((data) => {
                        return (
                            <Row className="inside">
                                <Col sm={12} md={2} >
                                    <h5>{data.difficulty}</h5>
                                    {data.depiction}
                                </Col>
                                <Col sm={12} md={10}>
                                    <hr />
                                </Col>
                                <Col sm={12} md={12} className="inside">
                                    {data.inner_data.map((datas) => {
                                        var cognition = datas.cognition,
                                            knowledge = datas.knowledge,
                                            technology = datas.technology,
                                            value = datas.value;

                                        cognition = cog(cognition);
                                        knowledge = kno(knowledge);
                                        technology = tec(technology);
                                        value = val(value);

                                        function cog(cognition) {
                                            if (cognition === "") {
                                                return <div> &nbsp;&nbsp;&nbsp;</div>
                                            }
                                            return <b className="con_color"><FontAwesomeIcon icon={faEye} /></b>
                                        }

                                        function kno(knowledge) {
                                            if (knowledge === "") {
                                                return <div> &nbsp;&nbsp;&nbsp;</div>
                                            }
                                            return <b className="kno_color"><FontAwesomeIcon icon={faScroll} /></b>
                                        }

                                        function tec(technology) {
                                            if (technology === "") {
                                                return <div> &nbsp;&nbsp;&nbsp;</div>
                                            }
                                            return <b className="tec_color"><FontAwesomeIcon icon={faGear} /></b>
                                        }

                                        function val(value) {
                                            if (value === "") {
                                                return <div> &nbsp;&nbsp;&nbsp;</div>
                                            }
                                            return <b className="val_color"><FontAwesomeIcon icon={faGem} /></b>
                                        }

                                        return (
                                            <Row>
                                                <Col sm={12} md={10} className='map_inside'>
                                                    < Row className="inside" >
                                                        <Col sm={6} className='map_inside'>
                                                            <a href={"/map/course/" + datas["course_id"]} className='map_a'>
                                                                <div className="map_btn">
                                                                    <b>{datas.course_name}</b> &nbsp; <FontAwesomeIcon icon={faMousePointer} />
                                                                </div>
                                                            </a>
                                                        </Col>
                                                        <Col xs={2} className='center'>
                                                            <b>{datas.credit}學分</b>
                                                        </Col>
                                                        <Col xs={4} className='center inside'>
                                                            <div className="">
                                                                <b>{datas.course_time[0].semester}</b>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col sm={12} md={2} className=' center'>
                                                    <Row className="center ">
                                                        <Col xs={3} className=" dot">{cognition}</Col>
                                                        <Col xs={3} className=" dot">{knowledge}</Col>
                                                        <Col xs={3} className=" dot">{technology}</Col>
                                                        <Col xs={3} className=" dot">{value}</Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        );
                                    })}
                                </Col>
                            </Row >
                        );
                    })}
                </div >
            </div >
        </div >
    )
}