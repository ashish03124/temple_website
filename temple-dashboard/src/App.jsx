import {  Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/HomePage/Home';
import TemplePage from './pages/TemplePage/TemplePage';
import NotFound from './pages/NotFound';
import LiveDarshan from './pages/LiveDarshan/LiveDarshan';
import PoojaBooking from './pages/PoojaBooking/PoojaBooking';
import Festivals from './pages/Festivals/Festivals';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="live-darshan" element={<LiveDarshan />} />
          <Route path="pooja-booking" element={<PoojaBooking />} />
          <Route path="festivals" element={<Festivals />} />
          <Route path="temple/:templeId" element={<TemplePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}
export default App;