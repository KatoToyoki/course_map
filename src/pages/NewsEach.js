import { Col, Row, Button } from "react-bootstrap";
import { news } from "../data/news_data";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'

export default function NewsEach() {
    const id = (window.location.href).slice(-3),
        data = findData(id);

    function findData(id) {
        for (var i = 0; i < news.length; i++) {
            if (news[i].news_id === id) {
                return news[i];
            }
        }
    }

    return (
        <div className="c_container">
            <div className="content">
                <h2 className="blue_word">
                    {data.title}

                </h2>
                <br />
                <p>
                    {data.content}
                </p>
                <div className="center">
                    {data.image.map((img) => {
                        let images = [];
                        for (let i = 0; i < Object.keys(img).length; i++) {
                            let pointer = "";
                            if (i < 10) {
                                pointer = "0" + "" + i;
                            }
                            else {
                                pointer = "" + i;
                            }

                            images.push(
                                <Col xs={12} sm={12} md={6} lg={4} className="center">
                                    <img src={img["image" + pointer]} width="100%"></img>
                                </Col>
                            );
                            if ((i + 1) % 3 == 0) {
                                images.push(
                                    <Col sm={12}>
                                        <br />
                                    </Col>
                                )
                            }
                        }
                        if (images.length == 1) {
                            return (
                                <div className="center">
                                    <Row>
                                        <Col md={3} lg={4}></Col>
                                        {images}
                                    </Row>
                                </div>
                            )
                        }
                        else {
                            return (

                                <div className="center">
                                    <Row>
                                        {images}
                                    </Row>
                                </div>
                            );
                        }
                    })}
                </div>

                <div className="center">
                    {/* {audio} */}
                </div>

                <div className="center">
                    {/* {video} */}
                </div>

                <div className="center">
                    <a href={"/news"}>
                        <Button className="blue">
                            上一頁
                        </Button>
                    </a>
                </div>
            </div>
        </div >
    )
}