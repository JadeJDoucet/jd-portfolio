import './App.css';
import '@mantine/core/styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
