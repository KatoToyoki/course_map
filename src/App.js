import Layout from './pages/Layout';
import Map from './pages/Map';
import Course from './pages/Course';
import News from './pages/News';
import QA from './pages/QA';
import About from './pages/About';
import Result from './pages/Result';
import Download from './pages/Download';
import Introduce from './pages/Introduce';
import NewsEach from './pages/NewsEach';
import ResultEach from './pages/ResultEach';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<News />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/news">
                        <Route path=":news_id" element={<NewsEach />} />
                    </Route>
                    <Route path="/map" element={<Map />} />
                    <Route path="/map/course">
                        <Route path=":course_id" element={<Course />} />
                    </Route>
                    <Route path="/qa" element={<QA />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/result">
                        <Route path=":result_id" element={<ResultEach />} />
                    </Route>
                    <Route path="/download" element={<Download />} />
                    <Route path="/introduce" element={<Introduce />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}