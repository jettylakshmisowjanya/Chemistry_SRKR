import React, { useState } from 'react';
import '../../home/home.js'
import './publications.css'
import '../equipment/sidebar.css'
import Navbar from '../../navbar/navbar.js';
import Sidebar from '../../sidebar/sidebar.js';


const Publications = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  let data = [{
    sNo:1,
    title:'Reduce the excess usage of natural resources through self exploration',
    author:'P.Bhavani, D. Chandra sekhar',
    journal:'International journal of engineering research',
    year:2016,
    isbnNo:'2321-7758',
    website:'https://www.jchps.com/home.php',
    wblink:'https://jchps.com/specialissues/2016%20SPECIAL%20ISSUE%2010/05%20JCP.pdf',
    indexedIn:'Others'
  },
  {
    sNo:2,
    title:'Effect of Yoga and Meditation on Engineering College Students',
    author:'P.Bhavani, G.P.S Varma, D. Chandra Sekhar, I.Hmealatha, D.P.Ramesh Raju',
    journal:'Journal of Chemical and Pharmaceutical Sciences',
    year:2016,
    isbnNo:'0974-2115',
    website:'www.ijoer.in',
    wblink:'http://www.ijoer.in/4.S2.16/161-165%20Dr.%20P.BHAVANI.pdf',
    indexedIn:'UGC Care List'
  },
  {
    sNo:3,
    title:'Facile synthesis of bovine serum albumin conjugated low-dimensional ZnS nanocrystals',
    author:'Bhanu Mullamuri, Subrahmanya Diwakar Bhagavathula, Krishna C.S.B. Kasturi,Venu Reddy',
    journal:'International Journal of Biological Macromolecules',
    year:2017,
    isbnNo:'0141-8130',
    website:'https://www.sciencedirect.com/journal/international-journal-of-biological-macromolecules',
    wblink:'https://www.sciencedirect.com/science/article/abs/pii/S0141813016330409',
    indexedIn:'Scopus'
  },
  {
    sNo:4,
    title:'Insight of electrical behavior in ferroelectric‐semiconductor polymer nanocomposite films of PVDF/ZnSe and PVDF/Cu:ZnSe',
    author:'B. S. Diwakar, Varaprasad Kokkarachedu, David Quezada Acuna, Ramam Koduri,Swaminadham Veluri, Venu Reddy',
    journal:'Journal applied polymer science',
    year:2017,
    isbnNo:'1097-4628',
    website:'https://onlinelibrary.wiley.com/journal/10974628',
    wblink:'https://onlinelibrary.wiley.com/doi/abs/10.1002/app.44983',
    indexedIn:'Scopus'
  },
  {
    sNo:5,
    title:'A Brief Review on Synthesis of β-amino Alcohols by Ring Opening of Epoxides',
    author:'B. S. Diwakar, Boddeti G and Venu R',
    journal:'Research & Reviews Journal of Chemistry, 6(2), 2017, 27',
    year:2017,
    isbnNo:'2319-9849',
    website:'https://www.rroij.com/chemistry.php',
    wblink:'https://www.rroij.com/open-access/a-brief-review-on-synthesis-of-amino-alcohols-by-ring-opening-ofepoxides-.pdf',
    indexedIn:'Others'
  },
  {
    sNo: 6,
    title: "Room temperature dielectric and antibacterial behavior of thiosemicarbazide capped low dimension Silver and Gold nanoparticles",
    author: "Bhagavathula S Diwakar, Boddeti Govindh, Devarapu Chandra Sekhar, Penmetsa Bhavani, Veluri Swaminadham, Kondareddy Anjireddy",
    journal: "International Journal of Nano Dimension",
    year: 2017,
    isbnNo: "2228-5059",
    website: "http://www.ijnd.ir",
    wblink: "http://www.ijnd.ir/article_656339.html",
    indexedIn: "ESCI, Web of Science"
  },
  {
    sNo: 7,
    title: "Metal-oxide polymer nanocomposite films from disposable scrap tire powder/poly-ε-caprolactone for advanced electrical energy (capacitor) applications",
    author: "Kokkarachedu Varaprasad, Bhagavathula S. Diwakar, Cristina Donoso, Koduri Ramam, Rotimi Sadiku",
    journal: "Journal of Cleaner Production",
    year: 2017,
    isbnNo: "0959-6526",
    website: "https://www.journals.elsevier.com/journal-of-cleaner-production",
    wblink: "https://www.sciencedirect.com/science/article/abs/pii/S0959652617311642",
    indexedIn: "Scopus"
  },
  {
    sNo: 8,
    title: "A Simple and Straightforward Synthesis of Cinnamic acids and Ylidene Malononitriles via Knoevenagel Condensation Employing DABCO as Catalyst",
    author: "K. Nagalakshmi, B.S. Diwakar, B. Govindh, P. Gopal Reddy, R. Venu, I. Bhargavi, T.J. Prasanna Devi, Y.L.N. Murthy and V. Siddaiah",
    journal: "Asian Journal of Chemistry",
    year: 2017,
    isbnNo: "0975-427X",
    website: "https://www.asianjournalofchemistry.co.in/Home.aspx",
    wblink: "https://www.asianjournalofchemistry.co.in/user/journal/viewarticle.aspx?ArticleID=29_7_32",
    indexedIn: "Scopus"
  },
  {
    sNo: 9,
    title: "Magnetic properties of nano-multiferroic materials",
    author: "Koduri Ramam, Bhagavathula S. Diwakar, Kokkarachedu Varaprasad, Veluri Swaminadham, Venu Reddy",
    journal: "Journal of Magnetism and Magnetic Materials",
    year: 2017,
    isbnNo: "0304-8853",
    website: "https://www.journals.elsevier.com/journal-of-magnetism-and-magnetic-materials",
    wblink: "https://www.sciencedirect.com/science/article/abs/pii/S0304885317316232",
    indexedIn: "Scopus"
  },
  {
    sNo: 10,
    title: "Quantitative Spectroscopic Investigation Of Losartan Potassium In Bulk And Pharmaceutical Dosage By Visible Spectrophotometry",
    author: "D. Chandra Sekhar, B. S. Diwakar, P. Bhavani, N. Madhavi, K. Raghu Babu and V. Jaganadha Rao",
    journal: "Rasayan Journal of Chemistry",
    year: 2018,
    isbnNo: "0976-0083",
    website: "http://rasayanjournal.co.in/",
    wblink: "http://rasayanjournal.co.in/admin/php/upload/543_pdf.pdf",
    indexedIn: "Scopus"
  },
  {
    sNo: 11,
    title: "Synthesis and Characterization of Polymeric Nanocomposites from Styrene and Titanium Dioxide Nanoparticles",
    author: "K. Ramam, V. Swaminadham, B.S. Diwakar, R. Ramesh, M. Sharma",
    journal: "Materials Science and Engineering: B",
    year: 2018,
    isbnNo: "0921-5107",
    website: "https://www.journals.elsevier.com/materials-science-and-engineering-b",
    wblink: "https://www.sciencedirect.com/science/article/abs/pii/S0921510718302573",
    indexedIn: "Scopus"
  },
  {
    sNo: 12,
    title: "Effect of Microstructure and Grain Boundary Segregation on the Electrical Properties of Metal-oxide Nanocomposites",
    author: "Kokkarachedu Varaprasad, Bhagavathula S. Diwakar, Cristina Donoso, Rotimi Sadiku, Koduri Ramam",
    journal: "Journal of Materials Science: Materials in Electronics",
    year: 2018,
    isbnNo: "0957-4522",
    website: "https://www.springer.com/journal/10854",
    wblink: "https://link.springer.com/article/10.1007/s11041-018-8517-1",
    indexedIn: "Scopus"
  },
  {
    sNo: 13,
    title: "Green Synthesis of Biodegradable Polymeric Nanocomposites and Their Applications in Environmental Protection",
    author: "K. Nagalakshmi, B. S. Diwakar, P. Gopal Reddy, Y.L.N. Murthy, V. Siddaiah",
    journal: "Environmental Science and Pollution Research",
    year: 2019,
    isbnNo: "1614-7499",
    website: "https://www.springer.com/journal/11356",
    wblink: "https://link.springer.com/article/10.1007/s11356-019-04679-5",
    indexedIn: "Scopus"
  },
  {
    sNo: 14,
    title: "Nano-architectural engineering of hybrid nanostructures for biomedical applications",
    author: "Bhagavathula S. Diwakar, K. Ramam, R. K. Yashodha, P. Bhavani, Veluri Swaminadham",
    journal: "Nanomedicine: Nanotechnology, Biology and Medicine",
    year: 2019,
    isbnNo: "1549-9634",
    website: "https://www.journals.elsevier.com/nanomedicine-nanotechnology-biology-and-medicine",
    wblink: "https://www.sciencedirect.com/science/article/abs/pii/S1549963419302711",
    indexedIn: "Scopus"
  },
  {
    sNo: 15,
    title: "Antibacterial activity of bio-nanocomposites from polystyrene and titanium dioxide nanoparticles",
    author: "D. Chandra Sekhar, K. Ramam, V. Swaminadham, B.S. Diwakar, P. Bhavani",
    journal: "International Journal of Environmental Science and Technology",
    year: 2019,
    isbnNo: "1735-1472",
    website: "https://www.springer.com/journal/13762",
    wblink: "https://link.springer.com/article/10.1007/s13762-019-02474-5",
    indexedIn: "Scopus"
  },
  {
    sNo: 16,
    title: "Effects of heating rate on the magneto-optical properties of bismuth substituted yttrium iron garnet films prepared via modified metal-organic decomposition",
    author: "Viet Dongquoc, Rambabu Kuchi, Phuoc Cao Van, Soon-Gil Yoon, Jong-Ryul Jeong",
    journal: "Current Applied Physics",
    year: 2018,
    isbnNo: "1567-1739",
    website: "https://www.journals.elsevier.com/current-applied-physics",
    wblink: "https://www.sciencedirect.com/science/article/abs/pii/S1567173917303061",
    indexedIn: "Scopus"
  },
  {
    sNo: 17,
    title: "Development of an Fe3O4@Cu silicate based sensing platform for the electrochemical sensing of dopamine",
    author: "Ashok Kumar Das, Rambabu Kuchi, Phuoc Cao Van, Youngku Sohn and Jong-Ryul Jeong",
    journal: "RSC Advances",
    year: 2018,
    isbnNo: "2046-2069",
    website: "https://www.rsc.org/journals-books-databases/about-journals/rsc-advances/",
    wblink: "https://pubs.rsc.org/en/content/articlehtml/2018/ra/c8ra05885g",
    indexedIn: "Scopus"
  },
  {
    sNo: 18,
    title: "Effect of annealing temperature on surface morphology and ultralow ferromagnetic resonance linewidth of yttrium iron garnet thin film grown by rf sputtering",
    author: "PhuocCao Van, Srivathsava Surabhi, Viet Dongquoc, Rambabu Kuchi, Soon-GilYoon, Jong-RyulJeong",
    journal: "Applied Surface Science",
    year: 2018,
    isbnNo: "0169-4332",
    website: "https://www.journals.elsevier.com/applied-surface-science",
    wblink: "https://www.sciencedirect.com/science/article/abs/pii/S0169433217334116",
    indexedIn: "Scopus"
  },
  {
    sNo: 19,
    title: "Fill Factor Controlled Nanoimprinted ZnO Nanowires based on Atomic Layer Deposition",
    author: "Srivathsava Surabhi, Chi HieuLuong, Min YiKim, Phuoc CaoVan, Viet DongQuo, Rambabu Kuchi, Jae-WoongLee, Hyo-SikChang, Jong-RyulJeong",
    journal: "Current Applied Physics",
    year: 2018,
    isbnNo: "1567-1739",
    website: "https://www.journals.elsevier.com/current-applied-physics",
    wblink: "https://www.sciencedirect.com/science/article/abs/pii/S1567173918300609",
    indexedIn: "Scopus"
  },
  {
    sNo: 20,
    title: "Porous Fe3O4 Nanospheres with Controlled Porosity for Enhanced Electromagnetic Wave Absorption",
    author: "Rambabu Kuchi, Viet Dongquoc, Srivathsava Surabhi, Dojin Kim, Soon-Gil Yoon, Seung-Young Park, Jihoon Choi, Jong-Ryul Jeong",
    journal: "Physica Status Solidi A (1701032)",
    year: 2018,
    isbnNo: "1862-6319",
    website: "https://onlinelibrary.wiley.com/journal/18626319",
    wblink: "https://onlinelibrary.wiley.com/doi/abs/10.1002/pssa.201701032",
    indexedIn: "Scopus"
  },
  {
    sNo: 21,
    title: "In-Situ Co-Arc Discharge Synthesis of Fe3O4/SWCNT Composites for Highly Effective Microwave Absorption",
    author: "Rambabu Kuchi, Hieu M. Nguyen, Viet Dongquoc, Phuoc Cao Van, Srivathsava Surabhi, Soon-Gil Yoon, Dojin Kim, Jong-Ryul Jeong",
    journal: "Physica Status Solidi A (1701032)",
    year: 2018,
    isbnNo: "1862-6319",
    website: "https://onlinelibrary.wiley.com/journal/18626319",
    wblink: "https://onlinelibrary.wiley.com/doi/abs/10.1002/pssa.201700989",
    indexedIn: "Scopus"
  },
  {
    sNo: 22,
    title: "Synthesis & characterization of biologically active Gigantic swallow-wort mediated silver nanoparticles",
    author: "U.Nagababu, B.Govindh, B.S.Diwakar, G. KiranKumar, Anindita Chatterjee",
    journal: "Materials Today: Proceedings",
    year: 2019,
    isbnNo: "2214-7853",
    website: "https://www.journals.elsevier.com/materials-today-proceedings",
    wblink: "https://www.sciencedirect.com/science/article/pii/S2214785319316943",
    indexedIn: "Scopus"
  },
  {
    sNo: 23,
    title: "Electrochemical behaviour of interface of carbon steel/solution containing three-component formulations",
    author: "S.Srinivasa Rao, K.Chaitanya Kumar, S.Roopas Kiran, B.S.Diwakar",
    journal: "Materials Today: Proceedings",
    year: 2019,
    isbnNo: "2214-7853",
    website: "https://www.journals.elsevier.com/materials-today-proceedings",
    wblink: "https://www.sciencedirect.com/science/article/pii/S2214785319312064",
    indexedIn: "Scopus"
  },
  {
    sNo: 24,
    title: "Fabrication and characterisation of electrospun barium titanate and polyvinly pyridine composite nanofibers",
    author: "Adavi Bala Krishna, M.V. Someswararao, P.S.V. Subbarao, R.S. Dubey, B.S. Diwakar, K.S. Jaideep",
    journal: "Materials Today: Proceedings",
    year: 2019,
    isbnNo: "2214-7853",
    website: "https://www.journals.elsevier.com/materials-today-proceedings",
    wblink: "https://www.sciencedirect.com/science/article/pii/S2214785319320267",
    indexedIn: "Scopus"
  },
  {
    sNo: 25,
    title: "Review on nanomaterials: Synthesis and applications",
    author: "Lalitha A. Kolahalam, I.V. Kasi Viswanath, Bhagavathula S. Diwakar, B. Govindh, Venu Reddy, Y.L.N. Murthy",
    journal: "Materials Today: Proceedings",
    year: 2019,
    isbnNo: "2214-7853",
    website: "https://www.journals.elsevier.com/materials-today-proceedings",
    wblink: "https://www.sciencedirect.com/science/article/pii/S2214785319325507",
    indexedIn: "Scopus"
  },
  {
    sNo: 26,
    title: "Synthesis and characterization of Bi0.9Ba0.1FeO3 nanostructures by solution method",
    author: "P.S.V. Shanmukhi, Boddeti Govindh, Bhagavathula S. Diwakar, V. Swaminadham, K. Chandramouli",
    journal: "Materials Today: Proceedings",
    year: 2019,
    isbnNo: "2214-7853",
    website: "https://www.journals.elsevier.com/materials-today-proceedings",
    wblink: "https://www.sciencedirect.com/science/article/pii/S221478531932440X",
    indexedIn: "Scopus"
  },
  {
    sNo: 27,
    title: "Development of multifunctional metal oxide coated magnetite nanocomposites for advanced applications",
    author: "Chandra Sekhar Devarapu, S. Diwakar Bhagavathula, Bhavani Penmatsa, Madhavi Nannapaneni",
    journal: "Materials Today: Proceedings",
    year: 2019,
    isbnNo: "2214-7853",
    website: "https://www.journals.elsevier.com/materials-today-proceedings",
    wblink: "https://www.sciencedirect.com/science/article/pii/S221478531931692X",
    indexedIn: "Scopus"
  },
  {
    sNo: 28,
    title: "Synthesis, characterization and anti-bacterial screening of complex nanocomposite structures of SiO2@ ZnO@ Fe3O4 and SnO2@ ZnO@ Fe3O4",
    author: "Chandra Sekhar Devarapu, S. Diwakar Bhagavathula, Madhavi Nannapaneni",
    journal: "Nano-Structures & Nano-Objects",
    year: 2019,
    isbnNo: "2352-507X",
    website: "https://www.sciencedirect.com/journal/nano-structures-and-nano-objects",
    wblink: "https://www.sciencedirect.com/science/article/pii/S2352507X19302963",
    indexedIn: "Scopus"
  },
  {
    sNo: 29,
    title: "Effect of Bio-Enzyme in the Treatment of Fresh Water Bodies",
    author: "Bhavani Penmatsa, D Chandra Sekhar, Bhagavathula S Diwakar, TV Nagalakshmi",
    journal: "International Journal of Recent Technology and Engineering",
    year: 2019,
    isbnNo: "2277-3878",
    website: "https://www.ijrte.org/",
    wblink: "https://www.ijrte.org/wp-content/uploads/papers/v8i1S3/A10550681S319.pdf",
    indexedIn: "Scopus"
  },
  {
    sNo: 30,
    title: "An Efficient Methodology for Iodine-Catalyzed Synthesis of N, N’ –Disubstituted Guanidines",
    author: "Bajivali Shaik, Mohan Seelam, Chandra Sekahr Devarapu, P. Bhavani, Prasad Rao Kammela",
    journal: "International Journal of Recent Technology and Engineering",
    year: 2019,
    isbnNo: "2277-3878",
    website: "https://www.ijrte.org/",
    wblink: "https://www.ijrte.org/wp-content/uploads/papers/v8i1S3/A10520681S319.pdf",
    indexedIn: "Scopus"
  },
  {
    sNo: 31,
    title: "Adsorption of disperse blue 14 onto activated carbon prepared from Jackfruit-PPI-I waste",
    author: "T.V.Nagalakshmi, K.A.Emmanuel, P.Bhavani",
    journal: "Materials Today: Proceedings",
    year: 2019,
    isbnNo: "2214-7853",
    website: "https://www.journals.elsevier.com/materials-today-proceedings",
    wblink: "https://www.sciencedirect.com/science/article/pii/S2214785319314294",
    indexedIn: "Scopus"
  },
  {
    sNo: 32,
    title: "SOME STUDIES OF PHYSICO CHEMICAL PARAMETERS IN AQUA POND WATERS AT VEMPA, BHIMAVARAM, AP, INDIA.",
    author: "K. Jasmine, R.Suresh Babu, G.Rama Swamy, N.Vijaya Kumar and S.SaiDurga Prasad",
    journal: "Journal of Emerging Technologies and Innovative Research",
    year: 2019,
    isbnNo: "2349-5162",
    website: "https://www.jetir.org/",
    wblink: "https://www.jetir.org/view.php?paper=JETIR1907H84",
    indexedIn: "Others"
  },
  {
    sNo: 33,
    title: "Rational design of carbon shell-encapsulated cobalt nanospheres to enhance microwave absorption performance",
    author: "Rambabu Kuchi, Monika Sharma, Sung WooLee, DongsooKimd, Namge Jung, Jong-RyulJeong",
    journal: "Progress in Natural Science: Materials International",
    year: 2019,
    isbnNo: "1002-0071",
    website: "https://www.sciencedirect.com/journal/progress-in-natural-science-materials-international",
    wblink: "https://www.sciencedirect.com/science/article/pii/S1002007119301881",
    indexedIn: "Scopus"
  },
  {
    sNo: 34,
    title: "Magnetic/catalytic properties and strain induced structural phase transformation from β-FeOOH to porous α-Fe2O3 nanorods",
    author: "Sung WooLee, Srivathsava Surabhi, Rambabu Kuchi, Young ku Sohn, Jong-Ryul Jeong",
    journal: "Journal of Alloys and Compounds",
    year: 2019,
    isbnNo: "0925-8388",
    website: "https://www.sciencedirect.com/journal/journal-of-alloys-and-compounds",
    wblink: "https://www.sciencedirect.com/science/article/abs/pii/S0925838818331335",
    indexedIn: "Scopus"
  },
  {
    sNo: 35,
    title: "Silica Coated Magnetic Nanoparticles for‎ Biological Applications",
    author: "D. Chandra Sekhar, Bhagavathula S. Diwakar, N. Madhavi",
    journal: "International Journal of Nanoscience and Nanotechnology",
    year: 2020,
    isbnNo: "1735-7004",
    website: "http://www.ijnnonline.net/",
    wblink: "http://www.ijnnonline.net/article_47975.html",
    indexedIn: "Scopus"
  },
  {
    sNo: 36,
    title: "Influence of Silver and Copper Substitution on Structural, Dielectric, Magnetic, and Catalytic Properties of Nano-Lanthanum Ferrites",
    author: "Dr. B. S. Diwakar",
    journal: "Journal of Nanostructures",
    year: 2022,
    isbnNo: "2251-788X",
    website: "https://jns.kashanu.ac.ir/",
    wblink: "https://jns.kashanu.ac.ir/article_111983.html",
    indexedIn: "Scopus"
  },
  {
    sNo: 37,
    title: "Effect of the Graphene- Ni/NiFe2O4 Composite on Bacterial Inhibition Mediated by Protein Degradation",
    author: "DrVenu Reddy",
    journal: "ACS omega",
    year: 2022,
    isbnNo: "2470-1343",
    website: "https://pubs.acs.org/journal/acsodf",
    wblink: "https://pubs.acs.org/doi/full/10.1021/acsomega.2c02064",
    indexedIn: "Scopus"
  },
  {
    sNo: 38,
    title: "Bio Designed ZnO Nanoparticles with Leaves of Elaeocarpus Sylvestris and Investigation of Photocatalyst for Dye Degradation and Antimicrobial applications",
    author: "Tejaswini G., Lakshmi Kishore P., Kiran Kumar P., Lakshmi Rekha B., Bhagya Lakshmi K.",
    journal: "Arabian Journal for Science and Engineering",
    year: 2023,
    isbnNo: "2191-4281",
    website: "https://www.springerprofessional.de/en/arabian-journal-for-science-and-engineering/6085892",
    wblink: "https://www.springerprofessional.de/en/bio-designed-zno-nanoparticles-with-leaves-of-elaeocarpus-sylves/25432552",
    indexedIn: "Scopus"
  },
  {
    sNo: 39,
    title: "Comparative Analysis of PWM Methods for Three Level Neutral Point Clamped Inverter",
    author: "Deenakonda M., Inti V.V.V., Swamy G.R., Lavanya M., Bhavani P., Rao B.T.",
    journal: "Lecture Notes of the Institute for Computer Sciences, Social-Informatics and Telecommunications Engineering, LNICST",
    year: 2023,
    isbnNo: "978-3-031-48891-7",
    website: "https://link.springer.com/book/10.1007/978-3-031-48891-7",
    wblink: "https://link.springer.com/chapter/10.1007/978-3-031-48891-7_7",
    indexedIn: "Scopus"
  },
  {
    sNo: 40,
    title: "Carboxymethyl Cellouse Stabilized Cobalt Sulfide Nanoparticles: Preparation, Characterization and Application",
    author: "Diwakar B.S., Rajeswari D., Singh J., Haritha P., Srinivasa Rao S., Swaminadham V., Rao B.T., Reddy V.",
    journal: "Journal of Cluster Science",
    year: 2023,
    isbnNo: "1572-8862",
    website: "https://link.springer.com/journal/10876",
    wblink: "https://link.springer.com/article/10.1007/s10876-022-02394-4",
    indexedIn: "Scopus"
  },
  {
    sNo: 41,
    title: "Optimization of Stability-Indicating HPLC Method for Analyzing Process Related Impurities of Penfluridol and Structural Elucidation of Stress Degradation Products by LCMS/MS",
    author: "Adilakshmi B., Rohini V.K., Eswarlal T., Prasanna Ch.L., Anna V.R.",
    journal: "Toxicology International",
    year: 2023,
    isbnNo: "0976-5131",
    website: "https://www.informaticsjournals.co.in/index.php/toxi/",
    wblink: "https://www.informaticsjournals.co.in/index.php/toxi/article/view/34033",
    indexedIn: "Scopus"
  },
  {
    sNo: 42,
    title: "Validated Stability Indicating HPLC Method for the Quantification of Process Related Impurities of Ubrogepant in Pharmaceutical Formulations",
    author: "Nagababu U., Sujatha D., Jyothi U., Vissa M.R., Srinivasa Kumar B.",
    journal: "Eurasian Journal of Chemistry",
    year: 2023,
    isbnNo: "2959-0671",
    website: "https://ejc.buketov.edu.kz/index.php/ejc/about",
    wblink: "https://ejc.buketov.edu.kz/index.php/ejc/article/view/9",
    indexedIn: "Scopus"
  },
  {
    sNo: 43,
    title: "Development of Stability-indicating HPLC method for quantification of pharmacopeia impurities of Zuclopenthixol and characterization of its stress degradation products by LCMS/MS",
    author: "Bondili Sesharamsingh, J. Suresh Kumar, I.V. Kasi Viswanath, Gattupalli Subhakara Rao, Venkateswara Rao Anna",
    journal: "Future Journal of Pharmaceutical Sciences",
    year: 2023,
    isbnNo: "2314-7253",
    website: "https://fjps.springeropen.com/",
    wblink: "https://fjps.springeropen.com/articles/10.1186/s43094-023-00554-5",
    indexedIn: "Scopus"
  },
  {
    sNo: 44,
    title: "Development and Application of a Validated HPLC Method for the Determination of Alpelisib and its Process-Related Impurities in Pure Drug and Pharmaceutical Formulations",
    author: "Harish J., Kumar B.S., Babu U.N., Rao G.S., Anna V.R.",
    journal: "Toxicology International",
    year: 2023,
    isbnNo: "0976-5131",
    website: "https://www.informaticsjournals.co.in/index.php/toxi/",
    wblink: "https://www.informaticsjournals.co.in/index.php/toxi/article/view/33573",
    indexedIn: "Scopus"
  },
  {
    sNo: 45,
    title: "Synthesis, Characterization of New Benzopyran Pyrimidines and Study of their Solvatochromic Behaviour",
    author: "Suhasini K.P., Kumar J.S., Christopher V., Naidu C.G.",
    journal: "Asian Journal of Chemistry",
    year: 2024,
    isbnNo: "0975-427X",
    website: "https://asianpubs.org/index.php/ajchem/index",
    wblink: "https://asianpubs.org/index.php/ajchem/article/view/36_4_20",
    indexedIn: "Scopus"
  },
  {
    sNo: 46,
    title: "CuI Promoted Efficient Synthesis and Antimicrobial Activity of Substituted 8, 8-Dimethyl-5-phenyl-2-(pyrazin-2-yl)-5, 7, 8, 9-tetrahydro-6H-[1, 3, 4]thiadiazolo[2, 3-b]quinazolin-6-one",
    author: "Khadgamala N.S., Rao V.N., Apparao K., Durgarao B.V., Diwakar B.S., Rao N.K.",
    journal: "Asian Journal of Chemistry",
    year: 2024,
    isbnNo: "0975-427X",
    website: "https://asianpubs.org/index.php/ajchem/index",
    wblink: "https://asianpubs.org/index.php/ajchem/article/view/36_4_17",
    indexedIn: "Scopus"
  },
  {
    sNo: 47,
    title: "A New Series of Indole and Azaindole Derivatives with Oxo-dihydropyridines: Synthesis, Characterization and Cytotoxicity Studies against Breast Malignant Cell Lines",
    author: "Madugula A.K., Jagadeesh K., Varma D.B.N.S., Kadiyala K.G., Pedada S.R.A.O., Guttula R.S., Nagababu U., Rangaiah G.",
    journal: "Asian Journal of Chemistry",
    year: 2024,
    isbnNo: "0975-427X",
    website: "https://asianpubs.org/index.php/ajchem/index",
    wblink: "https://asianpubs.org/index.php/ajchem/article/view/36_3_19",
    indexedIn: "Scopus"
  },
  {
    sNo: 48,
    title: "Excess Thermodynamic Parameters of Binary Liquid Mixtures of Dimethyl Malonate with Isomeric Xylenes at Different Temperatures",
    author: "Krishna K.P., Sri P.B.S., Sekhar D.C., Gupta T.V.L.N.B., Satyanarayana R.L.",
    journal: "Asian Journal of Chemistry",
    year: 2024,
    isbnNo: "0975-427X",
    website: "https://asianpubs.org/index.php/ajchem/index",
    wblink: "https://asianpubs.org/index.php/ajchem/article/view/36_4_16",
    indexedIn: "Scopus"
  },
  {
    sNo: 49,
    title: "TiO2nanoparticles as reusable catalysts for the efficient synthesis of 2, 4, 5-trisubstituted-1H-imidazoles",
    author: "Lakshman S., Srinivasa Rao N., Kadgamala S., Durgarao B.V., Krishnarao N., Diwakar B.S.",
    journal: "Journal of Physics: Conference Series",
    year: 2024,
    isbnNo: "1742-6596",
    website: "https://iopscience.iop.org/journal/1742-6596",
    wblink: "https://iopscience.iop.org/article/10.1088/1742-6596/2765/1/012026",
    indexedIn: "Scopus"
  },
  {
    sNo: 50,
    title: "The study of rate constants of redox reactions on cobalt (III) complexes of α-hydroxy acids with quinolinium chlorochromate (QCC) in micellar medium",
    author: "Raghupathi Raju M.V., Vijaya Kumar N., Tulasi Bhavani K., Subramani K., Rama Swamy G., Prameela Devi S., Tirumala Rao B., Lakshmi Kanth G.V.",
    journal: "Journal of Physics: Conference Series",
    year: 2024,
    isbnNo: "1742-6596",
    website: "https://iopscience.iop.org/journal/1742-6596",
    wblink: "https://iopscience.iop.org/article/10.1088/1742-6596/2765/1/012008",
    indexedIn: "Scopus"
  },
  {
    sNo: 51,
    title: "Facile and an efficient one-pot synthesis of 2-arylbenzoxazoles promoted by transition metal oxide nano catalyst",
    author: "Prathap K., Lakshman S., Lakshmi M.V., Durgarao B.V., Sirisha D.V.L., Krishnarao N.",
    journal: "Journal of Physics: Conference Series",
    year: 2024,
    isbnNo: "1742-6596",
    website: "https://iopscience.iop.org/journal/1742-6596",
    wblink: "https://iopscience.iop.org/article/10.1088/1742-6596/2765/1/012021",
    indexedIn: "Scopus"
},
{
    sNo: 52,
    title: "Biogenic Synthesis of Magnetite Nanoparticles using the Roots of Mirabilis Jalapa for Efficient Removal of Eluent, Anti-Bacterial, and Antioxidant: A Sustainable Approach.",
    author: "Madhavi B., Prameeladevi S., Annapurna N., Padma M.",
    journal: "Journal of Physics: Conference Series",
    year: 2024,
    isbnNo: "1742-6596",
    website: "https://iopscience.iop.org/journal/1742-6596",
    wblink: "https://iopscience.iop.org/article/10.1088/1742-6596/2765/1/012004",
    indexedIn: "Scopus"
},
{
    sNo: 53,
    title: "The Effect of Graphene Oxide on Optical, Ferroelectric, and Catalytic Properties of Protein-Encapsulated ZnSe Nanocomposite",
    author: "Rapaka S.B., Markkandan R., Bhagavathula S.D., Singh J., Dhanikonda R., A. S. V. R. Sai Phani Kumar K., Reddy V.",
    journal: "ECS Journal of Solid State Science and Technology",
    year: 2024,
    isbnNo: "2162-8777 (web)",
    website: "https://iopscience.iop.org/journal/2162-8777",
    wblink: "https://iopscience.iop.org/article/10.1149/2162-8777/ad3673",
    indexedIn: "Scopus"
},
{
    sNo: 54,
    title: "Selective oxidation of veratryl alcohol to veratraldehyde using more active catalyst in a continuous reactor",
    author: "Purushothaman S., Kavitha C., Bhavani P., Tamizhdurai P., Mangesh V.L., Kumaran R., Augustine T., Siva Kumar N., Basivi P.K., Al-Fatesh A.S.",
    journal: "Journal of Saudi Chemical Society",
    year: 2024,
    isbnNo: "2212-4640",
    website: "https://www.sciencedirect.com/journal/journal-of-saudi-chemical-society",
    wblink: "https://www.sciencedirect.com/science/article/pii/S1319610323002089",
    indexedIn: "Scopus"
},
{
    sNo: 55,
    title: "Magnetic Lateral Ladder for Unidirectional Transport of Microrobots: Design Principles and Potential Applications of Cells-on-Chip",
    author: "Ali A., Kim H., Torati S.R., Kang Y., Reddy V., Kim K., Yoon J., Lim B., Kim C.",
    journal: "Small",
    year: 2024,
    isbnNo: "1613-6829",
    website: "https://onlinelibrary.wiley.com/journal/16136829",
    wblink: "https://onlinelibrary.wiley.com/doi/full/10.1002/smll.202305528",
    indexedIn: "Scopus"
},
{
    sNo: 56,
    title: "Development of sensitive stability indicating HPLC method for quantification of process related impurities of Fluphenazine; LC–MS/MS elucidation of their degradation products and degradation pathway",
    author: "V LAKSHMI U",
    journal: "Research Journal of Chemistry and Environment",
    year: 2024,
    isbnNo: "1E+07",
    website: "Research Journal of Chemistry and Environment (ores.su)",
    wblink: null,
    indexedIn: "Scopus"
},
{
    sNo: 57,
    title: "Magnetically Selective Versatile Transport of Microrobotic Carriers",
    author: "DrVenu Reddy",
    journal: "Small Methods",
    year: 2024,
    isbnNo: "2366-9608",
    website: "https://onlinelibrary.wiley.com/journal/23669608",
    wblink: "https://onlinelibrary.wiley.com/doi/full/10.1002/smtd.202301495",
    indexedIn: "Scopus"
},
{
    sNo: 58,
    title: "Density, Speed of Sound and Derived Properties of Binary Mixtures Propiophenone + Butoxyethanol at T = (303.15, 308.15, 313.15 and 318.15) K",
    author: "Dr. P. Bhavani",
    journal: "Asian Journal of Chemistry",
    year: 2024,
    isbnNo: "0975-427X",
    website: "https://asianpubs.org/index.php/ajchem/index",
    wblink: "https://asianpubs.org/index.php/ajchem/article/view/36_4_19",
    indexedIn: "Scopus"
},
{
    sNo: 59,
    title: "An Efficient One pot synthesis and biological activities of 6H-Indolo[2,3-b]quinoxalines promoted by Palladium Acetate as Catalyst",
    author: "K. Balageeta",
    journal: "Asian Journal of Chemistry",
    year: 2024,
    isbnNo: "0975-427X",
    website: "https://asianpubs.org/index.php/ajchem/index",
    wblink: null,
    indexedIn: "Scopus"
}

]
  return (
    <div>
   <Navbar/>
<div className="page-main2">
    <div>
    <Sidebar/>
    </div>
    <div className='pumain'>
        {/* <div class="year">Research Publications:
        </div> */}
        <h4>Research Publications</h4>

        <table className='ptbl' style={{borderCollapse:'collapse',border: '1px solid black'}}>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Title of the Research Paper</th>
                <th>Authors</th>
                <th>Journal Name</th>
                <th>Year</th>
                <th>ISBN No</th>
                <th>Journal website</th>
                <th>Wblink of paper</th>
                <th>Indexed in </th>
            </tr>
        </thead>
        <tbody>
        
        {data.map((item)=>{
            return(
                <tr>
                <td>{item.sNo}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.journal}</td>
                <td>{item.year}</td>
                <td>{item.isbnNo}</td>
                <td>{item.website}</td>
                <td>{item.wblink}</td>
                <td>{item.indexedIn}</td>
                </tr>
            );
        })}

        </tbody>
        </table>
    </div>
</div>
    </div>
  )
}

export default Publications