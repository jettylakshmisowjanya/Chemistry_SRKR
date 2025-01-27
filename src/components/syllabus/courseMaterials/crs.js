import React, { useState } from 'react';
import './crs.css'


import { Link , useLocation } from 'react-router-dom';
import Navbar from '../../navbar/navbar';

const Crs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const [isSyllabus1Open, setIsSyllabus1Open] = useState(false);
  const [isSyllabus2Open, setIsSyllabus2Open] = useState(false);
  const [isSyllabus3Open, setIsSyllabus3Open] = useState(false);
  const [isSyllabus4Open, setIsSyllabus4Open] = useState(false);
  const [isSyllabus5Open, setIsSyllabus5Open] = useState(false);

  const toggleSyllabus1 = () => {
    console.log("Toggle Syllabus1 Clicked!");
    setIsSyllabus1Open(!isSyllabus1Open);
  };
  const toggleSyllabus2 = () => {
    console.log("Toggle Syllabus2 Clicked!");
    setIsSyllabus2Open(!isSyllabus2Open);
  };
  const toggleSyllabus3 = () => {
    console.log("Toggle Syllabus3 Clicked!");
    setIsSyllabus3Open(!isSyllabus3Open);
  };
  const toggleSyllabus4 = () => {
    console.log("Toggle Syllabus4 Clicked!");
    setIsSyllabus4Open(!isSyllabus4Open);
  };
  const toggleSyllabus5 = () => {
    console.log("Toggle Syllabus5 Clicked!");
    setIsSyllabus5Open(!isSyllabus5Open);
  };
  const isCrs = location.pathname === '/crs';
  const isModel = location.pathname === '/model';

  const syllabusClass = isCrs ? 'crs-page' : isModel ? 'model-page' : '';
  return (
    <div >
   <Navbar/>

      <header className='hed'>
        <center>
            <h1 class="headin"><u>CHEMISTRY COURSE-MATERIALS</u></h1>
        </center>
        </header>
    
    {/* 
    .
    .

    */}



        <div id="container">

        <div style={{ paddingBottom: '10px' }}></div>
        <div id="cont2">
          <p className="para2" id="para2" onClick={toggleSyllabus5} style={{ cursor: 'pointer' }}>
            &ensp;&ensp;↪ &ensp;R-23 REGULATION APPLIED CHEMISTRY SYLLABUS AND MODEL PAPERS
          </p>

          {/* Toggle content based on click */}
          {isSyllabus5Open && (
            <table border="1px" className="table1" >
              <thead>
                <tr>
                  <th>REGULATION</th>
                  <th>COURSE-MATERIALS</th>
                </tr>
              </thead>
              <tr>
                    <th>R-23</th>
                   
                    <th> <a href="https://drive.google.com/file/d/1Bud0l0qllsAYzBGv9lnwY9idY2QsNlEN/view?usp=drivesdk " target="_blank" >Electrochemistry and Applications, Corrosion</a></th>
                </tr>
                 <tr>
                    <th>R-23</th>
                  
                     <th> <a href="https://drive.google.com/file/d/1BvgQgAuasjORuaT26uGqNqJwt8wjW1t0/view?usp=drivesdk" target="_blank">Modern Engineering Materials</a></th>
                    
                </tr>
                <tr>
                    <th>R-23</th>
                    <th><a href="https://drive.google.com/file/d/1CZ19TDEfNhnugT26dvZ8OQ8yrNFurbvk/view?usp=drive_link" target="_blank">Structure and Bonding Models</a></th>
                </tr>
                <tr>
                    <th>R-23</th>
                    <th><a href="https://drive.google.com/file/d/1XSCrx9vEleriCzWLGwz9igZ8I-dijq-O/view?usp=drive_link" target="_blank">Polymer Chemistry</a></th>
                </tr>
                <tr>
                    <th>R-23</th>
                    <th><a href="https://drive.google.com/file/d/1BuUPyh1pWVoGAlcEanMAZGhkQNh6gEas/view?usp=drivesdk" target="_blank">Instrumental Metthods and Water Analysis</a></th>
                </tr>
                

            </table>
          )}
        </div>



        <div style={{ paddingBottom: '10px' }}></div>
        <div id="cont2">
          <p className="para2" id="para2" onClick={toggleSyllabus1} style={{ cursor: 'pointer' }}>
            &ensp;&ensp;↪ &ensp;R-23 REGULATION ENGINEERING CHEMISTRY SYLLABUS AND MODEL PAPERS
          </p>

          {/* Toggle content based on click */}
          {isSyllabus1Open && (
            <table border="1px" className="table1" >
              <thead>
                <tr>
                  <th>REGULATION</th>
                  <th>COURSE-MATERIALS</th>
                </tr>
              </thead>
              <tr>
                    <th>R-23</th>
                   
                    <th> <a href="https://drive.google.com/file/d/1jEJXLgannMddPxacPuNogS-gujj8Em2k/view?usp=drive_link" target="_blank" >Electro chemistry and its Applications</a></th>
                </tr>
                 <tr>
                    <th>R-23</th>
                  
                     <th> <a href="https://drive.google.com/file/d/1sJEtOXxdFj_U7lJBNoUp7GHRnt6q6VmJ/view?usp=drive_link" target="_blank">Surface Chemistry and Nano materials</a></th>
                    
                </tr>
                <tr>
                    <th>R-23</th>
                    <th><a href="https://drive.google.com/file/d/1kwv2P0a_efrcSjY1WQ0aEBJDNfg3TgfD/view?usp=drive_link" target="_blank">Modern Engineering Materials</a></th>
                </tr>
                <tr>
                    <th>R-23</th>
                    <th><a href="https://drive.google.com/file/d/1e_P3kqvQ7UndoX8h7cFOexUbIsSK_NS7/view?usp=drive_link" target="_blank">Polymers and Fuel Chemistry</a></th>
                </tr>
                <tr>
                    <th>R-23</th>
                    <th><a href="https://drive.google.com/file/d/1FrX1R5A5WBHKC_3hXv5_89DMrf8eAgtF/view?usp=drive_link" target="_blank">Water technology</a></th>
                </tr>

            </table>
          )}
        </div>
      </div>

      <div style={{ paddingBottom: '10px' }}></div>
        <div id="cont2">
          <p className="para2" id="para2" onClick={toggleSyllabus2} style={{ cursor: 'pointer' }}>
            &ensp;&ensp;↪ &ensp;R-20 REGULATION APPLIED CHEMISTRY SYLLABUS AND MODEL PAPERS
          </p>

          {/* Toggle content based on click */}
          {isSyllabus2Open && (
            <table border="1px" className="table1" >
              <thead>
                <tr>
                  <th>REGULATION</th>
                  <th>COURSE-MATERIALS</th>
                </tr>
              </thead>
              <tr>
                    <th>R-20</th>
                   
                    <th> <a href="https://drive.google.com/file/d/1ScGuWmSwE8PIKxWai3vDDOALZYp2lfJm/view?usp=drive_link" target="_blank" >Electro chemistry and Corrosion</a></th>
                </tr>
                 <tr>
                    <th>R-20</th>
                  
                     <th> <a href="https://drive.google.com/file/d/1i41XHFVGr2W7xYEaXyrA-8MWdsiM41_M/view?usp=drive_link" target="_blank">Advanced Materials</a></th>
                    
                </tr>
                <tr>
                    <th>R-20</th>
                    <th><a href="https://drive.google.com/file/d/1CZ19TDEfNhnugT26dvZ8OQ8yrNFurbvk/view?usp=drive_link" target="_blank">Energy Sources</a></th>
                </tr>
                <tr>
                    <th>R-20</th>
                    <th><a href="https://drive.google.com/file/d/1XSCrx9vEleriCzWLGwz9igZ8I-dijq-O/view?usp=drive_link" target="_blank">Polymers</a></th>
                </tr>
                <tr>
                    <th>R-20</th>
                    <th><a href="https://drive.google.com/file/d/1fujHmzABmt8YhWGmKQPT_DWM1hC5G8xN/view?usp=drive_link" target="_blank">Water Technology</a></th>
                </tr>
                

            </table>
          )}
        </div>


        <div style={{ paddingBottom: '10px' }}></div>
        <div id="cont2">
          <p className="para2" id="para2" onClick={toggleSyllabus3} style={{ cursor: 'pointer' }}>
            &ensp;&ensp;↪ &ensp;R-19 REGULATION ENGINEERING CHEMISTRY SYLLABUS AND MODEL PAPERS
          </p>

          {/* Toggle content based on click */}
          {isSyllabus3Open && (
            <table border="1px" className="table1" >
              <thead>
                <tr>
                  <th>REGULATION</th>
                  <th>COURSE-MATERIALS</th>
                </tr>
              </thead>
              <tr>
                    <th>R-19</th>
                   
                    <th> <a href="https://docs.google.com/document/d/1-rhx0xdhM3rGYcQpC7dkQzEXjEK_T_E9/edit?usp=drive_link&ouid=102334380149939832075&rtpof=true&sd=true" target="_blank" >Energy sources</a></th>
                </tr>
                 <tr>
                    <th>R-19</th>
                  
                     <th> <a href="https://docs.google.com/document/d/1FGNl-0iKPS71_gdzwT3WKKxKO0kWVM4O/edit?usp=drive_link&ouid=102334380149939832075&rtpof=true&sd=true" target="_blank">Fuels</a></th>
                    
                </tr>
                <tr>
                    <th>R-19</th>
                    <th><a href="https://docs.google.com/document/d/1-7eQs-vN-0jCutP-BoXEB6uKy3PZput_/edit?usp=drive_link&ouid=102334380149939832075&rtpof=true&sd=true" target="_blank">PAINTS</a></th>
                </tr>

            </table>
          )}
        </div>

        <div style={{ paddingBottom: '10px' }}></div>
        <div id="cont2">
          <p className="para2" id="para2" onClick={toggleSyllabus4} style={{ cursor: 'pointer' }}>
            &ensp;&ensp;↪ &ensp;R-17 REGULATION ENGINEERING CHEMISTRY SYLLABUS AND MODEL PAPERS
          </p>

          {/* Toggle content based on click */}
          {isSyllabus4Open && (
            <table border="1px" className="table1" >
              <thead>
                <tr>
                  <th>REGULATION</th>
                  <th>COURSE-MATERIALS</th>
                </tr>
              </thead>
              <tr>
                    <th>R-17</th>
                   
                    <th> <a href="https://drive.google.com/file/d/1l9mXaKluhErGC_ZTJM0tcsPrfmgV7krJ/view?usp=drive_link" target="_blank" >Electro chemistry and Corrosion</a></th>
                </tr>
                 <tr>
                    <th>R-17</th>
                  
                     <th> <a href="https://drive.google.com/file/d/1a-B4sF8sJCKoLilP8EyxSHgvA4jfEU0y/view?usp=drive_link" target="_blank">Advanced Materials</a></th>
                    
                </tr>
                <tr>
                    <th>R-17</th>
                    <th><a href="https://drive.google.com/file/d/1Zizzs0lR9p1wF6TN2jORvf8EJYLzlqpJ/view?usp=drive_link" target="_blank">Energy Sources</a></th>
                </tr>
                <tr>
                    <th>R-17</th>
                    <th><a href="https://drive.google.com/file/d/1V_6_QOqfsFLH_zwxfFuFpl_K7LrSohOC/view?usp=drive_link" target="_blank">Polymers</a></th>
                </tr>
                <tr>
                    <th>R-17</th>
                    <th><a href="https://drive.google.com/file/d/1VeNBi010Z6W39oOB112Aw1qBv4pjIVSo/view?usp=drive_link" target="_blank">Water Technology</a></th>
                </tr>

            </table>
          )}
        </div>
      

      


        </div>
  );
};

export default Crs;