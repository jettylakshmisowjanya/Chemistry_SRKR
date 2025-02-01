import React, { useState } from 'react';
import '../home/home.css'
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import { Navigation, Pagination } from 'swiper/modules';  // Import Navigation and Pagination from modules
import 'swiper/swiper-bundle.css';
import books from '../../images/books.jpeg'
import labs from '../../images/labs-main.webp'
import l1 from '../../images/l1.jpg'
import l2 from '../../images/l2.jpg'
import l4 from '../../images/l4.jpg'
import l5 from '../../images/l5.jpg'
import l3 from '../../images/l3.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/navbar';

const Courses = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
    <style>
        {`
        
.rightss{
    border: 1px solid rgb(253, 250, 250);
    width: 600px;
    position: relative;
    padding: 20px 15px;
    font-size: 18px;
     background-color: rgb(236, 234, 234);
    margin-top: 25px;
    color: black;
    
}
.course{
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
.rightss div{
    margin-bottom: 40px;
}
.page-main{
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-left: 100px;
}
.imgmain{
    display: flex;
    flex-direction: row;
}
.leftss{
    display: flex;
    flex-direction: column;
    
}
.subr{
    margin-left: 200px;
    margin-bottom: 200px;
}
.subl{
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    
}

.llh{
 margin-left: 200px;
 margin-top:100px;
}

.citems li{
    line-height: 40px;
}
.val{
    position: absolute;
    border: 1px solid rgb(241, 234, 234);
   padding-right: 20px;
   padding-left: 0;
    top: 350px;
    left: 240px;
    display: none;
    background-color: #F0F7FD;
   
}
.val li{
    line-height: 35px;

}

.bimg{
 margin-left: 150px;
 }

.hev:hover + .val {
    display: block;
} 

  .cors{
    background-color: white; 
    position: absolute; 
    top: 900px; 
    width: 550px; 
    left: 400px; 
    padding: 30px;
  } 
  
  body{
    padding-top: 80px;
}
    
.container {
width: 60%;
max-width: 800px;
margin: 0 auto;
}
 .firstimg{
 margin-top:15px;
//  background-color:blue;
 }
.card-item {
display: flex;
justify-content: center;
align-items: center;
}
.ilab{
position : relative;
}
.card-item img {
width: 600px;
height: 350px;
border-radius: 10px;
} 
.vbooks{
text-align:center;
margin-top:20px;
margin-right:100px;
color:blue;
}
.swipe{
width:800px;
}
.ulf{
 line-height: 30px;
 align-content: center;
 color: rgb(13, 153, 172); 
 padding-top: 10px; 
 font-size: 18px;
}
 @media(max-width:768px)
{
.rightss{
    border: 1px solid rgb(253, 250, 250);
    width: 400px;
    position: relative;
    padding: 10px 15px;
    font-size: 17px;
    border-radius:15px;
    background-color: rgb(236, 234, 234);
    margin-top: 0;
    margin:0 auto;
    color: black;   
}

.ulf{
 line-height: 30px;
 align-content: center;
 color: rgb(13, 153, 172); 
 padding-top: 10px; 
 font-size: 15px;
 width:300px;
}
 .bimg{
 margin: 40px;

 }
 .bimg img{
 width:200px;
 }
    .course{
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
 .vbooks{
text-align:center;
margin-top:5px;
margin-right:100px;
color:blue;
font-size:14px;
}
.llh{
 margin-left: 25px;
 font-size:25px;
 margin-top:85px;
}
  .ilab{
position : relative;
width:520px;
margin-left:25px;
}
     .cors{
    background-color: white; 
    position: absolute; 
    top: 830px; 
    width: 500px; 
    left: 150px; 
    padding: 15px;
    font-size:15px;
  } 
.page-main{
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-left: 0;
}
    .subr{
    margin-left: 0;
    margin-bottom: 140px;
}
    
    .lh{
    font-size:20px;
    margin:0;
    padding:0;
    }

    .swipe{
width:650px;
margin-top:30px;
}

.container {
width: 100%;
max-width: 600px;
margin: 0 auto;
}

.card-item {
display: flex;
margin:0 auto;
width:650px;
margin-right:0px;
}

.card-item img {
width: 600px;
height: 350px;
// margin:0 auto;
// margin-right:0px;
border-radius: 10px;
} 

 body{
 padding-top:50px;
 }
}
@media(max-width:400px)
{
.rightss{
    border: 1px solid rgb(253, 250, 250);
    width: 270px;
    position: relative;
    padding: 10px 15px;
    font-size: 17px;
    border-radius:15px;
     background-color: rgb(236, 234, 234);
    margin-top: 0;
    margin-left:25px;
    color: black;   
}

.ulf{
 line-height: 30px;
 align-content: center;
 color: rgb(13, 153, 172); 
 padding-top: 10px; 
 font-size: 15px;
 width:300px;
}
 .bimg{
 margin: 10px;
 margin-left:40px;
 

 }
 .bimg img{
 width:200px;
 }
    .course{
    display: grid;
    grid-template-columns: 1fr;
}
 .vbooks{
text-align:center;
margin-top:5px;
margin-right:100px;
color:blue;
font-size:14px;
}
.llh{
 margin-left: 25px;
 font-size:15px;
 margin-top:30px;
}
  .ilab{
position : relative;
width:250px;
margin-left:25px;
}
     .cors{
    background-color: white; 
    position: absolute; 
    top: 1050px; 
    width: 245px; 
    left: 85px; 
    padding: 15px;
    font-size:12px;
  } 
.page-main{
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-left: 0;
}
    .subr{
    margin-left: 0;
    margin-bottom: 120px;
}
    .hle{
    display:none;
    }
    .lh{
    font-size:15px;
    margin:0;
    padding:0;
    }
    .swipe{
width:340px;
}

.card-item img {
width: 300px;
height: 250px;

} 

 body{
 padding-top:10px;
 }
 .firstimg{
 maegin-top:50px;
 }
}
 
 `}
      </style>
<Navbar/>

      <div className="page-main" style={{ marginTop: '70px' }}>
        <div className="course">
          <div className="rightss">
            <div style={{ fontSize: '19px', borderBottom: '1px solid #8bb4d8', color: 'rgb(13, 153, 172)', lineHeight: '30px' }}>Department of Engineering Chemistry is Offering following Courses for B.Tech Program:</div>
            <ul className='citems'>
              <li>Applied Chemistry (R20)</li>
              <li>Engineering Chemistry (R23)</li>
              <li>Chemistry (R23)</li>
              <li>Applied Chemistry Lab</li>
              <li style={{ border: 'none' }}>Engineering Chemistry Lab</li>
              <li style={{ border: 'none' }}>Chemistry Lab</li>
              <li style={{ color: '#8bb4d8', cursor: 'pointer' }} className="hev">Value Added Courses</li>
              <div className="val">
                <ul style={{ paddingLeft: '30px' }}>
                  <li>Preparation of Bio diesel</li>
                  <li>Water Analysis</li>
                  <li>Soil Analysis</li>
                  <li>Inner Engineering</li>
                </ul>
              </div>
            </ul>
          </div>

          <div className="firstimg">
            <div>
              <ul className='ulf'>
                <li>Also Department of Engineering Chemistry is Recognized as Research Center by JNTU Kakinada</li>
                <li>Therefore, The Department of Engineering Chemistry is also Offering PhD Program in Chemistry</li>
              </ul>
            </div>
            <div className='bimg'>
              <img src={books} alt="Books" />
            </div>
            <div className='vbooks'><Link to={"/books"}>view books here</Link></div>
          </div>
        </div>
      </div>

      <div className="leftss">
        <h1 className='llh'>Labs</h1>
        <div className="subr">
          <img className='ilab' src={labs} alt="Labs" />
          <div className="cors">
                <h1 className='lh'>Chemistry Labs</h1>
                <p className='ple'>
                    The chemistry labs at SRKR Engineering College are designed to provide students with hands-on experience and foster a deeper understanding of chemical principles. Equipped with state-of-the-art instruments and technology, our labs cater to a variety of experimental needs, ranging from organic and inorganic chemistry to analytical techniques.
                </p>
                <p className='hle'>
                    Students engage in experiments that promote critical thinking and problem-solving skills, working under the guidance of experienced faculty members. Safety is a top priority; therefore, all labs adhere to stringent safety protocols to ensure a secure learning environment. The labs also encourage collaborative learning, allowing students to work in teams and share knowledge. Through practical application of theoretical concepts, students are better prepared for careers in research, industry, and academia.
                </p>
            </div>
        </div>

        {/* Swiper Slider */}

          <Swiper className='swipe'
            modules={[Navigation, Pagination]}  // Use modules for Navigation and Pagination
            loop={true}
            grabCursor={true}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
                <div className='card-item'>
                <img src={l1} alt="Lab Image 1" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card-item'>
                <img src={l2} alt="Lab Image 1" />
                </div>
            </SwiperSlide><SwiperSlide>
                <div className='card-item'>
                <img src={l4} alt="Lab Image 1" />
                </div>
            </SwiperSlide><SwiperSlide>
                <div className='card-item'>
                <img src={l5} alt="Lab Image 1" />
                </div>
            </SwiperSlide><SwiperSlide>
                <div className='card-item'>
                <img src={l3} alt="Lab Image 1" />
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

  )
}

export default Courses;
