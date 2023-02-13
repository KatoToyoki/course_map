import { Col, Row, Button } from "react-bootstrap";
import { category } from '../data/map_data'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/map.css'

export default function Map() {
    return (
        <div className="map_bg">
            <div className="map_container">
                <div className="map_content">
                    <h1>
                        課程資訊
                    </h1>
                    <p>通過本微學程，最低應修10學分</p>

                    <h5 className="blue_word"><b>核心能力</b></h5>
                    <p>
                        教育大數據微學程主要會以四大核心能力作為培育重點，
                        同學們可以透過知識地圖看到該課程重點培育知能，選擇適合自己的課程。
                    </p>

                    <div className="inside">
                        <span className="cognition"><b>1</b></span> &nbsp;
                        <b className="con_color">認知知能</b>
                        ：能瞭解教育大數據之基礎概念與在數位學習上的應用。
                    </div>
                    <div className="inside">
                        <span className="knowledge"><b>2</b></span> &nbsp;
                        <b className="kno_color">知識知能</b>
                        ：能瞭解教育面或大數據分析面之理論知識與背景知識。
                    </div>
                    <div className="inside">
                        <span className="technology"><b>3</b></span> &nbsp;
                        <b className="tec_color">技術知能</b>
                        ：能撰寫程式語言或應用軟體進行教育大數據分析。
                    </div>
                    <div className="inside">
                        <span className="value"><b>4</b></span> &nbsp;
                        <b className="val_color">價值知能</b>
                        ：能使用數據分析方法模型解決教育相關問題、創造價值。
                    </div>



                    <br />
                    <div>
                        {category.map((data) => {
                            return (
                                <Row>
                                    <Col sm={12} md={2} className='map_inside'>
                                        <h4>{data.difficulty}</h4>
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

                                            cognition = dot(cognition, "cognition");
                                            knowledge = dot(knowledge, "knowledge");
                                            technology = dot(technology, "technology");
                                            value = dot(value, "value");

                                            function dot(variable, name) {
                                                if (variable === "") {
                                                    return <b className='blank'>&nbsp;&nbsp;</b>;
                                                }
                                                return <b className={name}>{variable}</b>;
                                            }

                                            return (
                                                <Row>
                                                    <Col sm={12} md={9} className='map_inside '>
                                                        <Row>
                                                            <Col sm={6} className='map_inside'>
                                                                <a href={"/map/course/" + datas["course_id"]} className='map_a'>
                                                                    <div class="map_btn">
                                                                        <b>{datas.course_name}</b>
                                                                    </div>
                                                                </a>
                                                            </Col>
                                                            <Col sm={2} className='center'>
                                                                <b>{datas.credit}學分</b>
                                                            </Col>
                                                            <Col sm={4} className='vertical inside'>
                                                                <div className="green_word ">
                                                                    <b>{datas.course_time[0].semester}</b>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col sm={12} md={3} className=' center disappear'>
                                                        <Row className="center ">
                                                            <Col sm={3} className=" dot">{cognition}</Col>
                                                            <Col sm={3} className=" dot">{knowledge}</Col>
                                                            <Col sm={3} className=" dot">{technology}</Col>
                                                            <Col sm={3} className=" dot">{value}</Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            );
                                        })}
                                    </Col>
                                </Row>
                            );
                        })}
                    </div >
                </div>
            </div >
        </div>
    )
}