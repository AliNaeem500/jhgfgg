import Image from "next/image";
import Content from '../app/assets/Content.png'
import Actions from '../app/assets/Actions.png'
import Ddsgnr from '../app/assets/Ddsgnr Library.png'
import Imageee from '../app/assets/Imageee.png'
import Logos from '../app/assets/Logos.png'
import CardOne from '../app/assets/CardOne.png'
import CardTwo from '../app/assets/CardTwo.png'
import CardThree from '../app/assets/CardThree.png'

import CardFour from '../app/assets/CardFour.png'
import CardFive from '../app/assets/CardFive.png'
import CardSix from '../app/assets/CardSix.png'
import CardSeven from '../app/assets/CardSeven.png'
import CardEight from '../app/assets/CardEight.png'
import CardNine from '../app/assets/CardNine.png'
import List from '../app/assets/List.png'
import BlogOne from '../app/assets/BlogOne.png'
import BlogTwo from '../app/assets/BlogTwo.png'
import BlogThree from '../app/assets/BlogThree.png'
import BlogFour from '../app/assets/BlogFour.png'
import BlogFive from '../app/assets/BlogFive.png'
import BlogSix from '../app/assets/BlogSix.png'

import MiddleOne from '../app/assets/MiddleOne.png'
import MiddleTwo from '../app/assets/MiddleTwo.png'
import MiddleThree from '../app/assets/MiddleThree.png'
import MiddleFour from '../app/assets/MiddleFour.png'
import MiddleFive from '../app/assets/MiddleFive.png'
import MiddleSix from '../app/assets/MiddleSix.png'
import Last from '../app/assets/Last.png'
import LastOne from '../app/assets/LastOne.png'
import LastTwo from '../app/assets/LastTwo.png'
import LastThree from '../app/assets/LastThree.png'
import Sider from '../app/assets/Sider.png'
import SiderDots from '../app/assets/SliderDots.png'

import FooterOne from '../app/assets/FooterOne.png'



import Header from "./components/Header";
import Hero from "./components/Hero";
import Link from "next/link";
import './globals.css'
import Footer from "./components/Footer";
export default function Home() {
  return (
  <div className="w-[1480px] h-[7400px]  md:w-[760px]  sm:w-[600px]">

      <div className="Header w-[1280px]  h-[56px] ml-[40px] sm:px-6 lg:px-10  md:w-[760px]  sm:w-[600px] "> 
      <Image src={Content} alt="sorry"/>
      </div>

      <div className="w-[736px] h-[24px] -mt-[52px] ml-[725px] md:flex md:justify-center md:item-center  md:w-[760px]  sm:w-[600px]">
      <Image src={Actions} alt="sorry"/> 
      </div>
      <div className="w-[1410px] h-[72px] mt-[170px] ml-[100px] border-black pr-[64px] pl-[64px]  md:w-[760px]  sm:w-[600px]">
          <div className="w-[1152px] h-[44px] justify-space-between  md:w-[760px]  sm:w-[600px]">
            <div className="w-[103.6px] h-[41px] pt-[29px] pb-[29px] gap-[105px] -mt-[160px] -ml-[90px]">
              <Image src={Ddsgnr} alt="sorry"/>
               <Header/>
               <Hero/>
                <div className="w-[660px] h-[900px] ml-[760px] -mt-[800px] ">
                <Image src={Imageee} alt="sorry"/>
              </div>
               <div className="bg-gray-200 w-[1475px] h-[228px] gap-[64px] -mt-[96px] -ml-[68px] "> 
                <h4 className="w-[350px] h-[68px] font-roboto font-bold text-[24px] leading-33.6px text-black pt-[75px] -">
                Trusted by 2000+ companies <br /> worldwide.
                </h4>
                <div className="ml-[600px]"> 
                <Image src={Logos}   alt="sorry"/>
                </div>
               
                <div className="w-[1470px]  h-[1049px] bg-white mt-[100px]">
                  <h6 className="w-[800px] h-[58px] font-roboto font-bold text-[48px] leading-[57.6px] text-black pt-[112px] ml-[400px] flex ">Explore Courses By Category</h6>

                  <h6 className="w-[768px] h-[27px] font-roboro font-normal text-[18px] md:text-base leading-[27px] text-black mt-[77px] ml-[401px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</h6>

                  

                      <div className="mt-[70px] w-[400px]  h-[132px]">
                       <Image src={CardOne} alt="sorry"/>
                      </div>

                      <div className="ml-[560px] -mt-[131.5px] w-[400px]  h-[132px]">
                       <Image src={CardTwo} alt="Sorry"/>
                      </div>

                      <div className="ml-[1100px] -mt-[131.5px] w-[400px]  h-[132px]">
                       <Image src={CardThree} alt="Sorry"/>
                      </div>

                      <div className="w-[400px]  h-[132px] mt-[66px] ">
                        <Image src={CardFour} alt="Sorry"/>
                      </div>

                      <div className="ml-[560px] -mt-[131.5px] w-[400px]  h-[132px]">
                        <Image src={CardFive} alt="Sorry"/>
                      </div>

                      <div className="ml-[1100px] -mt-[131.5px] w-[400px]  h-[132px]">
                        <Image src={CardSix} alt="Sorry"/>
                      </div>

                      <div className="w-[400px]  h-[131.5px] mt-[66px]">
                        <Image src={CardSeven} alt="Sorry"/>
                      </div>

                      <div className="ml-[560px] -mt-[131.5px] w-[400px]  h-[132px] ">
                        <Image src={CardEight} alt="Sorry"/>
                      </div>

                      <div className="ml-[1100px] -mt-[131.5px] w-[400px]  h-[132px]">
                        <Image src={CardNine} alt="Sorry"/>
                      </div>

                      

            <h2 className="w-[170px]  h-[48px] p-[10px_20px] mt-[90px] ml-[675px] gap-4 rounded-[5px] border-[1px] bg-white font-roboto text-[16px] text-black flex item-center space-x-3 inline-flex inline-block ">
            <Link href="/View All Courses">
            <span> View</span><span> All</span><span> Cources</span>
            </Link></h2>

                </div>
                   <div className="bg-white w-[1500px]  h-[488px] ">
                    <h1 className="text-black w-[1152px] h-[58px] font-roboto font-bold text-[48px] leading-[57.6px] justify-center item-center pt-[80px] pl-[580px]">Our Achivements</h1>
                   
                  <div className="ml-[90px]">  
                    <h1 className="text-black w-[1260px]  h-[54px] font-roboto font-normal text-[18px] leading-[27px] justify-center item-center pt-[80px] pl-[130px]">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra</span> <span className="pl-[280px]">ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</span>
                    </h1>
                    </div>

                    <div className="mt-[105px] ml-[120px]">
                        <Image src={List} alt="Sorry"/>
                      </div>
                        </div>
                    <h1 className="w-[786px]  h-[64px] ml-[660px] font-Roboto font-bold text-[56px] leading-[62.3px] justify-center item-center" >Courses</h1>

                    <h1 className="w-[768px]  h-[27px] ml-[648px] mt-[35px] font-Roboto font-normal text-[18px] leading-[27px] justify-center item-center">Your Ultimate Guide to learning</h1>

                    

                       <div className="w-[336px]  h-[40px] ml-[613px] mt-[50px] bg-white">
                  <li className="w-[60px] h-[24px] border-[1px] border-custom-gray -pt-[7px] font-roboto font-normal text-[16px] leading-[24px] list-none justify-center item-center flex">
                 <Link href="/Popular">Popular</Link></li>
                      
                  <li className="w-[108px]  h-[24px] border-[1px] border-custom-gray ml-[100px] -pt-[3px] -mt-[23px] font-roboto font-normal text-[16px] leading-[24px] list-none justify-center item-center flex">
                 <Link href="/Recommended">Recommended</Link></li>
               
                 <li className="w-[77px]  h-[24px] border-[1px] border-custom-gray ml-[240px] -mt-[23px] font-roboto font-normal text-[16px] leading-[24px] list-none justify-center item-center flex">
                 <Link href="/Best  Price">Best  Price</Link></li>
                       </div>
                      

                    

                    <div className="w-[1500px]  h-[534px] gap-[32px] mt-[100px] bg-white">

                    <ul className="w-[416] h-[300px]">
                   <Image src={BlogOne} alt="Sorry"/> 
                    <Image src={MiddleOne} alt="Sorry"/> 
                    <ul className="w-[117px]  h-[40px] rounded-[5px] border-[1px] border-black font-roboto font-normal text-[16px] leading-[24px] text-black justify-center item-center flex pt-[6px] mt-[20px]">
                    <Link href="/Enroll Now">Enroll Now</Link></ul>
                    <ul className="w-[117px] h-[40px] rounded-[5px] font-roboto font-medium text-[16px] leading-[24px] text-black justify-center item-center flex pt-[6px] -mt-[38.5px] ml-[110px]">
                    <Link href="/$400">$400</Link></ul> 
                   </ul>

                     <ul className="w-[416px] h-[300px] ml-[550px] -mt-[300px]"> 
                    <Image src={BlogTwo} alt="Sorry"/>
                    <Image src={MiddleTwo} alt="Sorry"/>
                     <ul className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black font-roboto font-normal text-[16px] leading-[24px] text-black justify-center item-center flex pt-[6px] mt-[20px]">
                    <Link href="/Enroll Now">Enroll Now</Link></ul>
                    <ul className="w-[117px] h-[40px] rounded-[5px] font-roboto font-medium text-[16px] leading-[24px] text-black justify-center item-center flex pt-[6px] -mt-[38.5px] ml-[110px]">
                    <Link href="/$400">$400</Link></ul>
                    </ul>

                   <ul className="w-[416px] h-[300px] ml-[1089px] -mt-[299px]">
                    <Image src={BlogThree} alt="Sorry"/>
                    <Image src={MiddleThree} alt="Sorry"/>
                     <ul className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black font-roboto font-normal text-[16px] leading-[24px] text-black justify-center item-center flex pt-[6px] mt-[20px]">
                    <Link href="/Enroll Now">Enroll Now</Link></ul>
                    <ul className="w-[117px] h-[40px] rounded-[5px] font-roboto font-medium text-[16px] leading-[24px] text-black justify-center item-center flex pt-[6px] -mt-[38px] ml-[110px]">
                    <Link href="/$400">$400</Link></ul> 
                    </ul>
                    
                    </div>
                    

                    <div className="w-[1500px]  h-[534px] gap-[32px] bg-white mt-[100px]">

                     <ul className="w-[416] h-[300px]"><Image src={BlogFour} alt="Sorry"/> 
                    <Image src={MiddleFour} alt="Sorry"/> 
                     <ul className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black font-roboto font-normal text-[16px] leading-[24px] text-black justify-center item-center flex pt-[6px] mt-[20px]">
                    <Link href="/Enroll Now">Enroll Now</Link></ul>
                    <ul className="w-[117px] h-[40px] rounded-[5px] font-roboto font-medium text-[16px] leading-[24px] text-black justify-center item-center flex pt-[6px] -mt-[38.5px] ml-[110px]">
                    <Link href="/$400">$400</Link></ul> 
                   </ul>
                    
                    <ul className="w-[416px] h-[300px] ml-[550px] -mt-[300px]">
                    <Image src={BlogFive} alt="Sorry"/>
                    <Image src={MiddleFive} alt="Sorry"/> 
                     <ul className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black font-roboto font-normal text-[16px] leading-[24px] text-black justify-center item-center flex pt-[6px] mt-[20px]">
                    <Link href="/Enroll Now">Enroll Now</Link></ul>
                    <ul className="w-[117px] h-[40px] rounded-[5px] font-roboto font-medium text-[16px] leading-[24px] text-black justify-center item-center flex pt-[6px] -mt-[38.5px] ml-[110px]">
                    <Link href="/$400">$400</Link></ul>        
                   </ul>

                    <ul className="w-[416] h-[300px] ml-[1089px] -mt-[299px]">
                    <Image src={BlogSix} alt="Sorry"/>
                    <Image src={MiddleSix} alt="Sorry"/> 
                     <ul className="w-[110px] h-[40px] rounded-[5px] border-[1px] border-black font-roboto font-normal text-[16px] leading-[24px] text-black justify-center item-center flex pt-[6px] mt-[20px]">
                    <Link href="/Enroll Now">Enroll Now</Link></ul>
                    <ul className="w-[117px] h-[40px] rounded-[5px] font-roboto font-medium text-[16px] leading-[24px] text-black justify-center item-center flex pt-[6px] -mt-[38.5px] ml-[110px]">
                    <Link href="/$400">$400</Link></ul>     
                   </ul>                   
                       </div>
                       


                    <h1 className="w-[152px] h-[40px] ml-[655px] mt-[80px] rounded-[5px] border-[1px] border-black font-roboto font-normal text-[16px] pt-[10px] leading-[16px] text-black item-center justify-center flex"> 
                    View All Courses
                    </h1>
                    <div className="">
                     <div className="w-[1500px]  h-[895px] mt-[250px] bg-white">
                    <h1 className="w-[768px]  h-[58px] ml-[350px] font-roboto font-bold text-[48px] leading-[57.6px] justify-center text-center flex text-black">
                      Our team</h1>
                    <h2 className="w-[768px]  h-[27px] ml-[350px] mt-[30px] font-roboto font-normal text-[18px] leading-[27px] justify-center text-center flex text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                      <ul className="ml-[100px] mt-[110px]">
                        <Link href="/"><Image src={Last} alt="Sorry"/></Link></ul>
                    </div>
                    </div>

                    
                    <div className="w-[1500px]  h-[830.89px] bg-">
                      <h1 className="w-[560px]  h-[58px] ml-[60px] font-roboto font-bold text-[48px] leading-[57.6px] text-black">
                        Customer testimonials</h1>
                      <h2 className="w-[560px]  h-[27px] ml-[60px] mt-[20px] font-roboto font-normal text-[18px] leading-[27px] text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>

                      <ul className="ml-[65px] mt-[110px]">
                        <Link href="/"><Image src={LastOne} alt="Sorry"/></Link></ul>
                      <ul className="ml-[570px] -mt-[320px]">
                        <Link href="/"><Image src={LastTwo} alt="Sorry"/></Link></ul>     
                      <ul className="ml-[1060px] -mt-[318px]">
                        <Link href="/"><Image src={LastThree} alt="Sorry"/></Link></ul>

                        <ul className="w-[72px]  h-[8px] ml-[65px] mt-[60px] gap-[8px] flex justify-between">
                        <Image src={SiderDots} alt="Sorry"/></ul>
                        <div className="w-[111px]  h-[48px] ml-[1315px] -mt-[20px] gap-[15px] flex justify-between">
                        <Image src={Sider} alt="Sorry"/></div>                       
                    </div>
                  

                  
                    <div className="w-[1500px]  h-[684px] mt-[150px] bg-">
                    <h1 className="w-[500px]  h-[27px] ml-[76px] font-roboto font-semibold text-[18px] leading-[27px] text-black ">
                      Subscribe to our newsletter</h1>
                    <h2 className="w-[500px]  h-[24px] ml-[76px] font-roboto font-normal text-[16px] leading-[24px] text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                      <ul className="ml-[1060px] -mt-[45px]">
                      <h1 className="w-[241px]  h-[40px] font-roboto font-normal text-[16px] leading-[24px] text-gray-700 rounded-[5px] border-[1px] border-black pt-[6px] pl-[9px]">
                      Enter your email</h1>
                      <h1 className="w-[119px] h-[40px] font-roboto font-normal text-[16px] leading-[24px] text-black rounded-[5px] border-[1px] border-black pt-[6px] pl-[21px] ml-[260px] -mt-[39.900px]"> Subscribe</h1>
                      <h1 className="w-[400px] h-[18px] font-roboto font-normal text-[12px] leading-[18px] text-black rounded-[5px] mt-[8px]">By subscribing you agree to with our Privacy Policy</h1>
                      </ul>
                      

                      
                    <div className="ml-[70px] mt-[150px]"><Image src={FooterOne} alt="Sorry"/></div>
                    
                    <div className="w-[1153px]  h-[400px] ml-[300px] -mt-[40px] bg-"> 
                       <ul className="w-[250px] h-[24px] font-roboto font-semibold text-[16px] leading-[24px] text-black  ml-[300px]">
                        <Link href="/Courses">Courses</Link></ul> 

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black ml-[300px] mt-[30px]">
                        <Link href="/Business">Business</Link></ul>

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black  ml-[300px] mt-[30px]">
                        <Link href="/Development">Development</Link></ul>

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black  ml-[300px] mt-[30px]">
                        <Link href="/Technology">Technology</Link></ul>

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black  ml-[300px] mt-[30px]">
                        <Link href="/Design">Design</Link></ul>

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black  ml-[300px] mt-[30px]">
                        <Link href="/Programming">Programming</Link></ul>
                        

                      
                      <div className="-mt-[276px] ml-[580px]">
                        <ul className="w-[250px] h-[24px] font-roboto font-semibold text-[16px] leading-[24px] text-black">
                        <Link href="/Resources">Resources</Link></ul> 

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black mt-[30px]">
                        <Link href="/Career">Career</Link></ul>

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black  mt-[30px]">
                        <Link href="/Resume">Resume</Link></ul>

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black  mt-[30px]">
                        <Link href="/Learning">Learning</Link></ul>

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black  mt-[30px]">
                        <Link href="/Interview Preparation">Interview Preparation</Link></ul>

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black  mt-[30px] ">
                        <Link href="/Jobs">Jobs</Link></ul>
                        </div>
                      

                        
                        <div className="-mt-[276px] ml-[400px]">
                        <ul className="w-[250px] h-[24px] font-roboto font-semibold text-[16px] leading-[24px] text-black  ml-[500px]">
                        <Link href="/About Us">About Us</Link></ul> 

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black ml-[500px] mt-[30px]">
                        <Link href="/Contact">Contact</Link></ul>

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black  ml-[500px] mt-[30px]">
                        <Link href="/Help/Support">Help/Support</Link></ul>

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black  ml-[500px] mt-[30px]">
                        <Link href="/FAQ">FAQ</Link></ul>

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black  ml-[500px] mt-[30px]">
                        <Link href="/Terms and Conditions">Terms and Conditions</Link></ul>

                        <ul className="w-[250px] h-[21px] font-roboto font-normal text-[14px] leading-[21px] text-black  ml-[500px] mt-[30px] ">
                        <Link href="/Partners">Partners</Link></ul>
                        </div>
                        
                    </div>
                   <h1 className="ml-[80px]">----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>
                    </div>
                    <Footer />
                    <ul className="w-[736px] h-[24px] -mt-[23px] ml-[710px]">
                   <Image src={Actions} alt="Sorry"/> 
                    </ul>
              </div>               
            </div>  
          </div>
      </div> 
      
  </div>
  );
};