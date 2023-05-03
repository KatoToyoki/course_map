import { Col, Row, Button } from "react-bootstrap";
import { category } from '../data/map_data'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/map.css'

export default function Course() {
    const id = (window.location.href).slice(-2),
        temp = findData(id),
        difficulty = temp[0],
        data = temp[1],
        cognition = cog(data.cognition),
        knowledge = kno(data.knowledge),
        technology = tec(data.technology),
        value = val(data.value);

    function findData(id) {
        for (var i = 0; i < category.length; i++) {
            for (var j = 0; j < category[i].inner_data.length; j++) {
                if (category[i].inner_data[j].course_id === id) {
                    return [category[i].difficulty, category[i].inner_data[j]];
                }
            }
        }
    }

    function cog(cognition) {
        if (cognition === "") {
            return <div />
        }
        return <div>認知</div>
    }

    function kno(knowledge) {
        if (knowledge === "") {
            return <div />
        }
        return <div>知識</div>
    }

    function tec(technology) {
        if (technology === "") {
            return <div />
        }
        return <div>技術</div>
    }

    function val(value) {
        if (value === "") {
            return <div />
        }
        return <div>價值</div>
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
                    <Col sm={12} className='orange_word'>
                        <p><b>{data.course_depiction}</b></p>
                    </Col>
                    <Col sm={12}>
                        <p>{data.note}</p>
                    </Col>
                    <Col sm={4} className='light_green inside'>
                        核心能力
                    </Col>
                    <Col sm={8} className='green inside'>
                        <Row>
                            <Col sm={3} className='center'>
                                {cognition}
                            </Col>
                            <Col sm={3} className='center'>
                                {knowledge}
                            </Col>
                            <Col sm={3} className='center'>
                                {technology}
                            </Col>
                            <Col sm={3} className='center'>
                                {value}
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={4} className='inside'>
                        開課單位
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

                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4} className='inside'>
                        開課學期
                    </Col>
                    <Col sm={8} className='inside'>
                        {data.course_time.map((time) => {
                            return (
                                <Row>
                                    <Col sm={12}>
                                        {time.semester}
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
                        課程時段
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
                        課程概述
                    </Col>
                    <Col sm={8} className='inside'>
                        <p>{data.course_info_ch}</p>
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={4} className='inside'>
                        English Description
                    </Col>
                    <Col sm={8} className='inside'>
                        <p>{data.course_info_en}</p>
                    </Col>
                    <Col sm={12} md={4}></Col>
                    <Col sm={12} md={8}>
                        <hr />
                    </Col>

                    <Col sm={12}>
                        <br />
                    </Col>
                    <Col sm={12} className='center'>
                        <a href={"/map"}>
                            <Button className="blue">
                                上一頁
                            </Button>
                        </a>
                    </Col>
                </Row>
            </div>
        </div >
    )
}