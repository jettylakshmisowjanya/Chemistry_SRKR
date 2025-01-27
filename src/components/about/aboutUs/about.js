import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import { Navigation, Pagination } from 'swiper/modules';  // Import Navigation and Pagination from modules
import 'swiper/swiper-bundle.css';  // Import the Swiper styles
import './about.css'
import abt1 from '../../../images/abt1.jpg';
import a1 from '../../../images/a1.jpg';
import abt3 from '../../../images/abt3.jpg';
import abt4 from '../../../images/abt4.jpg';
import abt5 from '../../../images/abt5.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
<Navbar/>
   

        <Swiper className='slid'
          modules={[Navigation, Pagination]}  // Use modules attribute to add functionalities
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className='card-item'>
            <img  src={a1} alt="Slide 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='card-item'>
            <img  src={abt1} alt="Slide 1" />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className='card-item'>
            <img  src={abt3} alt="Slide 1" />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className='card-item'>
            <img  src={abt4} alt="Slide 1" />
            </div>
          </SwiperSlide><SwiperSlide>
            <div className='card-item'>
            <img  src={abt5} alt="Slide 1" />
            </div>
          </SwiperSlide>
        </Swiper>

      <h1 className="heading">
        <u>About Us:</u>
      </h1>
      <div className='matter'>
        <p style={{marginBottom: '30px'}} className='paragraph'>
            The department conducts various inter/national seminar/conference /workshops relating to Engineering Chemistry
             and Universal human values (UHV) regularly to the benefit of faculty as well as students. To its credit, the dept.
              holds the authorship of text books - Engineering Chemistry Part 1 and Part 2 prescribed for JNTUK, 
              Engineering Chemistry for Andhra University, Laboratory Manual, and a text book of Applied Chemistry for engineering 
              courses; The publication of research articles in international/national journals of great repute. The faculty
               of the department have national/international collaborations with reputed laboratories and universities such
                as Andhra University, Acharya Nagarjuna University, Central University of Hyderabad, and Central Salt & Marine 
                Chemicals Research Institute-BHAVANAGAR. Also, the international collaboration with Departamento de Inginieria 
                de Materiales (DIMAT), Universidad de Concepcion, Chile, CIPA CHILE, Chile, DGIST, South Korea, 
                Chungnam National University, South Korea, National Tsing Hui University, Taiwan.
        </p>
        <p className='paragraph'>
            The department constituted a club called PAIE (People Association for Inner Engineering). It takes the 
            responsibility of social activities,Yoga, happiness programs and also counseling the students for their
             bright and beautiful future. The Club works in association with The Art of Living Foundation, Bengaluru.
        </p>
        <p style={{marginBottom: '30px'}} className='paragraph'>
            “National Science Day” is celebrated every year on 28 February to mark the
discovery of the ‘Raman Effect’ by Sir C.V. Raman on 28 February 1928. It was this
discovery that got Sir C.V. Raman a Nobel Prize in Physics in 1930.
Science is the greatest collective endeavour. It helps us live longer and healthier
lives, monitors our health, cures diseases, supplies water for our basic
requirements, including food, provides energy, and makes life more pleasant with
sports, music, entertainment, and the latest communication technologies. Finally,
it feeds our spirit. In other words, science is a vital source of knowledge. It has a
specific role to play in our society: advancing knowledge, improving education,
and improving our lives.
        </p>
        <p style={{marginBottom: '30px'}} className='paragraph'>
            Science must address societal and global issues. To make informed personal and
professional choices, citizens must comprehend and engage with science. Today's
challenges combine disciplines and span the innovation lifecycle, from research to
knowledge development and implementation. In order to achieve a more
egalitarian and sustainable future, we need science, technology.
        </p>
       
    </div>
    </div>
  );
};

export default About;
