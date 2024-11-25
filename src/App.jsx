// load stuff
import './App.css'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import Degrees from './components/Degrees/Degrees.jsx'
import { Routes, Route} from "react-router-dom";
import Tabs from './components/People/Tabs.jsx'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Minors from './components/Minors/Minors.jsx';
import Employment from './components/Employment/Employment.jsx'
import ComingSoonPage from './components/ComingSoon/ComingSoon.jsx';

export default function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="degrees" element={<Degrees />} />
          <Route path="minors" element={<Minors />} />
          <Route path="cs" element={<ComingSoonPage/>}></Route>
          <Route path="employment" element={<Employment />} />
          <Route path="team" element={<Tabs />} />
          {/* these last four are bonus */}
          <Route path="cs" element={<ComingSoonPage />} />
          {/* <Route path="research" element={<Research />} /> */}
          {/* <Route path="resources" element={<Resources />} /> */}
          {/* <Route path="news" element={<News />} /> */}
          {/* <Route path="courses" element={<Courses />} /> */}
          {/* <Route path="maps" element={<Maps />} /> */}
        </Route>
      </Routes>
      </MantineProvider>
  );
}
