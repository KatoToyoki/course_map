import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSheetPlastic,
  faFile,
  faMagnifyingGlass,
  faBook,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "../css/style.css";

export default function Download() {
  return (
    <div className="c_container">
      <div className="content">
        <h2 className="blue_word">
          <b>相關連結</b>
        </h2>
        <br />
        <Row>
          <Col
            sm={12}
            md={4}
            className="center"
            style={{ paddingBottom: "40px" }}
          >
            <div>
              <h5>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="5x" />
                <br />
                <p>課程查詢</p>
              </h5>
            </div>
          </Col>
          <Col sm={12} md={8}>
            <ul>
              <li>
                <a href="https://aps.ntut.edu.tw/course/tw/SearchMProgram.jsp?format=-2&year=112&sem=2&code=AVW">
                  112 學年度第 2 學期開課列表
                </a>
              </li>
              <li>
                <a href="https://aps.ntut.edu.tw/course/tw/SearchMProgram.jsp?format=-2&year=112&sem=1&code=AVW">
                  112 學年度第 1 學期開課列表
                </a>
              </li>
              <li>
                <a href="https://aps.ntut.edu.tw/course/tw/QueryCurrPage.jsp">
                  課程查詢系統
                </a>
              </li>
            </ul>
          </Col>

          <Col
            sm={12}
            md={4}
            className="center"
            style={{ paddingBottom: "40px" }}
          >
            <div>
              <br />
              <h5>
                <FontAwesomeIcon icon={faBook} size="5x" />
                <br />
                <p>
                  <b>本微學程</b>
                </p>
              </h5>
            </div>
          </Col>
          <Col sm={12} md={8}>
            <ul>
              <li>
                <a href="https://oaa.ntut.edu.tw/var/file/8/1008/img/2880/AVW.pdf">
                  施行細則
                </a>
              </li>
              <li>
                <a href="https://oaa.ntut.edu.tw/var/file/8/1008/img/2880/AVW_.pdf">
                  開課規劃書
                </a>
              </li>
              <li>
                <a href="https://oaa.ntut.edu.tw/var/file/8/1008/img/2880/AVW_apply.odt">
                  修畢申請書（含證書申請書、學分審核表、抵免審核表、修業規定審查表）
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1SyhqzmJpg183ICZMoY5GpdlksJUpDHXLgTolHlj7EKE/edit?usp=sharing">
                  課程抵認證明書
                </a>
              </li>
              <li>
                <a href="https://oaa.ntut.edu.tw/p/412-1008-17153.php?Lang=zh-tw">
                  教務處官網公告網頁（教育大數據微學程）
                </a>
              </li>
              <li>
                <a href="https://oaa.ntut.edu.tw/var/file/8/1008/img/2966/F1.pdf">
                  國立臺北科技大學學程實施辦法
                </a>
              </li>
            </ul>
          </Col>

          <Col
            sm={12}
            md={4}
            className="center"
            style={{ paddingBottom: "40px" }}
          >
            <div>
              <h5>
                <FontAwesomeIcon icon={faUser} size="5x" />
                <br />
                <p>北科大學生</p>
              </h5>
            </div>
          </Col>
          <Col sm={12} md={8}>
            <ul>
              <li>
                <a href="https://aps.ntut.edu.tw/course/tw/Cprog.jsp?format=-3&year=111&matric=7">
                  各系學分標準統計表
                </a>
              </li>
              <li>
                <a href="https://oaa.ntut.edu.tw/p/412-1008-13057.php?Lang=zh-tw">
                  教務處官網公告網頁（修讀微學程相關流程規範）
                </a>
              </li>
            </ul>
          </Col>

          <Col
            sm={12}
            md={4}
            className="center"
            style={{ paddingBottom: "40px" }}
          >
            <div>
              <h5>
                <FontAwesomeIcon icon={faUserGroup} size="5x" />
                <br />
                <p>北聯大學生</p>
              </h5>
            </div>
          </Col>
          <Col sm={12} md={8}>
            <ul>
              <li>
                <a href="https://oaa.ntut.edu.tw/p/412-1008-12844.php?Lang=zh-tw">
                  校際選課說明
                </a>
              </li>
              <li>
                <a href="https://ustp.ntpu.edu.tw/info/14">北聯大微學程說明</a>
              </li>
            </ul>
          </Col>
        </Row>
        &nbsp;
      </div>
    </div>
  );
}
