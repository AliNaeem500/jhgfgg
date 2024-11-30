import Link from "next/link";
export default function Hero () {
    return(
        // left side
        <div className="w-[1427px] h-[800px] bg-white">
            <div className="w-[640px] h-[300px] pr-[80px] pl-[80px] gap-[24px] ">
                <h1 className="text-black w-[580px] h-[134px] font-roboto font-bold text-[56px] leading-[62.2px] -pr-[900px] -ml-[84px] pt-[200px]"
                >Learn new skills
                <br />
                online with ease
                </h1>

                <h2 className=" text-black w-[500px] h-[540x] font-roboto font-normal text-[18px] leading-[27px] pt-[150px] -ml-[81.5px]">
                    Discover a wide range of courses covering a variety of <br /> subjects, taught by expert instructors.</h2>
                <div className="mt-[35px] -ml-[81px]">
                <h3 className="bg-black text-white w-[178px] h-[48px] font-roboto font-normal text-[16px] leading-[24px] border-[1px] rounded-[5px] justify-center item-center flex gap-8px pt-[9px]"
                ><Link href="/Start learning now">Start learning now</Link>
                </h3>
                </div>

                    <div className="ml-[120px] -mt-[46px]">
                    <h4 className="bg-white text-black w-[164px] h-[48px] pt-[8px] font-roboto font-normal text-[16px] leading-[24px] roended-[5px] border-[3px] justify-center item-center flex gap-8px">
                    <Link href="/Explore Courses">Explore Courses</Link></h4>
       
                </div>
            </div>
        </div> 
     
    );
};