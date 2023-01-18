import Layout from './pages/Layout';
import Home from './pages/Home';
import Map from './pages/Map';
import School from './pages/School';
import Course from './pages/Course';
import College from './pages/College'

import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/map/course">
                        <Route path=":course_id" element={<Course />} />
                    </Route>
                    <Route path="/school" element={<School />} />
                    <Route path="/school">
                        <Route path=":school_name" element={<College />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}