"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";
import { Chip } from "@nextui-org/react";
import { IoLocation } from "react-icons/io5";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { IoCalendarSharp } from "react-icons/io5";
import { TiHeartFullOutline } from "react-icons/ti";
import { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import { TbCopy } from "react-icons/tb";
import { TbCopyCheckFilled } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import { Code } from "@nextui-org/code";

function getTodayDayName() {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const dayIndex = today.getDay(); // Get the day of the week (0 for Sunday, 6 for Saturday)

  switch (weekDays[dayIndex]) {
    case "Sun":
      return (
        <Chip color="warning" variant="dot" className="text-tiny">
          Sun - Closed
        </Chip>
      );
    case "Mon":
      return (
        <Chip color="success" variant="dot" className="text-tiny">
          Mon - 09:00 am – 05:30 pm
        </Chip>
      );
    case "Tue":
      return (
        <Chip color="success" variant="dot" className="text-tiny">
          Tue - 09:00 am – 05:30 pm
        </Chip>
      );
    case "Wed":
      return (
        <Chip color="success" variant="dot" className="text-tiny">
          Wed - 09:00 am – 05:30 pm
        </Chip>
      );
    case "Thu":
      return (
        <Chip color="success" variant="dot" className="text-tiny">
          Thu - 09:00 am – 05:30 pm
        </Chip>
      );
    case "Fri":
      return (
        <Chip color="success" variant="dot" className="text-tiny">
          Fri - 09:00 am – 05:30 pm
        </Chip>
      );
    case "Sat":
      return (
        <Chip color="success" variant="dot" className="text-tiny">
          Sat - 09:00 am – 05:30 pm
        </Chip>
      );
  } // Return today's day name
}
export default function ContactPage() {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard
        .writeText("gurukrupa.gk@gmail.com")
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 5000); // Reset the state after 2 seconds
        })
        .catch((err) => {
          console.error("Failed to copy text:", err);
        });
    }
  };
  return (
    <div className="w-[100%] flex flex-col max-sm:flex-col justify-center items-center pb-5">
      <div className="pb-5 flex flex-col justify-center items-center">
        <p className="sm:pt-[1rem] pt-5 uppercase sm:text-3xl text-xl font-bold">
          contact Us
        </p>
        <p className="h-[0.4rem] bg-primary-300 rounded-full mt-1 w-[5rem]"></p>
      </div>
      <div className="flex justify-center sm:mt-10 max-sm:flex-col max-sm:gap-1 max-sm:pt-1 items-center gap-16">
        <div className="flex justify-center items-center flex-col ">
          <div className="w-[40vw] max-sm:w-[80vw] max-sm:h-[30vh] h-[60vh]">
            <Image
              src={"/blurry.svg"}
              alt="blurry"
              width={600}
              height={0}
              className="absolute sm:top-[-15rem] top-[-5rem] right-[-5rem] max-sm:w-[20rem] max-sm:hidden "
            />
            <div className="h-full relative z-10 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.6426367341433!2d76.64463207483023!3d12.339823087920488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7086ca56255d%3A0xe8857f2ac8d06d57!2sGurukrupa%20Industries!5e0!3m2!1sen!2sin!4v1733749009229!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 1 }}
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shop Location"
              ></iframe>
            </div>
          </div>
          <div className="w-full px-5 max-sm:pt-3 pt-8 pb-8 max-sm:mb-2 sm:w-[30vw]">
            <div className="flex items-center bg-primary-100 rounded-full px-5 py-2">
              <span className="text-3xl text-primary-800">
                <IoLocation />
              </span>
              <span className="flex justify-center items-center text-center text-wrap text-sm">
                34D, Industrial A Layout, Bannimantap, near Balaji Theatre,
                Mysuru, Karnataka 570015
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="w-[40vw] max-sm:w-[80vw] max-sm:h-[30vh] h-[60vh]">
            <div className="h-full relative z-10 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.5445146931806!2d76.64591039999999!3d12.3464148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf714b630da825%3A0x622910b51f52247!2sGurukrupa%20Industries%20unit%20-%202!5e0!3m2!1sen!2sin!4v1731082507521!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 1 }}
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shop Location"
              ></iframe>
            </div>
          </div>
          <div className="w-full  px-5 max-sm:pt-3 pt-8 pb-8 max-sm:mb-2 sm:w-[40vw]">
            <div className="flex items-center bg-primary-100 rounded-full px-5 py-2">
              <span className="text-3xl text-primary-800">
                <IoLocation />
              </span>
              <span className="flex justify-center items-center text-center text-wrap text-sm">
                109, Industrial A Layout, 2nd Stage, Shivarathreeshwara Nagar,
                Bannimantap, Mysuru, Karnataka 570015
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:w-[50vw] flex flex-col justify-center items-center w-full">
        <div className="flex flex-col gap-5 justify-center items-center pb-5 max-sm:text-xs max-sm:text-sm">
          <div className="flex flex-col items-center max-sm:w-[90vw] text-center">
            <p>
              We value each of our customers and believe nothing compares to a
              face-to-face visit.
            </p>
            <p>
              Our doors are always open, and we look forward to meeting you in
              person.
            </p>
          </div>
          <div className="flex max-sm:flex-col items-center justify-center gap-3">
            <Button color="primary" variant="solid">
              <Link
                href={"https://wa.me/9449609380"}
                target="_blank"
                className="flex items-center gap-2"
              >
                <span className="text-2xl">
                  <RiWhatsappFill />
                </span>
                Contact us via WhatsApp
              </Link>
            </Button>
            <Button
              onClick={handleCopy}
              className="bg-primary-200 max-sm:hidden"
            >
              {isCopied ? (
                <div className="flex items-center justify-center gap-2 w-[15rem]">
                  <TbCopyCheckFilled className=" text-xl" /> Copied!
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 w-[15rem]">
                  <SiGmail className="text-2xl" /> gurukrupa.gk@gmail.com
                  <TbCopy className="text-xl" />
                </div>
              )}
            </Button>
            <div className="flex items-center justify-center gap-2 w-[15rem] bg-gray-100 p-2 sm:hidden">
              <SiGmail className="text-2xl" />
              <Code> gurukrupa.gk@gmail.com</Code>{" "}
            </div>
          </div>

          <p className="flex items-center max-sm:w-[80vw]">
            Visit us anytime during our regular business hours – we’d love to
            see you!{" "}
            <span className="text-red-600 text-2xl pl-2">
              <TiHeartFullOutline />
            </span>
          </p>
          <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
              <Button className="" variant="flat" color="primary">
                <IoCalendarSharp /> Today {getTodayDayName()}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-2 py-3">
                <div className="text-small font-bold">
                  Regular Business Hours
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <Chip color="success" variant="dot" className="text-tiny">
                    Mon - 09:00 am – 05:30 pm
                  </Chip>
                  <Chip color="success" variant="dot" className="text-tiny">
                    Tue - 09:00 am – 05:30 pm
                  </Chip>
                  <Chip color="success" variant="dot" className="text-tiny">
                    Wed - 09:00 am – 05:30 pm
                  </Chip>
                  <Chip color="success" variant="dot" className="text-tiny">
                    Thu - 09:00 am – 05:30 pm
                  </Chip>
                  <Chip color="success" variant="dot" className="text-tiny">
                    Fri - 09:00 am – 05:30 pm
                  </Chip>
                  <Chip color="success" variant="dot" className="text-tiny">
                    Sat - 09:00 am – 05:30 pm
                  </Chip>
                  <Chip color="warning" variant="dot" className="text-tiny">
                    Sun - Closed
                  </Chip>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="">
          <Image
            src={"/contact.svg"}
            alt="Box2"
            width={300}
            height={0}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
