import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Layout/Footer';
import Header2 from "../Layout/Header2";
import logo from "../../assests/logocompanyprofile.jpg"
const employersInfo = [
  {
    id: '1',
    img: 'https://via.placeholder.com/150',
    name: 'Nova Home Care',
    location: 'London, UK',
    jobType: 'Accounting / Finance',
    phone: '123 456 7890',
    email: 'info@company.com',
    jobNumber: 10,
  },
  // Add more employers if needed
];

const MetaComponent = ({ meta }) => (
  <head>
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
  </head>
);

const LoginPopup = () => (
  <div className="modal fade" id="loginPopup" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Login popup content */}
      </div>
    </div>
  </div>
);

const DefaulHeader = () => (
  <header className="bg-primary text-white p-3">
    <div className="container">
      <h1>Default Header</h1>
    </div>
  </header>
);

const MobileMenu = () => (
  <div className="d-lg-none bg-secondary text-white p-3">
    <div className="container">
      <h2>Mobile Menu</h2>
    </div>
  </div>
);

const JobDetailsDescriptions = () => (
  <div className='text-start px-5'>
      <h4 className='text-start px-5'>About Company</h4>
      <p className='text-start px-5'>
        Moody’s Corporation, often referred to as Moody’s, is an American
        business and financial services company. It is the holding company for
        Moody’s Investors Service (MIS), an American credit rating agency, and
        Moody’s Analytics (MA), an American provider of financial analysis
        software and services.
      </p>
      <p className='text-start px-5'>
        Moody’s was founded by John Moody in 1909 to produce manuals of
        statistics related to stocks and bonds and bond ratings. Moody’s was
        acquired by Dun & Bradstreet in 1962. In 2000, Dun & Bradstreet spun off
        Moody’s Corporation as a separate company that was listed on the NYSE
        under MCO. In 2007, Moody’s Corporation was split into two operating
        divisions, Moody’s Investors Service, the rating agency, and Moody’s
        Analytics, with all of its other products.
      </p>
      <div className="row images-outer px-5 d-flex gap-2 my-4">
       <img src="https://superio-appdir.vercel.app/images/resource/employers-single-1.png" style={{width:"200px"}} alt="" />
       <img src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-2.png&w=256&q=75" style={{width:"200px"}} alt="" />
       <img src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-3.png&w=256&q=75" style={{width:"200px"}} alt="" />
       <img src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75" style={{width:"200px"}} alt="" />
      </div>
      <p className='text-start px-5'>
        Moody’s Corporation, often referred to as Moody’s, is an American
        business and financial services company. It is the holding company for
        Moody’s Investors Service (MIS), an American credit rating agency, and
        Moody’s Analytics (MA), an American provider of financial analysis
        software and services.
      </p>
      <p className='text-start px-5'>
        Moody’s was founded by John Moody in 1909 to produce manuals of
        statistics related to stocks and bonds and bond ratings. Moody’s was
        acquired by Dun & Bradstreet in 1962. In 2000, Dun & Bradstreet spun off
        Moody’s Corporation as a separate company that was listed on the NYSE
        under MCO. In 2007, Moody’s Corporation was split into two operating
        divisions, Moody’s Investors Service, the rating agency, and Moody’s
        Analytics, with all of its other products.
      </p>
  </div>
);

const RelatedJobs = () => (
  <div className=" mb-4 border-0 col-lg-12 ms-5">
    <div className="card-body border rounded-4 d-flex">
   
        
        <div className=" me-3  col-lg-2">
          <img 
            src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Femployers-single-4.png&w=256&q=75" 
            alt="resource" 
            className="img-fluid" 
            style={{ width: '100px', height: '100px' }}
          />
        </div>

        <div className="col-lg-9">

        <div className="d-flex justify-content-between">
      <h4 className="mb-2 ">ios developer</h4> 
        <button className="btn btn-outline-secondary">
          <i className="bi bi-bookmark"></i>
        </button>
      </div>

          <ul className="list-unstyled mb-2 d-flex gap-3">
            <li className="mb-1">
              <i className="bi bi-briefcase me-2"></i>
              segment
            </li>
            <li className="mb-1">
              <i className="bi bi-geo-alt me-2"></i>
              london
            </li>
            <li className="mb-1">
              <i className="bi bi-clock me-2"></i>
              11 hours
            </li>
            <li className="mb-1">
              <i className="bi bi-currency-dollar me-2"></i>
              35$ - 45$
            </li>
          </ul>
        </div>

   
     
    </div>
  </div>
);

const randomLatitude = -15.812898768599155;
const randomLongitude = 104.14392380381247;

const MapJobFinder = () => (
  <div style={{ height: "300px", background: "#e9ecef" }}>
    Map content...
  </div>
);

const Social = () => (
  <div>
    <a href="#">Facebook</a> | <a href="#">Twitter</a>
  </div>
);

const PrivateMessageBox = () => (
  <div>
    <textarea className="form-control" placeholder="Write a message"></textarea>
  </div>
);

const FooterDefault = () => (
  <footer className="bg-dark text-white p-3 mt-5">
    <div className="container">
      <p>Footer content</p>
    </div>
  </footer>
);

const metadata = {
  title: "Employers Single Dynamic V1 || Superio - Job Board ReactJs Template",
  description: "Superio - Job Board ReactJs Template",
};

const ProfilePage = () => {
 
  const { id } = useParams();
  const employer = employersInfo.find((item) => item.id === id) || employersInfo[0];

  return (
    <>
     <Header2/>
      <section className=" border my-">
      <div className=" mb-4 border-0  p-4 " style={{backgroundColor:"#F6F9FD"}}>
  <div className="c d-flex justify-content-between px-5">
    <div className="d-flex align-items-center">
      <img src={logo} alt="logo" className="mr-3" style={{ width: '200px', height: '100px' }} />
      <div className="ms-3">
        <h4 className="d-flex float-left ">{employer?.name}</h4><br/><br/>
        <ul className="list-inline font-fs font-bold" style={{fontWeight:"600"}}>
          <li className="list-inline-item"><i className="bi bi-geo-alt"></i> {employer?.location} |</li>
          <li className="list-inline-item"><i className="bi bi-briefcase"></i> {employer?.jobType} |</li>
          <li className="list-inline-item"><i className="bi bi-telephone"></i> {employer?.phone} |</li>
          <li className="list-inline-item"><i className="bi bi-envelope"></i> {employer?.email}</li>
        </ul>
        <ul className="list-inline d-flex float-left">
          <li className="list-inline-item badge rounded-pill text-bg-info text-white p-2 px-4">Open Jobs – {employer.jobNumber}</li>
        </ul>
      </div>
    </div>
    <div className="m-5 ">
      <button className="btn btn-primary p-3 px-5 rounded-3 mx-2" data-bs-toggle="modal" data-bs-target="#privateMessage">
        Private Message
      </button>
      <button className="btn btn-outline-primary ml-2 p-3 t" >
        <i className="bi bi-bookmark " ></i>
      </button>
    </div>
  </div>
</div>

        <div className="row ">
          <div className="col-lg-8 float-start">
            <JobDetailsDescriptions />
          
           <h3 className='ms-5 ps-5'>3 Others jobs available</h3>
           <p  className='ms-5 ps-5' >2024 jobs live - 293 added today.</p>
          

           
            <div className="mt-5 col-lg-11 mx-5 mb-5">
             
              <RelatedJobs />
              <RelatedJobs />
              <RelatedJobs />
            </div>
          </div>
           <div className="col-lg-3">
    <div className=" mb-4 p-2 border-0" style={{ backgroundColor: "#F5F7FC",fontSize:"14px" }}>
      <div className="card-body">
        
        <ul className="list-unstyled mb-4 ">
          <li className="d-flex justify-content-between mb-3 ">
            <strong >Primary industry:</strong>
            <span><i className="bi bi-briefcase me-2"></i> Software</span>
          </li>
          <li className="d-flex justify-content-between mb-3">
            <strong>Company size:</strong>
            <span><i className="bi bi-people-fill me-2"></i> 501-1,000</span>
          </li>
          <li className="d-flex justify-content-between mb-3">
            <strong>Founded in:</strong>
            <span><i className="bi bi-calendar mb-3"></i> 2011</span>
          </li>
          <li className="d-flex justify-content-between mb-3">
            <strong>Phone:</strong>
            <span><i className="bi bi-telephone me-2"></i> {employer?.phone}</span>
          </li>
          <li className="d-flex justify-content-between mb-3">
            <strong>Email:</strong>
            <span><i className="bi bi-envelope me-3"></i> {employer?.email}</span>
          </li>
          <li className="d-flex justify-content-between mb-3">
            <strong>Location:</strong>
            <span><i className="bi bi-geo-alt me-3"></i> {employer?.location}</span>
          </li>
          <li className="d-flex justify-content-between mb-3">
            <strong>Social media:</strong>
            <span><i className="bi bi-facebook me-2"></i>
             <i className="bi bi-twitter me-2"></i>
             <i className="bi bi-instagram me-2"></i>
             <i className="bi bi-linkdin me-2"></i>
             </span>
            
          </li>
        </ul>
        <a
          href={`http://www.${employer?.name}.com`}
          className="btn btn-primary p-2 px-5 rounded-3 border-0 mx-2 text-primary"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#A9C5ED" }}
        >
          www.{employer?.name}.com
        </a>
      </div>
    </div>
    <div className=" border-0 " style={{ backgroundColor: "#F5F7FC" }}>
      <div className="card-body">
        <h4 className="card-title flaot-start">Job Location</h4>
        <MapJobFinder latitude={randomLatitude} longitude={randomLongitude} />
      </div>
    </div>
  </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProfilePage;
