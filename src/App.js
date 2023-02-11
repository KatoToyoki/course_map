import Layout from './pages/Layout';
import Home from './pages/Home';
import Map from './pages/Map';
import School from './pages/School';
import Course from './pages/Course';
import College from './pages/College'
import News from './pages/News';
import QA from './pages/QA';
import About from './pages/About';
import Result from './pages/Result';
import Download from './pages/Download';
import Introduce from './pages/Introduce';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/map/course">
                        <Route path=":course_id" element={<Course />} />
                    </Route>
                    <Route path="/school" element={<School />} />
                    <Route path="/school">
                        <Route path=":school_name" element={<College />} />
                    </Route>
                    <Route path="/qa" element={<QA />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/introduce" element={<Introduce />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}