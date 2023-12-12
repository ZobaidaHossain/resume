import { Link } from "react-router-dom";

import img2 from '../assets/profile2.png'
import github from '../assets/github.jpg'
import linkedin from '../assets/linkedin.jpg'
import pdfFile from '../assets/resume.pdf';
const HeroSection = () => {
    return (
        <section className="lg:py-16 bg-black ">
            <div className="grid grid-cols-1 sm:grid-cols-12 pt-36">
                <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    
                     <div className="i-name ml-11">
     
          <span className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold" >Hello! I Am</span>
          <br />
          <span className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">Zobaida Hossain</span>
          <br />
          <span className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Frontend Developer with high level of experience in web designing
            and development
          </span>
        </div>
                    <div className="ml-11">
                       
                          <Link
                            href="/#contact"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Hire Me
                            </span>
                        </Link>
                        <a
                            href={pdfFile}
                            download="Your_CV.pdf"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </a>
                    </div>
                    {/* social */}
                    <div className="ml-11">
                    <a
                     href="https://github.com/ZobaidaHossain"
  target="_blank"
  rel="noopener noreferrer"
  className="px-1 inline-block py-1 w-full sm:w-fit hover:bg-slate-800 text-white mt-3"
>
  <span className="block hover:bg-slate-800 rounded-full px-5 py-2">
    <img className="w-[4.75rem] h-[4.75rem]" src={github} alt="GitHub Icon" />
  </span>
</a>

<a
  href="https://www.linkedin.com/in/zobaida-hossain-56a301214?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNl5XOoT4QjiBt%2BP7TPQACQ%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="px-1 inline-block py-1 w-full sm:w-fit hover:bg-slate-800 text-white mt-3"
>
  <span className="block hover:bg-slate-800 rounded-full px-5 py-2">
    <img className="w-[4.75rem] h-[4.75rem]" src={linkedin} alt="LinkedIn Icon" />
  </span>
</a>

                        
                    </div>
                    {/*  */}
                    
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <img
                            src={img2}
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;