import Layout from './pages/Layout';
import Home from './pages/Home';
import Map from './pages/Map';
import School from './pages/School';

import { Routes, Route, HashRouter } from 'react-router-dom';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/course_map" element={<Home />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/school" element={<School />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}