import { title } from "@/components/primitives";
import Card from "../../components/Card"
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={"/blurry.svg"}
        alt="blurry"
        width={500}
        height={0}
        className="absolute sm:top-[-6rem] sm:left-[-7rem] max-sm:w-[20rem] left-[-10rem] top-[-5rem]"
      />
      <p className="sm:pt-[1rem] pt-5 uppercase sm:text-3xl text-2xl font-bold">products</p>
      <p className="h-[0.4rem] bg-primary-300 rounded-full mt-1 w-[5rem]"></p>

      <p className="pt-3">At Gurukrupa Industries, we manufacture a wide range of packaging products</p>

      <div className="pt-7 grid ">
      <Card />
      </div>
    </div>
  );
}
