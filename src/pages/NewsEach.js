import { Col, Row, Button } from "react-bootstrap";
import { news } from "../data/news_data";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'

export default function NewsEach() {
    const id = (window.location.href).slice(-3),
        data = findData(id),
        audio = aud(data.audio),
        video = vid(data.video),
        image = img(data.image);


    function findData(id) {
        for (var i = 0; i < news.length; i++) {
            if (news[i].news_id === id) {
                return news[i];
            }
        }
    }

    function img(image) {
        if (image === "") {
            return <div></div>
        }
        return <img src={data.image} alt={data.title} width="100%"></img>
    }

    function aud(audio) {
        if (audio === "") {
            return <div></div>
        }
        return <audio controls><source src={data.audio} type="audio/mpeg" /></audio>
    }

    function vid(video) {
        if (video === "") {
            return <div></div>
        }
        return <video width="400" controls><source src={data.video} type="video/mp4" /></video>
    }

    return (
        <div className="map_bg">
            <div className="map_container">
                <div className="map_content">
                    <h2 className="blue_word">
                        {data.title}
                    </h2>
                    <br />
                    <p>
                        {data.content}
                    </p>
                    <div className="center">
                        {image}
                    </div>

                    <br /> <br />

                    <div className="center">
                        {audio}
                    </div>

                    <br /> <br />

                    <div className="center">
                        {video}
                    </div>

                    <br /><br />
                    <div className="center">
                        <a href={"/news"}>
                            <Button className="blue">
                                上一頁
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}