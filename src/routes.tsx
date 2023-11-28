import { Routes, Route } from 'react-router-dom';
import ImagesRoute from './features/images/routes';

const MainRoutes = () => (
  <Routes>
    <Route path="/images/*" element={<ImagesRoute />} />
  </Routes>
);

export default MainRoutes;
