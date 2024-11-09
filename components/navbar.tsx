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
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import {Button, ButtonGroup} from "@nextui-org/button";
import NextLink from "next/link";
import clsx from "clsx";
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
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
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

              <Link
                color={"foreground"}
                href={item.href}
                size="lg"
                className="w-full rounded-full py-2 pl-10 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
