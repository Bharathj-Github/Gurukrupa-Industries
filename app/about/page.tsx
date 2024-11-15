"use client";
import Image from "next/image";
import { Chip } from "@nextui-org/react";

export default function AboutPage() {
  return (
    <div className="relative w-full h-full">
      <Image
        src={"/blurry.svg"}
        alt="blurry"
        width={700}
        height={0}
        className="absolute sm:top-[-26rem] sm:left-[-16rem] max-sm:w-[20rem] left-[-11rem] top-[-10rem]"
      />

      <div className="relative flex flex-col items-center mx-[5vw] ">
        <p className="sm:pt-[1rem] pt-5 uppercase sm:text-3xl text-2xl font-bold">
          About US
        </p>
        <p className="h-[0.4rem] bg-primary-300 rounded-full mt-1 w-[5rem]"></p>
        <div className="font-light text-base flex flex-col gap-4 pt-6 max-sm:text-sm text-wrap">
          <div className="flex items-center">
            <div className="flex flex-col gap-3 text-wrap">
              <p>
                I am pleased to introduce Gurukrupa Industries, a leading
                corrugated box manufacturing company based in Mysore,
                established in 1994. With 30 years of expertise in the packaging
                industry, we specialize in delivering high-quality packaging
                solutions tailored to the needs of our valued clients.
              </p>
              <p className="">
                At Gurukrupa Industries, we manufacture a wide range of
                packaging products, including:
              </p>
              <div className="flex flex-col gap-3">
                <Chip color="success" variant="dot">
                  Corrugated boxes
                </Chip>
                <Chip color="success" variant="dot">
                  Mono carton boxes
                </Chip>
                <Chip color="success" variant="dot">
                  2-ply rolls
                </Chip>
                <Chip color="success" variant="dot">
                  Multi-colour printed boxes
                </Chip>
                <Chip color="success" variant="dot">
                  Inner Cartons
                </Chip>
                <Chip color="success" variant="dot">
                  Plates and Partitions
                </Chip>
              </div>
            </div>
            <Image
          src={"/aboutus.svg"}
          alt="Box1"
          width={500}
          height={0}
          className="max-sm:hidden"
        />
          </div>
          <p>
            In addition to these, we pride ourselves on providing custom
            packaging solutions to cater unique requirements. Our facility is
            equipped with advanced B flute, C flute, and E flute automatic board
            units, offering a production capacity of 250 tons per month.
          </p>
          <p>
            We also have a dedicated manual plant with a capacity of 100 tons,
            allowing us to craft specialized, unique packaging designs for our
            customers.
          </p>
          <p>
            Our workforce consists of a dedicated team of skilled workers who
            are committed to meeting our customer’s needs with efficiency and
            precision. With their expertise, we ensure that every product is
            made to the highest standards.
          </p>
          <p>
            With three decades of experience, we are committed to offering
            exceptional quality, service, and innovative packaging solutions for
            a wide array of industries. We are equipped with all the necessary
            paper and box testing lab equipments to ensure and supply the best
            quality.
          </p>
          <p>
            We would be delighted to collaborate with you and discuss how
            Gurukrupa Industries can support your packaging needs. Please feel
            free to contact us for any inquiries or further information.
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-5">
        <Image
          src={"/aboutus.svg"}
          alt="Box1"
          width={800}
          height={0}
          className="sm:hidden"
        />
      </div>
    </div>
  );
}
