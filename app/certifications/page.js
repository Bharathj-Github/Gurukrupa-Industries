import { title } from "@/components/primitives";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function CertificationPage() {
  return (
    <div>
    <div className="flex flex-col items-center">
    <Image
      src={"/blurry.svg"}
      alt="blurry"
      width={500}
      height={0}
      className="absolute sm:top-[-6rem] sm:left-[-7rem] max-sm:w-[20rem] left-[-10rem] top-[-5rem]"
    />
    <p className="sm:pt-[1rem] pt-5 uppercase sm:text-3xl text-2xl font-bold relative z-10">Certifications</p>
    <p className="h-[0.4rem] bg-primary-300 rounded-full mt-1 w-[5rem] mb-5"></p>
    <img
      src="/Bronze.png"
      alt="certificate"
      width={500}
      height={0}
      className="pb-10"
    />
  </div>
  <Footer></Footer>
</div>
  );
}
