import { Col, Row, Button } from "react-bootstrap";
import { result } from "../data/result_data";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'

export default function Result() {
    return (
        <div className="map_bg">
            <div className="map_container">
                <div className="map_content">
                    <h2 className="blue_word">計畫成果</h2>
                    <br />
                    {result.map((data) => {
                        return (
                            <Row>
                                <Col sm={12} md={3}>
                                    {data.year}/{data.month}/{data.date}
                                </Col>
                                <Col sm={12} md={9}>
                                    <a href={"/result/" + data["result_id"]}>{data.title}</a>
                                    <hr />
                                </Col>
                            </Row>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}