import React, { useState } from 'react';
import './nonTeaching.css'
import nt1 from '../../../images/nt1.jpg'
import nt2 from '../../../images/nt2.jpg'
import nt3 from '../../../images/nt3.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/navbar';


const NonTeaching = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
       <Navbar/>
    <section class="itms" >
        <div class="itm">
             <img className='nti' src={nt1}/>
            <h4 className='h41'>Irrinki Durga Prasad</h4>
            <h4 className='hr'>Lab Technician</h4>
            <h4 className='hr'><div class="pos">BSc(MPC)</div></h4>
            <h4 className='hr'><div class="pos">DOJ:13-12-2021</div></h4>

        </div>


        <div class="itm">
            <img className='nti' src={nt3}/>
            <h4 className='h43'>G.Prasanna</h4>
            <h4 className='hr'>Accountant</h4>
            <h4 className='hr'><div class="pos">DOJ:13-12-2022</div></h4>
        </div>
 
      </section>
    </div>
  )
}

export default NonTeaching