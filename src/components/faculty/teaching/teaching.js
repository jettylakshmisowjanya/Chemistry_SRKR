import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './teaching.css'
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import src_2 from '../../../images/src_2.jpg'
import src_3 from '../../../images/src_3.jpg'
import src_6 from '../../../images/src_6.jpg'
import src_7 from '../../../images/src_7.jpg'
import src_8 from '../../../images/src_8.jpg'
import src_9 from '../../../images/src_9.jpg'
import src_10 from '../../../images/src_10.jpg'
import src_11 from '../../../images/src_11.jpg'
import Navbar from '../../navbar/navbar';


const Teaching = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
 <Navbar/>
      <section className="items" style={{marginTop:'70px'}}>

       <div className="item">
             <img src="https://i.ibb.co/tYVwFVR/che-head.jpg" className="round-image"/>
            <h4>Dr.P.Bhavani</h4>
            <h4>Professor</h4>
            <h4><div className="pos">MSc,M.Phil,PhD</div></h4>
            <h4><div className="pos">DOJ:03-10-2007</div></h4>
            <div className="mail">  
      <FaEnvelope size={15} color="black" />
            <div className="pos">bhavani.penmatsa@gmail.com</div></div>
            <div className="mal">
      <FaPhone size={15} color="black"/>
    <div className="pos" style={{width:'100px'}}> 9701113599</div>
    </div>
         <a href="https://docs.google.com/document/d/15_gkEGEmlupLOGyEohbgX7TSpa0nlhRQ/edit?usp=sharing&ouid=110412585339647980090&rtpof=true&sd=true" target="_blank"> <div className="Profile"style={{ color: "blue" }} >View Profile</div></a>
        </div>
        
        <div className="item" >
            <img src={src_2} className="round-image"/>
            <h4>Dr.Venu Reddy</h4>
            <h4>Professor</h4>
            <h4><div className="pos">M.Sc,PhD</div></h4>
            <h4><div className="pos">DOJ:01-09-2017</div></h4>
            <div className="mail">  
            <FaEnvelope size={15} color="black" />
            <div className="pos">rvenu8@gmail.com</div></div>
            <div className="mal">
            <FaPhone size={15} color="black"/>
            <div className="pos" style={{width:'100px'}}>8978418845</div>
            </div>
            <a href="https://docs.google.com/document/d/15_gkEGEmlupLOGyEohbgX7TSpa0nlhRQ/edit?usp=sharing&ouid=110412585339647980090&rtpof=true&sd=true" target="_blank"> <div className="Profile" style={{ color: "blue" }}>View Profile</div></a>
        </div>

        <div className="item" >
            <img src={src_3} className="round-image"/>
            <h4>Dr.D.Chandra Sekhar</h4>
            <h4>Associate Professor</h4>
            <h4><div className="pos">MSc,MPhil,PhD</div></h4>
            <h4><div className="pos">DOJ:20-08-2008</div></h4>
            <div className="mail">
            <FaEnvelope size={15} color="black" />
             <div className="pos">vchandu1884@gmail.com</div></div>
            <div className="mal">
            <FaPhone size={15} color="black"/>
          <div className="pos"style={{width:'100px'}} >9290886820</div></div>
            <a href="https://docs.google.com/document/d/15F11-Tc0seAElguRXLLRjcBOg04ooC-a/edit?usp=sharing&ouid=110412585339647980090&rtpof=true&sd=true" target="_blank"> <div className="Profile" style={{ color: "blue" }} >View Profile</div></a>
        </div>

        <div className="item">
            <img src=" https://i.ibb.co/8K8pT2p/1048.jpg "className="round-image"/>
            <h4>Dr.B.S.Diwakar</h4>
            <h4>Associate Professor</h4>
            <h4><div className="pos">MSc,PhD</div></h4>
            <h4><div className="pos">DOJ:01-09-2017</div></h4>
            <div className="mail">
            <FaEnvelope size={15} color="black" />
              <div className="pos">vbsd2020@gmail.com</div></div>
            <div className="mal">
            <FaPhone size={15} color="black"/>
              <div className="pos" style={{width:'100px'}}>9963461577</div></div>
            <a href="https://docs.google.com/document/d/15MfA_n9cjDMgb9yE9siZafK0cfFc7bpE/edit?usp=drive_link&ouid=110412585339647980090&rtpof=true&sd=true" target="_blank">
             <div className="Profile" style={{ color: "blue" }}>
              View Profile
            </div>
            </a>
        </div>

       
        <div className="item">
            <img src="https://i.ibb.co/vDzjT98/1188.jpg "className="round-image"/>
            <h4>Mrs.K.Balageeta </h4>
            <h4>Assistant Professor</h4>
            <h4><div className="pos">M.Sc</div></h4>
            <h4><div className="pos">DOJ:21-10-2019</div> </h4>
            <div className="mail">
            <FaEnvelope size={15} color="black" />
            <div className="pos">balageeta4932gmail.com</div></div>
            <div className="mal">
            <FaPhone size={15} color="black"/>
             <div className="pos"style={{width:'100px'}}>9959334573</div></div>
            <a href="https://docs.google.com/document/d/13OHwRg5fNOh2nanU6VMQ5f2OSExG4tw3/edit?usp=drive_link&ouid=110412585339647980090&rtpof=true&sd=true" target="_blank" > <div className="Profile" style={{ color: "blue" }}>View Profile</div></a>
        </div>


        <div className="item">
            <img src={src_6}className="round-image"/>
            <h4>Dr.U.Nagababu</h4>
            <h4>Assistant Professor</h4>
            <h4><div className="pos">MSc,PhD</div></h4>
            <h4><div className="pos">DOJ:15-11-2021</div></h4>
            <div className="mail">
            <FaEnvelope size={15} color="black" />
              <div className="pos">nagababu.nss@gmail.com</div></div>
            <div className="mal">
            <FaPhone size={15} color="black"/>
              <div className="pos"style={{width:'100px'}}>9603312143</div></div>
            <a href="https://docs.google.com/document/d/13SvUtgeuawkMhWrlNyuIcCFd0y1-uNup/edit?usp=drive_link&ouid=110412585339647980090&rtpof=true&sd=true" target="_blank"> 
            <div className="Profile" style={{ color: "blue" }}>
              View Profile
            </div>
            </a>
        </div>
  
        <div className="item">
            <img src={src_7}className="round-image"/>
            <h4> Mrs.K.Tulasi Bhavani</h4>
            <h4>Assistant Professor</h4>
            <h4><div className="pos">MSc</div></h4>
            <h4><div className="pos">DOJ:01-12-2021</div></h4>
            <div className="mail">
            <FaEnvelope size={15} color="black" />
              <div className="pos">tulasibhavani1995@gmail.com</div></div>
            <div className="mal">
            <FaPhone size={15} color="black"/>
             <div className="pos"style={{width:'100px'}}>7989484117</div></div>
            <a href="https://docs.google.com/document/d/13GCPLMcYYUo4mmVUR6cX9p6gL9AqFzsy/edit?usp=drive_link&ouid=110412585339647980090&rtpof=true&sd=true" target="_blank"> <div className="Profile" style={{ color: "blue" }}>View Profile</div></a>
        </div>
  
    
        <div className="item">
            <img src={src_8} className="round-image"/>
            <h4> Dr.Sri.j.Suresh Kumar</h4>
            <h4>Assistant Professor</h4>
            <h4><div className="pos">MSc,B.Ed</div></h4>
            <h4><div className="pos">DOJ:06-12-2021</div></h4>
            <div className="mail">
            <FaEnvelope size={15} color="black" />
              <div className="pos">jayanthigitam@gmail.com </div></div>
            <div className="mal">
            <FaPhone size={15} color="black"/>
              <div className="pos"style={{width:'100px'}}>8179155245 </div></div>
            <a href="https://docs.google.com/document/d/13JQZ50WuXOyarBXL-5grcZEOw8Sus2_4/edit?usp=drive_link&ouid=110412585339647980090&rtpof=true&sd=true" target="_blank">
             <div className="Profile" style={{ color: "blue" }}>view Profile</div></a>
        </div>

        <div className="item">
            <img src={src_9} className="round-image"/>
            <h4> Mrs.U.V.Lakshmi</h4>
            <h4>Assistant Professor</h4>
            <h4><div className="pos">MSc</div></h4>
            <h4><div className="pos">DOJ:10-10-2022</div></h4>
            <div className="mail">
            <FaEnvelope size={15} color="black" />
           <div className="pos">sreesatya.u@gmail.com  </div></div>
            <div className="mal">
            <FaPhone size={15} color="black"/>
              <div className="pos"style={{width:'100px'}}>8247205263</div></div>
            <a href="https://docs.google.com/document/d/15_gkEGEmlupLOGyEohbgX7TSpa0nlhRQ/edit?usp=sharing&ouid=110412585339647980090&rtpof=true&sd=true"target="_blank"> <div className="Profile" style={{ color: "blue" }}>view Profile</div></a>
        </div>
    
        <div className="item">
            <img src={src_10} className="round-image"/>
            <h4>Mrs.Ch.Lakshmi Prasanna</h4>
            <h4>Assistant Professor</h4>
            <h4><div className="pos">MSc</div></h4>
            <h4><div className="pos">DOJ:10-10-2022</div></h4>
            <div className="mail">
            <FaEnvelope size={15} color="black" />
              <div className="pos">prasannadad@gmail.com</div></div>
            <div className="mal">
            <FaPhone size={15} color="black"/>
              <div className="pos"style={{width:'100px'}}> 9553691690 </div></div>
            <a href="https://docs.google.com/document/d/1JGuyGaRKOcBcNHcmL8ImQ0sCosXg0SwV/edit?usp=drive_link&ouid=110412585339647980090&rtpof=true&sd=true"target="_blank"> <div className="Profile" style={{ color: "blue" }}>view Profile</div></a>
        </div>
    
        <div className="item">
            <img src={src_11} className="round-image"/>
            <h4>Mrs.S.Prameela Devi</h4>
            <h4>Assistant Professor</h4>
            <h4><div className="pos">MSc</div></h4>
            <h4><div className="pos">DOJ:10-10-2022</div></h4>
            <div className="mail">
            <FaEnvelope size={15} color="black" />
              <div className="pos">prameeladevi90@gmail.com</div></div>
            <div className="mal">
            <FaPhone size={15} color="black"/>
              <div className="pos"style={{width:'100px'}}>  9915667899</div></div>
            <a href="https://docs.google.com/document/d/13NcI-QRMS8h_vAP9oL1ONS02GN96xEUx/edit?usp=drive_link&ouid=110412585339647980090&rtpof=true&sd=true" target="_blank"> <div className="Profile" style={{ color: "blue" }}>view Profile</div></a>
        </div>
      </section>
    </div>
  )
}
export default Teaching