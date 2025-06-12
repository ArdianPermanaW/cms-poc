import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import PageLayout from './components/PageLayout';
import BrowsePage from './pages/BrowsePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/browse" element={<BrowsePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
