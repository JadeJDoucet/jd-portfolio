import '@mantine/core/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import { Home, Projects, Contact, NotFound } from './pages';
import { ENavigationOptions } from './types';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
