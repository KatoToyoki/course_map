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
                                            return (
                                                <Row>
                                                    <Col sm={12} md={6} className='map_inside'>
                                                        <Row>
                                                            <Col sm={10}>
                                                                <a href={"course/" + datas["course_id"]} className='map_a'>
                                                                    <div className="d-grid">
                                                                        <Button variant="outline-dark" size='lg'>
                                                                            {datas.course_name}
                                                                        </Button>
                                                                    </div>
                                                                </a>
                                                            </Col>
                                                            <Col sm={2} className='center'>
                                                                <div className="credit blue_green">
                                                                    {datas.credit}
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col sm={12} md={6} className='map_inside'>
                                                        <Row className="">
                                                            <Col sm={3} className='center'>
                                                                <b className="cognition">{datas.cognition}</b>
                                                            </Col>
                                                            <Col sm={3} className='center'>
                                                                <b className="knowledge">{datas.knowledge}</b>
                                                            </Col>
                                                            <Col sm={3} className='center'>
                                                                <b className="technology">{datas.technology}</b>
                                                            </Col>
                                                            <Col sm={3} className='center'>
                                                                <b className="value">{datas.value}</b>
                                                            </Col>
                                                        </Row>
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