import {
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
  
  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    
  }
  
  export default function Layout() {
    return (
      
      <div>
        <Header />       
        <Outlet />
        <Footer />
        
      </div>
    );
  }
  

  
  
  

  
  