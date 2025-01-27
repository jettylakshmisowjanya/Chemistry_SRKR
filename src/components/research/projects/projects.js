import React, { useState } from 'react';
import '../../home/home.css'
import { Link } from 'react-router-dom'
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


.page-main{
    display: grid;
    
    grid-template-columns: auto 1fr;
    gap: 50px;
}
 

.imgmain{
    display: flex;
    flex-direction: row;
}
.lefts{
    display: flex;
    margin-top:50px;
    flex-direction: column;
}
.hi:hover{
    color: rgb(43, 135, 193);
}
.subr{
    margin-bottom: 200px;
}
.subl{
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    
}
    body{
    padding-top: 80px;
}

.year{
    width: 1292px;
    height: 35px;
    margin-top: 75px;
    padding-left:10px;
    // background: linear-gradient(120deg, rgb(155, 216, 240) 1%, rgb(249, 180, 249) 110%);
    align-content: center;
}
.subrows{
    display: flex;
    flex-direction: row;
    gap: 20px;
    line-height: 25px;
    border: 1px solid grey;
}
.subrows div{
    border-right: 1px solid grey;
    width: 200px;
    box-sizing: border-box;
    text-align: center;
    align-content: center;
    word-wrap: break-word;
}
table th, table td{
    border: 1px solid black;
}
table th{
background-color: lavender;
}
.prjm{
margin-left:300px;
}
@media(max-width:768px){
    .rights{
        display: none;
        
    }
.prjm{
margin-left:0;
}
.page-main{
    display: grid;
    margin-left:0;
    grid-template-columns: 1fr;
}
    

     .year{
    width: 741px;
    margin-top: 20px;
    height: 35px;
    padding-left:10px;
    font-weight:bold;
    // background: linear-gradient(120deg, rgb(155, 216, 240) 1%, rgb(249, 180, 249) 110%);
    align-content: center;
}
    .subrows{
    display: flex;
    flex-direction: row;
    // gap: 20px;
    line-height: 18px;
    border: 1px solid grey;
}
    .subrows div{
    border-right: 1px solid grey;
    width: 100px;
    box-sizing: border-box;
    text-align: center;
    align-content: center;
    word-wrap: break-word;
}
}
@media(max-width:367px){
    .rights{
        display: none;
        
    }
.prjm{
margin-left:0;
}
.page-main{
    display: grid;
    margin-left:0;
    grid-template-columns: 1fr;
}
    
.head {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        line-height: 2px;
        padding-bottom: 15px 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 367px;
        font-size: 12px;
        right: 0;
        z-index: 10;
        border-bottom: 5px solid white;
        background: linear-gradient(120deg, rgb(155, 216, 240) 1%, rgb(249, 180, 249) 110%);
    }
     .year{
    width: 691px;
    margin-top: 0;
    height: 35px;
    padding-left:10px;
    // background: linear-gradient(120deg, rgb(155, 216, 240) 1%, rgb(249, 180, 249) 110%);
    align-content: center;
}
    .subrows{
    display: flex;
    flex-direction: row;
    gap: 20px;
    line-height: 18px;
    border: 1px solid grey;
}
    .subrows div{
    border-right: 1px solid grey;
    width: 100px;
    box-sizing: border-box;
    text-align: center;
    align-content: center;
    word-wrap: break-word;
}
}

        `}
      </style>
      <Navbar/>

    <div class="page-main">
<Sidebar/>

        {/* <div className='prjm'>
    <div class="year">Research Projects Executed:
    </div>
    <div class="subrows">
    <div>S.No</div>
    <div>Title</div>
    <div>Sponsoring Agency</div>
    <div>Period</div>
    <div>Amount
        Rs/-
        in lakhs</div>
    <div>Status</div>
    </div>
    <div class="subrows">
        <div>1</div>
        <div>    
            International Travel Grant Grant to Dr. Venu Reddy

        </div>
        <div>SERB
        </div>
        <div>One week
        </div>
        <div>0.86 L
        </div>
        <div>completed
        </div>
       
        </div><div class="subrows">
            <div>2
            </div>
            <div>Inspire Faculty Research Grant to Dr. Venu Reddy
            </div>
            <div>DST DST/INSPIRE Faculty Award/IFA13-ENG70 DATED 24.04.2018
            </div>
            <div>2017-18
            </div>
            <div>29.00
            </div>
            <div>completed 5 years (3 yrs at University of Hyderabad and 2 years at SRKR)
            </div>
            </div>
            <div class="subrows">
                <div>3
                </div>
                <div>Miniaturized electrochemical devices for the automated ampliflex detection of cancer biomarkers
                </div>
                <div>"DST
                    Indo-Korean Joint Research Project INT/Korea/P-27 Dated 22.03.2018"
                    
                </div>
                <div>"2017-
                    18"	
                    
                </div>
                <div>15.19

                </div>
                <div>Completed

                </div>
                </div>
                <div class="subrows">
                    <div>4
                    </div>
                    <div>Application of probiotics in treating drinking water	

                    </div>
                    <div>Mission Cell : Solar energy and Water, DST New Delhi

                    </div>
                    <div>"2009-
                        2012"	
                        
                    </div>
                    <div>33.57

                    </div>
                    <div>Completed

                    </div>
                   
                    </div><div class="subrows">
                        <div>5
                        </div>
                        <div>Impact of aquaculture on soils and groundwater quality in parts of the coastal tracts of Godavari central delta	
                        </div>
                        <div>Mission Cell : Solar energy and Water, DST New Delhi

                        </div>
                        <div>"2012-
                            2015"	
                            
                        </div>
                        <div>29.93
                        </div>
                        <div>Completed

                        </div>
                        
</div>
<div class="subrows">
<div>6
</div>
<div>Environmental pollution of Kolleru Lake and its control by conventional and non- conventional methods	

</div>
<div>UGC, New Delhi

</div>
<div>"1994-
    96"	
    
</div>
<div>1.25
</div>
<div>Completed

</div>

</div>
<div class="subrows">
<div>7
</div>
<div>Removal of Ca++ and Mg++ from brine solution by methylmethacrylate-ethylene Glycol dimethacrylate polymeric adsorbents,	

</div>
<div>Guest Scientist, CSIR, New Delhi

</div>
<div>"1992-
    93;
    1994-
    95"	
    
</div>
<div>
</div>
<div>Completed

</div>

</div>
<div class="subrows">
    <div>8
    </div>
    <div>Electro Organic Synthesis	

    </div>
    <div>UGC, New Delhi

    </div>
    <div>"1989-
        1991"	
        
    </div>
    <div>3.95

    </div>
    <div>Completed

    </div>
    
    </div>
                                        
                                            
                            
        </div> */}

<div className='prjm'>
<div class="year">Research Projects Executed:
</div>
    <table border="1" style={{borderCollapse:'collapse', width:'100%', textAlign: 'left', border: '1px solid black'}}>
        <thead>
            <tr >
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
                <td>Mission Cell : Solar energy and Water, DST New Delhi</td>
                <td>2009-2012</td>
                <td>33.57</td>
                <td>Completed</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Impact of aquaculture on soils and groundwater quality in parts of the coastal tracts of Godavari central delta</td>
                <td>Mission Cell : Solar energy and Water, DST New Delhi</td>
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
  )
}

export default Projects