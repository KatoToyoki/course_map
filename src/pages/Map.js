import { Col, Row } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import '../css/style.css'
import '../css/map.css'
import { category } from '../data/map_data'


export default function Map() {
    return (
        <div className="inner_container">
            <h1>
                課程地圖
            </h1>
            <br />
            <div>
                {category.map((data) => {
                    return (
                        <Row>
                            <Col sm={12} md={2} className='color1'>
                                <h4>{data.difficulty}</h4>
                                <p>{data.depiction}</p>
                            </Col>
                            <Col sm={12} md={10}>
                                {data.inner_data.map((datas) => {
                                    return (
                                        <Row>
                                            <Col sm={12} md={6} className='color2'>
                                                <Row>
                                                    <Col sm={2} className='center'>
                                                        {datas.credit}
                                                    </Col>
                                                    <Col sm={10}>
                                                        {datas.course_name}
                                                    </Col>
                                                </Row>

                                            </Col>
                                            <Col sm={12} md={6} className='color3'>
                                                <Row>
                                                    <Col sm={3} className='center'>
                                                        {datas.cognition}
                                                    </Col>
                                                    <Col sm={3} className='center'>
                                                        {datas.knowledge}
                                                    </Col>
                                                    <Col sm={3} className='center'>
                                                        {datas.technology}
                                                    </Col>
                                                    <Col sm={3} className='center'>
                                                        {datas.value}
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col sm={12}>
                                                <br />
                                            </Col>
                                        </Row>
                                    );
                                })}
                            </Col>
                        </Row>
                    );
                })}
            </div>
        </div>
    )
}