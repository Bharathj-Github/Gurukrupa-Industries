"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, cn,DropdownSection } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { PiDotDuotone } from "react-icons/pi";
import NextLink from "next/link";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import React, { useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NextUINavbar maxWidth="xl" position="sticky" isMenuOpen={isMenuOpen} height="6rem">
      <NavbarContent
        className="basis-1/5 sm:basis-full flex gap-[30%]"
        justify="start"
      >
        <NavbarBrand as="li" className="gap-0 sm:max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1 w-40 sm:w-[13rem]"
            href="/"
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={600}
              height={10}
              className=""
            />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2 items-center justify-center">
          {siteConfig.navItems.map((item) =>  (
              <NavbarItem key={item.href}>
                {item.label == "Capabilities" ? 
                <Dropdown
                showArrow
                classNames={{
                  base: "before:bg-default-200", // change arrow background
                  content: " border border-default-200 bg-gradient-to-br from-primary-50 to-white",
                }}
              >
                <DropdownTrigger>
                  <div 
                    className=" hover:cursor-pointer" 
                  >
                    Capabilities
                  </div>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
                <DropdownSection title="Capabilities">  
                  <DropdownItem
                      key="In House Lab"
                      href="lab"
                      // shortcut="⌘N"
                      // description="Create a new file"
                    >
                      In House Lab
                    </DropdownItem>
                    <DropdownItem
                      key="Machinery"
                      href="machinery"
                      // shortcut="⌘C"
                      // description="Copy the file link"
                    >
                      Machinery
                    </DropdownItem>
                    <DropdownItem
                      key="Production Capacity"
                      href="capacity"
                      // shortcut="⌘⇧E"
                      // description="Allows you to edit the file"
                    >
                      Production Capacity
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>:
              <NextLink
                className=""
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>}
              
              </NavbarItem>
            
          ))}
        </ul>
      </NavbarContent>
      {/* this is for mobile */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="center">
        <NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-4 pt-3 ">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              {item.label == "Capabilities" ? 
                <Accordion className="w-full rounded-2xl pl-10 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
                <AccordionItem key="1" aria-label="Capabilities" title="Capabilities">
                  <div className="flex flex-col gap-3 pb-3">
                <Link
                href="lab"
                className=" text-black w-full rounded-full py-2 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] flex gap-2 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <p className="bg-primary p-1 rounded-full animate-pulse"></p> In House Lab
              </Link>
                <Link
                href="machinery"
                className=" text-black w-full rounded-full py-2 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] flex gap-2 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <p className="bg-primary p-1 rounded-full animate-pulse"></p> Machinery
              </Link>
                <Link
                href="capacity"
                className=" text-black w-full rounded-full py-2 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] flex gap-2 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <p className="bg-primary p-1 rounded-full animate-pulse"></p> Production Capacity
              </Link>
              </div>
                </AccordionItem>
              </Accordion>:
              <Link
                color={"foreground"}
                href={item.href}
                size="lg"
                className="w-full rounded-full py-2 pl-10 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
      
    </NextUINavbar>
  );
};
