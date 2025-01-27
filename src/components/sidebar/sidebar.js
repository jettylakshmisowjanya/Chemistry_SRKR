
import React from 'react'
import './sidebaar.css'
import { Link ,useLocation} from 'react-router-dom'


const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
            <div className="rights">
                <div style={{fontSize: '19px', borderBottom: '1px solid #8bb4d8', color: 'rgb(13, 153, 172)'}}>
                  Related Links</div>

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/researchArea') ? 'active-link' : ''}`}
          style={isActive('/researchArea') ? { backgroundColor: 'transparent' } : {}}
        >
          <Link to="/researchArea">Research Area</Link>
        </div>

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/scholars') ? 'active-link' : ''}`}
          style={isActive('/scholars') ? { backgroundColor: 'transparent' } : {}}
        >
          <Link to="/scholars">Research Scholars</Link>
        </div>

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/publications') ? 'active-link' : ''}`}
          style={isActive('/publications') ? { backgroundColor: 'transparent' } : {}}
        >
          <Link to="/publications">Research Publications</Link>
        </div>

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/patents') ? 'active-link' : ''}`}
          style={isActive('/patents') ? { backgroundColor: 'transparent' } : {}}
        >
          <Link to="/patents">Patents</Link>
        </div>

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/projects') ? 'active-link' : ''}`}
          style={isActive('/projects') ? { backgroundColor: 'transparent' } : {}}

        >
          <Link to="/projects">Projects</Link>
        </div>

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/books') ? 'active-link' : ''}`}
          style={isActive('/books') ? { backgroundColor: 'transparent' } : {}}

        >
          <Link to="/books">Books Published</Link>
        </div>

        

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/events') ? 'active-link' : ''}`}
          style={isActive('/events') ? { backgroundColor: 'transparent' } : {}}

        >
          <Link to="/events">Events</Link>
        </div>

        <div
          onMouseOver={(e) => { e.target.style.color = 'rgb(82, 154, 213)'; }}
          onMouseOut={(e) => { e.target.style.color = 'black'; }}
          className={`hi ${isActive('/equipment') ? 'active-link' : ''}`}
          style={isActive('/equipment') ? { backgroundColor: 'transparent' } : {}}
        >
          <Link to="/equipment">Lab Equipment</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar