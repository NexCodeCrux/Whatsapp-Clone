"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Navigations, navigations } from "@/models/navigations";
import Toggle from "./Toggle";

const NavBar = () => {
  const pathname = usePathname();
  const navs: Navigations = navigations;

  return (
    <div className="bg-gray-200 border-1 border-gray-100 float-left h-screen p-2 flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        {navs.upperNav.map((nav) => {
          return (
            <Link
              href={nav.href}
              key={nav.name}
              className={clsx(
                "rounded-full flex items-center justify-center p-2 focus:outline-none focus:bg-gray-300 text-gray-600 font-bold",
                {
                  "bg-gray-300": pathname === nav.href,
                }
              )}
            >
              {pathname === nav.href ? <nav.iconFilled /> : <nav.icon />}
            </Link>
          );
        })}
      </div>

      <div className="transform rotate-90">
        <Toggle />
      </div>
      
      <div className="flex flex-col gap-3">
        {navs.lowerNav.map((nav) => {
          return (
            <Link
              href={nav.href}
              key={nav.name}
              className={clsx(
                "rounded-full flex items-center justify-center p-2 focus:outline-none focus:bg-gray-300 text-gray-600 font-bold",
                {
                  "bg-gray-300": pathname === nav.href,
                }
              )}
            >
              {pathname === nav.href ? <nav.iconFilled /> : <nav.icon />}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
