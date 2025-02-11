import React, { useState } from 'react';
import '../../home/home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import Sidebar from '../../sidebar/sidebar';

const Projects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <style>
        {`
          .page-main {
            display: grid;
    grid-template-columns: 350px auto;
    gap: 0px;
  
                overflow-x: auto; /* Enables horizontal scrolling on small screens */

          }

          .imgmain {
            display: flex;
            flex-direction: row;
          }

          .lefts {
            display: flex;
            margin-top: 0px;
            flex-direction: column;
          }

          .hi:hover {
            color: rgb(43, 135, 193);
          }

          .subr {
            margin-bottom: 200px;
          }

          {/* .subl {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 20px;
          } */}

          body {
            padding-top: 80px;
          }

          .year {
            width: 100%;
            height: 35px;
            margin-top: 75px;
            padding-left: 10px;
            font-weight: bold;
            align-content: center;
          }

          .subrows {
            display: flex;
            flex-direction: row;
            gap: 0px;
            line-height: 25px;
            border: 1px solid grey;
            margin-bottom: 10px;
          }

          .subrows div {
            border-right: 1px solid grey;
            padding: 10px;
            box-sizing: border-box;
            text-align: center;
            align-content: center;
            word-wrap: break-word;
          }

          table th, table td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
          }

          table th {
            background-color: lavender;
          }

          .prjm {
            margin: 0 auto;
          }

          @media(max-width: 768px) {
            .page-main {
              grid-template-columns: 1fr;
              margin-left: 0;
            }

            .year {
              width: 100%;
              margin-top: 20px;
            }

            .subrows {
              flex-direction: column;
              line-height: 18px;
              gap: 10px;
            }

            .subrows div {
              width: auto;
              border-right: none;
            }

            table {
              width: 100%;
            }

            table th, table td {
              padding: 6px;
            }
          }

          @media(max-width: 400px) {
            .year {
              width: 100%;
              margin-top: 0;
            }

            .subrows {
              flex-direction: column;
              line-height: 18px;
              gap: 5px;
            }

            .subrows div {
              width: 100%;
              border-right: none;
            }

            table th, table td {
              font-size: 12px;
            }

         
          }
        `}
      </style>
      <Navbar />
      <div className='page-main'>
      <div>
        <Sidebar/>
      </div>
        <div className='prjm'>
          <div className='year'>Research Projects Executed:</div>
          <table border='1' style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Sponsoring Agency</th>
                <th>Period</th>
                <th>Amount (Rs/- in lakhs)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>International Travel Grant Grant to Dr. Venu Reddy</td>
                <td>SERB</td>
                <td>One week</td>
                <td>0.86</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Inspire Faculty Research Grant to Dr. Venu Reddy</td>
                <td>DST DST/INSPIRE Faculty Award/IFA13-ENG70 DATED 24.04.2018</td>
                <td>2017-18</td>
                <td>29.00</td>
                <td>Completed 5 years (3 yrs at University of Hyderabad and 2 years at SRKR)</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Miniaturized electrochemical devices for the automated ampliflex detection of cancer biomarkers</td>
                <td>DST Indo-Korean Joint Research Project INT/Korea/P-27 Dated 22.03.2018</td>
                <td>2017-18</td>
                <td>15.19</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Application of probiotics in treating drinking water</td>
                <td>Mission Cell: Solar energy and Water, DST New Delhi</td>
                <td>2009-2012</td>
                <td>33.57</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Impact of aquaculture on soils and groundwater quality in parts of the coastal tracts of Godavari central delta</td>
                <td>Mission Cell: Solar energy and Water, DST New Delhi</td>
                <td>2012-2015</td>
                <td>29.93</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Environmental pollution of Kolleru Lake and its control by conventional and non-conventional methods</td>
                <td>UGC, New Delhi</td>
                <td>1994-1996</td>
                <td>1.25</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Removal of Ca++ and Mg++ from brine solution by methylmethacrylate-ethylene Glycol dimethacrylate polymeric adsorbents</td>
                <td>Guest Scientist, CSIR, New Delhi</td>
                <td>1992-1993; 1994-1995</td>
                <td></td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Electro Organic Synthesis</td>
                <td>UGC, New Delhi</td>
                <td>1989-1991</td>
                <td>3.95</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;
