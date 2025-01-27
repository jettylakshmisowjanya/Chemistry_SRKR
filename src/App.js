// App.js
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"; // Use BrowserRouter
import Home from "./components/home/home";
import Equipment from "./components/research/equipment/equipment";
import Publications from "./components/research/publications/publications";
import Projects from "./components/research/projects/projects";
import NonTeaching from "./components/faculty/nonTeaching/nonTeaching";
import Teaching from "./components/faculty/teaching/teaching";
import Courses from "./components/courses/courses";
import Hods from "./components/about/hods/hods";
import About from "./components/about/aboutUs/about";
import Seminars from "./components/research/seminars/events";
import Books from "./components/research/books/books";
import Model from "./components/syllabus/ModelPapers/model";
import Crs from "./components/syllabus/courseMaterials/crs";
import ResearchArea from "./components/research/researchArea/researchArea";
import Scholars from "./components/research/researchScholars/scholars";
import Patents from "./components/research/patents/patents";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teaching" element={<Teaching />}/>
        <Route path="/nonTeaching" element={<NonTeaching />}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="/hods" element={<Hods />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/publications" element={<Publications />}/>
        <Route path="/books" element={<Books />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/events" element={<Seminars />}/>
        <Route path="/model" element={<Model />}/>        
        <Route path="/model" element={<Model />}/>
        <Route path="/crs" element={<Crs />}/>
        <Route path="/researchArea" element={<ResearchArea />}/>
        <Route path="/scholars" element={<Scholars />}/>
        <Route path="/patents" element={<Patents />}/>



      </Routes>
    </Router>
  );
}

export default App;
