import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import '../css/style.css'
import '../css/map.css'
import { category } from '../data/map_data'

export default function Course() {
    const id = (window.location.href).slice(-2),
        temp = findData(id),
        difficulty = temp[0],
        data = temp[1];

    function findData(id) {
        for (var i = 0; i < category.length; i++) {
            for (var j = 0; j < category[i].inner_data.length; j++) {
                if (category[i].inner_data[j].course_id === id) {
                    return [category[i].difficulty, category[i].inner_data[j]];
                }
            }
        }
    }

    return (
        < div className="course_container" >
            <div className="course_bg">
                <Row>
                    <Col sm={3} className='center'>
                        <h5>
                            【{difficulty}課程】
                        </h5>
                    </Col>
                    <Col sm={9}>
                        <h2>
                            {data.course_name}
                        </h2>
                    </Col>
                    <hr></hr>
                    <Col sm={12} className='yellow_word'>
                        <p><b>{data.course_depiction}</b></p>
                    </Col>
                    <Col sm={4} className='light_green inside'>
                        核心能力
                    </Col>
                    <Col sm={8} className='green inside'>
                        <Row>
                            <Col sm={3} className='center'>
                                {data.cognition}
                            </Col>
                            <Col sm={3} className='center'>
                                {data.knowledge}
                            </Col>
                            <Col sm={3} className='center'>
                                {data.technology}
                            </Col>
                            <Col sm={3} className='center'>
                                {data.value}
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={4} className='inside'>
                        開課時間
                    </Col>
                    <Col sm={8} className='inside'>
                        {data.course_time.map((time) => {
                            return (
                                <Row>
                                    <Col sm={6}>
                                        課號：{time.id}
                                    </Col>
                                    <Col sm={6}>
                                        {time.day} &nbsp; {time.time}
                                    </Col>
                                    <Col sm={12}>
                                        <br />
                                    </Col>
                                </Row>
                            );
                        })}
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4} className='inside'>
                        學分數
                    </Col>
                    <Col sm={8} className='inside'>
                        {data.credit}學分，每週{data.credit}小時
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4} className='inside'>
                        開課系級
                    </Col>
                    <Col sm={8} className='inside'>
                        {data.department}
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4} className='inside'>
                        授課教師
                    </Col>
                    <Col sm={8} className='inside'>
                        {data.lecturer}
                    </Col>
                </Row>
            </div>
        </div >
    )
}