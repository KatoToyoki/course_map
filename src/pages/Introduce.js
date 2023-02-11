import { Col, Row, Dropdown } from "react-bootstrap";
import { category } from '../data/map_data'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css';

import course_pic from '../images/001.png';
import order from '../images/002.png'

export default function Introduce() {
    let base = category[0].inner_data;
    let medium = category[1].inner_data;
    let master = category[2].inner_data;

    return (
        <div className="map_bg">
            <div id="menu">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="blue">

                        <h3 className="inside">
                            選單
                        </h3>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/introduce#course">教育大數據微學程</Dropdown.Item>
                        <Dropdown.Item href="/introduce#taking_course">修讀微學程</Dropdown.Item>
                        <Dropdown.Item href="/introduce#future_jobs">就業前景</Dropdown.Item>
                        <Dropdown.Item href="/introduce#learning_material">學習資源</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div>
                <a href="/introduce#course" className="no_decoration white_word">
                    <div className="menu_course">
                        教育大數據微學程
                    </div>

                </a>

                <a href="/introduce#taking_course" className="no_decoration white_word">
                    <div className="menu_taking">
                        修讀微學程
                    </div>
                </a>

                <a href="/introduce#future_jobs" className="no_decoration white_word">
                    <div className="menu_job">
                        就業前景
                    </div>
                </a>

                <a href="/introduce#learning_material" className="no_decoration white_word">
                    <div className="menu_material">
                        學習資源
                    </div>
                </a>

            </div>

            {/* the course anchors (in order not to be covered by the navbar) */}
            <span id="course" />
            <div className="map_container">
                <div className="map_content">
                    <div >
                        <h2 className="blue_word">
                            教育大數據微學程
                        </h2>
                        <br />
                        <p>
                            位於修讀大學／研究所的階段，同學如何選擇適合自己且對未來有幫助的課程是一件很重要的事，
                            除了自己原本的主修專業科系課程，跨域人才是各行各業的需求趨勢，但是對於同學們而言，
                            如何在有限的就學時間內完成第二專長的修讀，可能會需要大量時間甚至超修學分費才可能完成修讀。
                            因此選擇修讀「微學程」成為一個具備高度彈性且良好的跨域學習途徑，同學僅需要重新檢視
                            原本每學期修讀的課程，加入選修微學程所規範的課程，修讀完畢可申請證書乙紙。
                        </p>
                        <div className="center">
                            <img src={course_pic} width="100%"></img>
                        </div>

                        {/* the taking courses anchors (in order not to be covered by the navbar) */}
                        <span id="taking_course" />

                        <p>
                            教育大數據微學程（簡稱本微學程）依循相關規範課程修讀最低僅需10學分，
                            本微學程架構主要分為「基礎、進階、實務」三個階段，帶領同學由淺入深的學習，
                            「基礎課程」著重於資訊與數據分析的能力培育；「進階課程」帶入資訊與數據能力於教育層面的應用，
                            並建立資訊安全於教育的重要概念；「實務課程」則帶領學生針對實際教育場域的需求應用進行專題製作；
                            本微學程培養同學的第二專業提升跨領域思維及溝通，累積實務產業接觸的實作經驗，增加同學未來就業優勢。
                        </p>

                    </div>

                    <div>
                        <br />
                        <h2 className="blue_word">
                            修讀微學程
                        </h2>
                        <br />

                        <h5 className="yellow_word">修讀對象</h5>
                        <p>
                            本微學程開放【臺北聯合大學系統】在校生跨校選讀，包括臺北科大(主辦學校)、臺北大學、臺北醫大、臺灣海大。
                            由資工系的資訊專業、資財系的分析專業、師培中心的教育專業，三方師資共同開發培育教育資訊人才之跨領域課程。
                        </p>

                        <h5 className="yellow_word">修讀流程</h5>
                        <div className="center">
                            <img src={order} width="100%"></img>
                        </div>

                        <h5 className="yellow_word">如何修讀</h5>
                        <p>
                            北科學生修讀：欲修讀微學程之北科學生，依本校每學期選課開放時間(含加退選)內完成選課。
                            跨校學生修讀：北聯大系統之學生，同學應先填具本校「校際選課申請表-外校生至本校選課用」，
                            經他校所屬系、所、學位學程主管及教務處核可後，依規定之時間、程序，辦理本校選課手續，
                            始可至本校修課，詳細辦法請參閱 <a href="https://oaa.ntut.edu.tw/p/412-1008-12844.php?Lang=zh-tw">本校校際選課規範</a> 。
                        </p>

                        <h5 className="yellow_word">修讀門檻</h5>
                        <p>
                            同學可自行規劃修讀科目，但至少需完成修讀本微學程基礎課程2門課、進階課程2門課、實務課程1門課，
                            且總應修學分數合計至少需達10學分。
                        </p>
                        <Row>
                            <Col sm={12} md={4} className='map_inside'>
                                <div className="blue inside">
                                    <div className="white map_inside">
                                        <div className="center">
                                            <h4><b>基礎課程</b></h4>
                                        </div>
                                        <div className="center">
                                            選修至少2門課
                                        </div>
                                    </div>
                                    <br />
                                    <ul className="white_word">
                                        {base.map((data) => {
                                            return (
                                                <li>
                                                    {data.course_name}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </Col>

                            <Col sm={12} md={4} className='map_inside'>
                                <div className="blue_green inside">
                                    <div className="white map_inside">
                                        <div className="center">
                                            <h4><b>進階課程</b></h4>
                                        </div>
                                        <div className="center">
                                            選修至少2門課
                                        </div>
                                    </div>
                                    <br />
                                    <ul className="white_word">
                                        {medium.map((data) => {
                                            return (
                                                <li>
                                                    {data.course_name}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </Col>

                            <Col sm={12} md={4} className='map_inside' height="100%">
                                <div className="orange inside">
                                    <div className="white map_inside">
                                        <div className="center">
                                            <h4><b>實務課程</b></h4>
                                        </div>
                                        <div className="center">
                                            選修至少1門課
                                        </div>
                                    </div>
                                    <br />
                                    <ul className="white_word">
                                        {master.map((data) => {
                                            return (
                                                <li>
                                                    {data.course_name}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </Col>

                            <Col sm={12} md={12}>
                                <div className="green center map_inside">
                                    <b>總應修學分數 10學分</b>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <h5 className="yellow_word">修讀注意</h5>
                        <ol>
                            <li>修習各類學程之學生每學期所修學分上下限仍依本校學則相關規定辦理。</li>
                            <li>修習各類學程其科目成績需併入學期修習總學分及學期成績計算。</li>
                            <li>修畢各類學程科目之學分，屬原系專業課程，計入專業學分；非屬原系課程，得計入跨系所選修學分，惟課程名稱及內容相同之科目，不得重複修習。</li>
                        </ol>

                        <h5 className="yellow_word">申請證書</h5>
                        <ol>
                            <li>
                                已修畢微學程者，於填寫完修畢申請表後，請先送至微學程設置單位(北科資工系)進行初審。
                                確認無誤後，請於每學期第13週至第18週繳交學程修畢申請表至教務處教資中心(跨域學習小組)，
                                經審核通過，由本校核發微學程證書。
                            </li>

                            <li>
                                應屆畢業生之申請表繳交期限不受上述限制；但非應屆畢業生若無法在期限內繳交學程修畢申請表，
                                請於下個學期的第13週至第18週提出修畢申請。
                            </li>
                        </ol>

                        {/* the future_jobs anchors (in order not to be covered by the navbar) */}
                        <span id="future_jobs" />

                        <h5 className="yellow_word">相關網頁</h5>
                        <ul>
                            <li>
                                <a href="https://oaa.ntut.edu.tw/p/412-1008-13057.php?Lang=zh-tw">本校微學程說明</a>
                            </li>

                            <li>
                                <a href="https://oaa.ntut.edu.tw/p/412-1008-12844.php?Lang=zh-tw">本校校際選課說明</a>
                            </li>

                            <li>
                                <a href="https://aps.ntut.edu.tw/course/tw/QueryCurrPage.jsp">本校課程查詢系統</a>
                            </li>

                            <li>
                                <a href="https://ustp.ntpu.edu.tw/info/14">北聯大微學程說明</a>
                            </li>
                        </ul>

                    </div>

                    <div>
                        <br />
                        <h2 className="blue_word">
                            就業前景
                        </h2>
                        <br />

                        {/* the learning_material anchors (in order not to be covered by the navbar) */}
                        <span id="learning_material" />

                        <p>
                            一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字
                            一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字
                            一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字一些介紹文字
                        </p>
                    </div>

                    <div>
                        <br />
                        <h2 className="blue_word">
                            學習資源
                        </h2>
                        <br />

                        <p>
                            修讀教育大數據微學程的同學們即使沒有資訊或數據分析相關基礎，
                            透過本微學程豐富的學習資源，也可以順利完成修讀喔！
                        </p>
                        <ul>
                            <li>
                                共授專家分享：每門課程會邀請產業講師或專家學者進行分享，提供豐富的產業知識。
                            </li>

                            <li>
                                參訪講座活動：不定期舉辦企業參訪、專題講座等豐富活動，增添同學們的學習視野。
                            </li>

                            <li>
                                交流學習聚會：不定期舉辦交流學習聚會，讓同學間分享學習進度或教育議題等。
                            </li>

                            <li>
                                多元輔導機制：每門課程設置兩名助教，於每週固定時段提供課外輔導，提供給有需要的同學。
                            </li>

                            <li>
                                網路交流平臺：同學可以透過臉書/line社群發問，得到需要的協助與回應。
                            </li>

                            <li>
                                召開學生研習：能力不足的同學可以透過同儕之間的相互指導，跟上課程內容。
                            </li>

                            <li>
                                提供課程地圖：讓同學得到更明確的修課指引，安排修讀時間設立目標促進修習。
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}