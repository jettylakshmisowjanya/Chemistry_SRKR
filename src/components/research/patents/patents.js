import React from 'react'
import Navbar from '../../navbar/navbar'
import Sidebar from '../../sidebar/sidebar'
import './patents.css'

const Patents = () => {
  return (
    <div>
       <Navbar/>

<div className="pageMain">
<div>
<Sidebar/>
</div>

<div className='pamain'>
<table  style={{borderCollapse: 'collapse', width: '100%', textAlign: 'left', border: '1px solid black'}}>
  <thead>
    <tr>
      <th>S.NO</th>
      <th>Name of the Faculty</th>
      <th>Title of the Patent</th>
      <th>Agency to which Application is made</th>
      <th>Year of Application</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Dr. D. Chadra Sekhar</td>
      <td>Nanomaterials composition for drug delivery and method thereof</td>
      <td>Indian patent
Application Number: 202141056776
</td>
      <td>2021</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Dr. P. Bhavni</td>
      <td>User friendly new trend material for solar cell applications with low cost</td>
      <td>Indian patent Application Number: 202241003792</td>
      <td>2022</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Dr. D. Chadra Sekhar</td>
      <td>Metal complexes and composition with novel Synthesis, Characterization, and Properties of Binuclear Gold(I) Phosphine Alkynyl Complexes</td>
      <td>Indian patent;
Application Number: 202241001883
</td>
      <td>2022</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Dr. U. Nagababu</td>
      <td>Use of magnetic spinel ferrite nanoparticles in green chemistry to produce complex oxides.</td>
      <td>Indian Patent:
Application Number: 202241061754
</td>
      <td>2022</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Dr. U. Nagababu</td>
      <td>Composition of green nanomaterials synthesized using sustainable and renewable energy resources.</td>
      <td>Indian Patent:
Application Number:  2023410626698
</td>
      <td>2023</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Dr. U. Nagababu</td>
      <td>Method for producing eco friendly catalyst using green synthesized nanomaterials from plant extracts.</td>
      <td>Indian Patent:
Application Number: 202341025701
</td>
      <td>2023</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Dr. P. Bhavani</td>
      <td>System improvements for waste-to-energy conversion utilizing microwave pyrolysis.</td>
      <td>Indian Patent:
Application Number: 202341043189
</td>
      <td>2023</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Mr. J. Suresh Kumar</td>
      <td>Smart system for classifying drugs into multiple categories with the use of machine learning models</td>
      <td>Indian Patent:
Application Number: 202441071956 A
</td>
      <td>2024</td>
    </tr>

  </tbody>
</table>
</div>
   


</div>
    </div>
  )
}

export default Patents