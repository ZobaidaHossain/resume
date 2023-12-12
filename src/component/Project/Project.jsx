import img1 from '../../assets/p1.jpg'
import img2 from '../../assets/project4.jpg'
import img3 from '../../assets/project-6.jpg'
import img4 from '../../assets/project3.jpg'
import github from '../../assets/github.jpg'
import linkedin from '../../assets/linklink.jpeg'
const Project = () => {
    return (
        <section className=" bg-black items-center" id="project">
          
        
      <h2 className="text-6xl font-bold text-white mb-4 ml-11 text-center">My Project</h2>
       <div>
       <div className="carousel w-full h-41 items-center">
  <div id="item1" className="carousel-item w-full">
    {/* <img src={img1} className="w-full" /> */}
    <div className="hero min-h-screen" >
        <img src={img1} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hostel Management System Website</h1>
      <p className="mb-5">Using React.js,node.js,express,mongoDB</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
      <div className="ml-11">
                    <a
                     href="https://github.com/ZobaidaHossain/assignment-12-hostel-management"
  target="_blank"
  rel="noopener noreferrer"
  className="px-1 inline-block py-1 w-full sm:w-fit hover:bg-slate-800 text-white mt-3"
>
  <span className="block hover:bg-slate-800 rounded-full px-5 py-2">
    <img className="w-[4.75rem] h-[4.75rem]" src={github} alt="GitHub Icon" />
  </span>
</a>

<a
  href="https://hostel-management-a7294.web.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-1 inline-block py-1 w-full sm:w-fit hover:bg-slate-800 text-white mt-3"
>
  <span className="block hover:bg-slate-800 rounded-full px-5 py-2">
    <img className="w-[4.75rem] h-[4.75rem]" src={linkedin} alt="LinkedIn Icon" />
  </span>
</a>

                        
                    </div>
    </div>
  </div>
</div>

{/*  */}
  </div> 
  <div id="item2" className="carousel-item w-full">
    {/* <img src={img2} className="w-full" /> */}
    <div className="hero min-h-screen" >
        <img src={img2} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">E-commerce Website</h1>
      <p className="mb-5">Using HTML,CSS,JAVASCRIPT</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
      <div className="ml-11">
                    <a
                     href="https://github.com/ZobaidaHossain/assignemnt-5-summer-sale-ecommerce"
  target="_blank"
  rel="noopener noreferrer"
  className="px-1 inline-block py-1 w-full sm:w-fit hover:bg-slate-800 text-white mt-3"
>
  <span className="block hover:bg-slate-800 rounded-full px-5 py-2">
    <img className="w-[4.75rem] h-[4.75rem]" src={github} alt="GitHub Icon" />
  </span>
</a>

<a
  href="https://64e33ef51db18c0097c5acc2--phenomenal-jalebi-bf88b0.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-1 inline-block py-1 w-full sm:w-fit hover:bg-slate-800 text-white mt-3"
>
  <span className="block hover:bg-slate-800 rounded-full px-5 py-2">
    <img className="w-[4.75rem] h-[4.75rem]" src={linkedin} alt="LinkedIn Icon" />
  </span>
</a>

                        
                    </div>
    </div>
  </div>
</div>
  </div> 
  <div id="item3" className="carousel-item w-full">
    {/* <img src={img3} className="w-full" /> */}
    <div className="hero min-h-screen" >
        <img src={img3} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Donation Website</h1>
      <p className="mb-5">Using HTML,CSS,JAVASCRIPT </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
      <div className="ml-11">
                    <a
                     href="https://github.com/ZobaidaHossain/Assignment-8-donation-campaign"
  target="_blank"
  rel="noopener noreferrer"
  className="px-1 inline-block py-1 w-full sm:w-fit hover:bg-slate-800 text-white mt-3"
>
  <span className="block hover:bg-slate-800 rounded-full px-5 py-2">
    <img className="w-[4.75rem] h-[4.75rem]" src={github} alt="GitHub Icon" />
  </span>
</a>

<a
  href="https://651444bb9f64af03063ce231--chimerical-valkyrie-d7ea3d.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-1 inline-block py-1 w-full sm:w-fit hover:bg-slate-800 text-white mt-3"
>
  <span className="block hover:bg-slate-800 rounded-full px-5 py-2">
    <img className="w-[4.75rem] h-[4.75rem]" src={linkedin} alt="LinkedIn Icon" />
  </span>
</a>

                        
                    </div>
    </div>
  </div>
</div>
  </div> 
  <div id="item4" className="carousel-item w-full">
    {/* <img src={img4} className="w-full" /> */}
    <div className="hero min-h-screen" >
        <img src={img4} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">JobHub Website</h1>
      <p className="mb-5">Using React.js,node.js,express,mongoDB</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
      <div className="ml-11">
                    <a
                     href="https://github.com/ZobaidaHossain/assignment-11-job_hub"
  target="_blank"
  rel="noopener noreferrer"
  className="px-1 inline-block py-1 w-full sm:w-fit hover:bg-slate-800 text-white mt-3"
>
  <span className="block hover:bg-slate-800 rounded-full px-5 py-2">
    <img className="w-[4.75rem] h-[4.75rem]" src={github} alt="GitHub Icon" />
  </span>
</a>

<a
  href="https://jobhub-ecf0b.web.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-1 inline-block py-1 w-full sm:w-fit hover:bg-slate-800 text-white mt-3"
>
  <span className="block hover:bg-slate-800 rounded-full px-5 py-2">
    <img className="w-[4.75rem] h-[4.75rem]" src={linkedin} alt="LinkedIn Icon" />
  </span>
</a>

                        
                    </div>
    </div>
  </div>
</div>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
       </div>
    
    </section>
    );
};

export default Project;