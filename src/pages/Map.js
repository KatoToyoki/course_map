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
                        課程地圖
                    </h1>
                    <p className="yellow_word">通過本微學程，最低應修10學分</p>
                    <br />
                    <div>
                        {category.map((data) => {
                            return (
                                <Row>
                                    <Col sm={12} md={2} className='map_inside'>
                                        <h4>{data.difficulty}</h4>
                                        <p>{data.depiction}</p>
                                    </Col>
                                    <Col sm={12} md={10}>
                                        <hr />
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
                                                    return <b className='blank'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>;
                                                }
                                                return <b className={name}>{variable}</b>;
                                            }

                                            return (
                                                <Row>
                                                    <Col sm={12} md={7} className='map_inside '>
                                                        <Row>

                                                            <Col sm={10} className='map_inside'>
                                                                <a href={"/map/course/" + datas["course_id"]} className='map_a'>
                                                                    <div class="map_btn">
                                                                        <b>{datas.course_name}</b>
                                                                    </div>
                                                                </a>
                                                            </Col>
                                                            <Col sm={2} className='center'>
                                                                <div className="credit blue_green map_inside">
                                                                    {datas.credit}
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col sm={12} md={5} className='map_inside center'>
                                                        <div className="vertical dot separate map_inside">
                                                            {cognition} &nbsp;&nbsp;&nbsp;&nbsp;
                                                            {knowledge} &nbsp;&nbsp;&nbsp;&nbsp;
                                                            {technology}&nbsp;&nbsp;&nbsp;&nbsp;
                                                            {value}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            );
                                        })}
                                        <br />
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