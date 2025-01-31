import React, { useState } from 'react';
import '../../home/home.css';
import labs from '../../../images/labs-main.webp'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/navbar';
import Sidebar from '../../sidebar/sidebar';




const Equipment = () => {
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
    margin-left:300px;
    flex-direction: column;
}
.hi:hover{
    color: rgb(43, 135, 193);
}
.subr{
    margin-bottom: 200px;
    margin-left: 0;
}
.subl{
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    
}
.subrimg{
    position: relative;
}
.equi{
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    line-height: 20px;
    text-align: center;
    margin-top: 35px;
}
.eqp{
    background-color: white; 
    position: absolute; 
    top: 350px; 
    width: 550px; 
    left : 600px;
    padding: 30px;
}

body{
    padding-top: 80px;
}
.listm{
        width: 420px; 
        padding-top: 25px; 
        margin-left: 300px;
}
        .year{
    height: 35px;
    background: linear-gradient(120deg, rgb(155, 216, 240) 1%, rgb(249, 180, 249) 110%);
    align-content: center;
    width: 410px;
    padding-left:10px;
}
.subrows{
    display: flex;
    flex-direction: row;
    gap: 20px;
    line-height: 25px;
    width: 418px;
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
 .equipment-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: white;
}

.equipment-table th,
.equipment-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.equipment-table th {
    background-color: lavender;
  color: black;
  text-align: center;
}

.equipment-table tbody tr:nth-child(even) {
  background: #f9f9f9;
}

@media (max-width:768px) {
    .rights{
        display: none;
    }
    .subr{
        margin-bottom: 150px;
        margin-left: 0;
    }
    .page-main{
        display: grid;
        margin-left: 25px;
        grid-template-columns:  1fr;
        gap: 10px;
    }
    .subrimg{
        margin-left: 0;
        width: 540px;
    }
        .lefts{
    display: flex;
    margin-top:20px;
    margin-left:0;
    flex-direction: column;
}
    .eqp{
        background-color: white; 
        position: absolute; 
        top: 30px; 
        width: 465px; 
        left : 220px;
        padding: 15px;
        padding-bottom:0;
        font-size:14px;
        // background-color:blue;
    }
    .eqphead{
        font-size: 20px;
        margin: 0;
        padding: 0;
    }
        .p2{
        margin-top:0px;
        }
        p{
            margin-bottom:10px;
        }

}

        @media (max-width: 600px) {
  .equipment-table th,
  .equipment-table td {
    padding: 8px;
    font-size: 14px;
  }
}


@media (max-width:367px) {
    .rights{
        display: none;
    }
    .subr{
        margin-bottom: 150px;
        margin-left: 0;
    }
    .page-main{
        display: grid;
        margin-left: 25px;
        grid-template-columns:  1fr;
        gap: 10px;
    }
    .subrimg{
        margin-left: 0;
        width: 280px;
    }
        .lefts{
    display: flex;
    margin-top:0px;
    margin-left:0;
    flex-direction: column;
}
    .eqp{
        background-color: white; 
        position: absolute; 
        top: 235px; 
        width: 225px; 
        left : 100px;
        padding: 15px;
        padding-bottom:0;
        font-size:12px;
        // background-color:blue;
    }
    .eqphead{
        font-size: 20px;
        margin: 0;
        padding: 0;
    }
    .p2{
        display: none;
    }
        .subrows{
width: 320px;
}
.year{
    width: 312px;
    padding-left:10px;
}
}
`}
      </style>
      <Navbar/>

      <div className="page-main">
    <Sidebar/>

        <div style={{ paddingBottom: '50px' }} className="lefts">
          <h1>Equipment</h1>
          <div className="subr">
            <img className='subrimg' src={labs} alt="Lab equipment" />
            <div className="eqp">
              <h1 className='eqphead'>Lab Equipment</h1>
              <p>
                    At SRKR Engineering College, our chemistry department boasts a wide range of modern equipment essential for comprehensive chemical analysis and experimentation. From high-performance liquid chromatography (HPLC) and gas chromatography (GC) to spectroscopy devices such as UV-Vis and AAS, our facilities are equipped to meet the diverse needs of our curriculum. 
                </p><p className='p2'>
                    Each piece of equipment is maintained to the highest standards, ensuring accuracy and reliability in all experiments. Students receive training on how to operate these instruments effectively, bridging the gap between theory and practice. This hands-on experience not only enhances their technical skills but also prepares them for future challenges in the scientific community. Our commitment to providing cutting-edge equipment reflects our dedication to excellence in chemistry education.
                </p>
            </div>
          </div>

            <table className="equipment-table">
  <thead>
    <tr>
      <th>Name of the Equipment</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    {[
      { name: "UV-Visible Spectrometer", quantity: 1 },
      { name: "Muffle Furnace", quantity: 1 },
      { name: "Hot Air Oven", quantity: 1 },
      { name: "Microwave Oven", quantity: 3 },
      { name: "PH Meters", quantity: 2 },
      { name: "Conductivity Meters", quantity: 6 },
      { name: "Potentiometers", quantity: 6 },
      { name: "Catalytic Chamber", quantity: 1 },
      { name: "Spin Coater", quantity: 1 },
      { name: "Centrifuge", quantity: 1 },
      { name: "Rotovapour", quantity: 1 },
      { name: "Magnetic Stirrer", quantity: 5 },
      { name: "Sonicator", quantity: 1 },
      { name: "Digital Balance", quantity: 1 },
      { name: "Vacuum Cupboard", quantity: 2 },
      { name: "Double Distillation Unit", quantity: 1 },
      { name: "Computers", quantity: 3 },
      { name: "Printers", quantity: 2 },
    ].map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
      </tr>
    ))}
  </tbody>
</table> 
        </div>
      </div>
    </div>
  );
};

export default Equipment;

