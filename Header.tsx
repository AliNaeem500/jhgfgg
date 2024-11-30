import Link from "next/link";
export default function Header () {
    return(
        <div className="w-[910] h-[44px] gap-[32px] bg-#FFFFFF flex disply:inline-block ml-[500px] -mt-[28px]">
    <li className="w-[44px] h-[24px] list-none border-[1px] border-#000000 gap-[10px] font-roboto font-400 text-[16px] text-#000000 text-center">
            <Link href="/">Home</Link></li>
    <li className="w-[59px] h-[24px] list-none border-[1px] border-#000000 gap-[10px] font-roboto font-400 text-[16px] text-#000000 text-center">
            <Link href="/Courses">Courses</Link></li>
    <li className="w-[61px] h-[24px] list-none border-[1px] border-#000000 gap-[10px] font-roboto font-400 text-[16px] text-#000000 text-center">
            <Link href="/Services">Services</Link></li>
    <li className="w-[93px] h-[24px] list-none border-[1px] border-#000000 gap-[10px] font-roboto font-400 text-[16px] text-#000000 text-center">
            <Link href="/Achievement">Achievement</Link></li>
    <li className="w-[66px] h-[24px] list-none border-[1px] border-#000000 gap-[10px] font-roboto font-400 text-[16px] text-#000000 text-center whitespace-nowrap">
            <Link href="/About Us">About Us</Link></li>
    <li className="w-[84px] h-[24px] list-none border-[1px] border-#000000 gap-[10px] font-roboto font-400 text-[16px] text-#000000 text-center"> 
            <Link href="/Testimonial">Testimonial</Link></li>
    <h1 className="[w-80px] h-[24px] border-[1px] rounded-[8px] p-[0px_20px] gap-[8px] border-#000000 flex justify center font-roboto text-[16px] font-[400] leading-[24px] text-[left]" > 
            <Link href="/Login">Login</Link></h1>
    <h2 className="w-[100px] h-[24px] p-[0px_20px] mt-[2px] gap-4 rounded-tl-[5px] bg-black font-roboto text-[16px] text-white flex item-center space-x-3 inline-flex">
            <Link href="/Sign Up">
            <span className="text-white">Sign</span>
            <span className="text-white"> Up</span>
            </Link></h2>
        </div>
    );
};