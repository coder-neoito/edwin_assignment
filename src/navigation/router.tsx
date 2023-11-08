import Course from 'pages/Course';
import ListAll from 'pages/ListAll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/courses" element={<ListAll />} />
      <Route path="/courses/:id" element={<Course />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
