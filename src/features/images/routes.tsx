import { Routes, Route } from 'react-router-dom';
import ImagesListComponent from './components/imagesList/imagesList.component.tsx';
import ImageDetailsComponent from './components/imageDetails/imageDetails.component.tsx';
const ImagesRoute = () => (
  <Routes>
    <Route path="/" element={<ImagesListComponent />} />
    <Route path=":postId" element={<ImageDetailsComponent />} />
  </Routes>
);

export default ImagesRoute;
