import React from "react";
const Footer = () => {
    return (
        <footer className="bg-[#efebeb] px-5">
            <div className=" flex flex-col items-center px-4 pt-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

                    <div className="flex flex-col justify-center relative top-[-66px] pt-0">
                        <img
                            src="/Footer/AceEmblem.svg"
                            alt="logo"
                            className="h-[80px] lg:h-[140px] lg:mt-28 mx-auto"
                        />
                        <p className="mt-8 text-black text-lg lg:text-xl text-center">
                            Make Better Future For Your Career
                        </p>
                        <div className="flex justify-center mt-12 space-x-4 sm:space-x-8 lg:space-x-16">
                            {[
                                { src: "footer/ri_google-fill.png", alt: "Google" },
                                { src: "footer/mingcute_facebook-fill.png", alt: "Facebook" },
                                { src: "footer/ri_instagram-fill.png", alt: "Instagram" },
                                { src: "footer/ic_sharp-whatsapp.png", alt: "WhatsApp" },
                            ].map((icon, index) => (
                                <a
                                    key={index}
                                    className="hover:opacity-75"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={icon.src}
                                        alt={icon.alt}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-auto lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="w-auto">
                            <p className="text-3xl text-black font-semibold">LINKS</p>
                            <nav className="flex flex-col mt-4 space-y-3 text-xl text-black/60">
                                <a className="hover:opacity-75" href="#"> Mandatory Disclosure </a>
                                <a className="hover:opacity-75" href="#"> Audited Statement </a>
                                <a className="hover:opacity-75" href="#"> Scholarship </a>
                                <a className="hover:opacity-75" href="#"> HR Policy </a>
                                <a className="hover:opacity-75" href="#"> Media </a>
                                <a className="hover:opacity-75" href="#"> About KTU </a>
                                <a className="hover:opacity-75" href="#"> AICTE EoA </a>
                                <a className="hover:opacity-75" href="#"> 360° Virtual Tour </a>
                                <a className="hover:opacity-75" href="#"> Report A Grievance </a>
                            </nav>
                        </div>
                        <div>
                            <p className="text-3xl text-black font-semibold">SUPPORT</p>
                            <nav className="flex flex-col mt-4 space-y-3 text-xl text-black/60">
                                <a className="hover:opacity-75" href="#"> Careers </a>
                                <a className="hover:opacity-75" href="#"> Help Us Ticket </a>
                                <a className="hover:opacity-75" href="#"> College Portal </a>
                                <a className="hover:opacity-75" href="#"> MH Trust WFM </a>
                            </nav>
                        </div>
                        <div >
                            <p className="text-3xl text-black font-semibold">OUR ADDRESS</p>

                            <iframe
                                className="w-[90%] h-[50%] mt-6"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.6358121624044!2d76.96396270974697!3d8.437377597935852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05a52ae61f4da3%3A0xcde797935b0f0d75!2sACE%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1742918154016!5m2!1sen!2sin"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                            <p className="mt-4 text-xl text-black/75">
                                ACE College of Engineering
                                <br />
                                Thiruvallam P.O, Thiruvananthapuram
                                <br />
                                Kerala - 695027
                            </p>
                        </div>
                    </div>
                </div>

                <div class="relative  left-[0px] w-full h-[5px] bg-[#fffdfd] mt-8"></div>
                <p className="my-8 text-base text-black text-center">Copyright © 2025</p>
            </div>
        </footer>)

  // return (
  //   <footer className="bg-slate-600 px-5">
  //   <div className=" flex flex-col items-center px-4 py-16 mx-auto sm:px-6 lg:px-8">
  //     <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        
  //       <div className="relative top-[-66px] text-xl">
  //       <img src="/logos/FooterLogo/ACE LOGO copy.png" className="h-[200px]" alt="logo" />
  //         <p className="max-w-xs ml-2  mt-0  text-white/60">
           
  //           info@Acetvm.Com
  //           <br />
  //           (+91)-0471-7117777/87/97
  //           <br />
  //           (+91)-0471-2384437/47
  //         </p>
  //         <p className=" ml-2 max-w-xs mt-4 text-white/60">
  //           For Admission Enquiries:
  //           <br />
  //           (+91) 9562781288
  //         </p>
  //         <p className="ml-2 max-w-xs mt-4 text-white/60">
  //           For General Enquiries:
  //           <br />
  //           (+91) 8281711677
  //         </p>
  //         <div className="flex mt-8 space-x-6">
  //           <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
  //           <img src="logos/FooterLogo/icons8-facebook-50.png" alt="Facebook" className="w-10 h-10" />
  //           </a>
  //           <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
  //           <img src="logos/FooterLogo/icons8-instagram-100.png" alt="Instagram" className="w-10 h-10" />
  //           </a>
  //           <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
  //           <img src="logos/FooterLogo/icons8-whatsapp-50.png" alt="Whatsapp" className="w-10 h-10" />
  //           </a>
  //           <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
  //           <img src="logos/FooterLogo\icons8-twitter-50.png" alt="Twitter" className="w-10 h-10" />
  //           </a>
  //           <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
  //           <img src="logos/FooterLogo/icons8-linkedin-50.png" alt="linkedin" className="w-10 h-10" />
  //           </a>
  //         </div>
  //       </div>
  
  //       <div className="grid grid-cols-1 gap-auto lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
  //         <div className="w-auto">
  //           <p className="text-3xl text-white font-semibold">LINKS</p>
  //           <nav className="flex flex-col mt-4 space-y-3 text-xl text-white/60">
  //             <a className="hover:opacity-75" href="#"> Mandatory Disclosure </a>
  //             <a className="hover:opacity-75" href="#"> HR Policy </a>
  //             <a className="hover:opacity-75" href="#"> Audited Statement </a>
  //             <a className="hover:opacity-75" href="#"> About KTU </a>
  //             <a className="hover:opacity-75" href="#"> Scholarship </a>
  //             <a className="hover:opacity-75" href="#"> Media </a>
  //             <a className="hover:opacity-75" href="#"> AICTE EoA </a>
  //             <a className="hover:opacity-75" href="#"> Report A Grievance </a>
  //             <a className="hover:opacity-75" href="#"> 360 Virtual Tour</a>
  //           </nav>
  //         </div>
  //         <div>
  //           <p className="text-3xl text-white font-semibold">SUPPORT</p>
  //           <nav className="flex flex-col mt-4 space-y-3 text-xl text-white/60">
  //             <a className="hover:opacity-75" href="#"> Careers </a>
  //             <a className="hover:opacity-75" href="#"> Help Us Ticket </a>
  //             <a className="hover:opacity-75" href="#"> College Portal </a>
  //             <a className="hover:opacity-75" href="#"> MH Trust WFM </a>
  //           </nav>
  //         </div>
  //         <div >
  //           <p className="text-3xl text-white font-semibold">OUR ADDRESS</p>
            
  //             <iframe
  //               className="w-[90%] h-[40%]"
  //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.6358121624044!2d76.96396270974697!3d8.437377597935852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05a52ae61f4da3%3A0xcde797935b0f0d75!2sACE%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1742918154016!5m2!1sen!2sin"
  //               allowFullScreen
  //               loading="lazy"
  //               referrerPolicy="no-referrer-when-downgrade"
  //             ></iframe>
            
  //           <p className="mt-4 text-xl text-white/75">
  //             ACE College of Engineering
  //             <br />
  //             Thiruvallam P.O, Thiruvananthapuram
  //             <br />
  //             Kerala - 695027
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  
  //     <div class="relative  left-[0px] w-full h-[5px] bg-[#fffdfd]"></div>
  //     <p className="mt-12 text-base text-white text-center">Copyright © 2025</p>
  //   </div>
  // </footer>
  

  //   );
};

export default Footer;
