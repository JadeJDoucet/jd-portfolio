import '@mantine/core/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import { ENavigationOptions } from './types';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path={ENavigationOptions.PROJECTS} element={<Projects />} />
          <Route path={ENavigationOptions.CONTACT} element={<Contact />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
