import React, { useState } from 'react';
import '../../home/home.css'
import './hods.css'
import im2 from '../../../images/im2.jpg'
import im4 from '../../../images/im4.jpg'
import im5 from '../../../images/im5.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/navbar';



const Hods = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
          <Navbar/>
            <section class="ites">       
        <div className="ite">
            <img src="https://i.ibb.co/tYVwFVR/che-head.jpg" className="round-image"/>
            <h4 style={{paddingTop: '60px'}}>DR.P.BHAVANI</h4>
            <h4>Professor</h4>
            <h4><div className="pos">2021 - Present</div></h4>
        </div>
        

        <div className="ite">
            <img src={im2} className="round-image"/>
            <h4 style={{paddingTop: '60px'}}>DR.K.Anji Reddy</h4>
            <h4>Professor</h4>
            <h4><div className="pos">2015 - 2020</div></h4>
        </div>

        <div className="ite">
            <img src={im4} className="round-image1"/>
            <h4 style={{paddingTop: '60px'}}>Dr.P.V.Narasimharaju</h4>
            <h4>Professor</h4>
            <h4><div className="pos">2012 - 2015</div></h4>
        </div>

        <div className="ite">
            <img src={im5}className="round-image1"/>
            <h4 style={{paddingTop: '60px'}}>DR.K.V.Subbaraju</h4>
            <h4>Professor</h4>
            <h4><div className="pos">1984 - 2012</div></h4>
        </div>
    
    
 
      </section>
    </div>
  )
}

export default Hods