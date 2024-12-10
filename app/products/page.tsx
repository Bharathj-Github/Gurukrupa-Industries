import { title } from "@/components/primitives";
import Card from "../../components/Card"
import Image from "next/image";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center pb-5">
      {/* <Image
        src={"/blurry.svg"}
        alt="blurry"
        width={500}
        height={0}
        className="absolute sm:top-[-6rem] sm:left-[-7rem] max-sm:w-[20rem] left-[-10rem] top-[-5rem]"
      /> */}
      <p className="sm:pt-[1rem] pt-5 uppercase sm:text-3xl text-2xl font-bold">products</p>
      <p className="h-[0.4rem] bg-primary-300 rounded-full mt-1 w-[5rem]"></p>
      <div className="bg-blue-200 w-full items-center flex justify-center relative z-10 max-sm:mt-10 mt-3">
      <p className=" relative z-10 items-center text-center  sm:w-[70vw] w-[80vw]  p-2" >At Gurukrupa Industries, we manufacture a wide range of packaging products. In 3 decades of our experience we have successfully innovated and delivered approximately 100 unique products, satisfying more than 1258 clients till date.</p>
      </div>

      <div className="pt-7 grid ">
      <Card />
      <div className="flex justify-center py-5 sm:text-lg text-xs"><p className="bg-blue-200 px-5 py-2 rounded-full">Connect with us personally to explore more . . .</p></div>
      </div>
    </div>
  );
}
