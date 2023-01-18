import { Col, Row } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import '../css/style.css'

import { category } from '../data/map_data'


export default function Course() {
    const id = (window.location.href).slice(-2);
    // const [data, difficulty] = null;

    function findData(id) {
        for (var i = 0; i < category.length; i++) {
            for (var j = 0; j < category[i].inner_data.length; j++) {
                if (category[i].inner_data[j].course_id === id) {
                    return [category[i].difficulty, category[i].inner_data[j]];
                }
            }
        }
    }

    const temp = findData(id)
    const difficulty = temp[0], data = temp[1];


    return (
        <div className="inner_container">
            <h1>
                course name
            </h1>
            <p>
                course id : {id}
            </p>
            <p>
                {difficulty}
                <br></br>
                {data.course_name}

            </p>


        </div>
    )
}